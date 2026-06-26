const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    // TODO: Add year and credential URL
  },
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
]

export default function Certifications() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Certifications
      </h2>
      <ul className="flex flex-col gap-4">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex items-center gap-4 rounded-lg border border-slate-700/50 bg-slate-800/30 px-5 py-4"
          >
            <div className="shrink-0 rounded-full border border-indigo-400/30 bg-indigo-400/10 p-2 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-slate-200">{cert.name}</p>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
