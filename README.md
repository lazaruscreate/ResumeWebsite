# Michael X. Anderson — Resume Website

Personal resume site for Michael X. Anderson

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Hosting:** AWS Amplify (auto-deploy on push to `main`)
- **Resume delivery:** S3 presigned URL via Next.js API route — PDF never publicly exposed
- **Styling:** Custom CSS with CSS variables, no framework

## Project Structure

```
app/
├── layout.js          # Root layout, metadata, Inter font
├── page.js            # Full single-page portfolio
├── globals.css        # Design system (CSS variables, all styles)
└── api/
    └── resume/
        └── route.js   # Generates S3 presigned URL and redirects
```

## Resume PDF Route

`GET /api/resume` — generates a fresh presigned S3 URL (5 min expiry) and redirects the user to it. Requires the following environment variables:

```
AWS_REGION=us-east-1
RESUME_BUCKET=manderson-resume-bucket
RESUME_KEY=MAnderson-Resume-2026.pdf
```

In production, credentials come from the Amplify compute role (no keys needed). For local dev, add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to `.env.local`.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
