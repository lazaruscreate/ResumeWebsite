import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { NextResponse } from 'next/server'

// In production on Amplify, credentials come from the service role automatically.
// For local dev, set AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY in .env.local.
const s3 = new S3Client({
  region: process.env.AWS_REGION ?? 'us-east-1',
  ...(process.env.AWS_ACCESS_KEY_ID && {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  }),
})

export async function GET() {
  const bucket = process.env.RESUME_BUCKET
  const key = process.env.RESUME_KEY

  if (!bucket || !key) {
    return NextResponse.json(
      { error: 'Resume not configured' },
      { status: 503 }
    )
  }

  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key })
    const url = await getSignedUrl(s3, command, { expiresIn: 300 }) // 5 min
    return NextResponse.redirect(url)
  } catch (err) {
    console.error('[resume] Failed to generate presigned URL:', err)
    return NextResponse.json(
      { error: 'Failed to load resume' },
      { status: 500 }
    )
  }
}
