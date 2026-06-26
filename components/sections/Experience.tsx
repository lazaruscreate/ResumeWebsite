const experiences = [
  {
    dateRange: 'May 2024 — Present',
    title: 'Support Operations Manager',
    company: 'GreenSpark Software',
    url: 'https://www.greensparksoftware.com/',
    description:
      'Managed 8,800+ Intercom support conversations with a 94.1% CSAT score and 2m 30s median first response time. Owned end-to-end customer onboarding and accounting integrations via Codat across QuickBooks, Xero, and MBC. Engineered AI-powered troubleshooting tools using Claude (Anthropic). Executed large-scale data migrations using advanced Excel and Google Sheets.',
    tech: ['Intercom', 'Claude AI', 'Codat', 'QuickBooks', 'RBAC', 'Google Sheets'],
  },
  {
    dateRange: 'Oct 2023 — May 2024',
    title: 'Help Desk Technician II',
    company: 'Defense Health Agency',
    url: 'https://walterreed.tricare.mil/',
    description:
      'Provided second-level technical support at Walter Reed National Military Medical Center via face-to-face, phone, and remote access. Conducted workstation re-imaging, hardware replacement, and user training. Enforced asset management and DRMO compliance protocols.',
    tech: ['Bomgar', 'Active Directory', 'Windows', 'Asset Management'],
  },
  {
    dateRange: 'Jan 2022 — Aug 2023',
    title: 'Software Development Engineer Apprentice',
    company: 'Amazon',
    url: 'https://www.amazon.com/',
    description:
      'Migrated a Scala web service from DynamoDB to an internal key-value store, reducing developer operation load by ~35%. Built a Java backend process ingesting 50TB+ of CSV data for daily and yearly validation jobs. Developed SQL queries against AWS Redshift for reporting and managed an internal Java resource tracking tool.',
    tech: ['Java', 'Scala', 'DynamoDB', 'AWS Redshift', 'SQL', 'AWS'],
  },
  {
    dateRange: 'Jan 2018 — Jan 2022',
    title: 'Lead Systems Technician',
    company: 'United States Air Force',
    url: 'https://www.airforce.com/',
    description:
      'Maintained avionics, radio, and radar systems achieving 100% operational readiness. Wrote Python scripts to streamline maintenance workflows. Participated in on-call helicopter search and rescue operations. Led training for 30+ personnel on communications, navigation, and classified material handling.',
    tech: ['Python', 'Avionics', 'Cryptography', 'Systems Maintenance', 'Training'],
  },
]

export default function Experience() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Experience
      </h2>
      <div className="flex flex-col gap-12">
        {experiences.map((job) => (
          <div key={job.title} className="group relative grid gap-4 sm:grid-cols-8">
            {/* Date range */}
            <div className="pt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:col-span-2">
              {job.dateRange}
            </div>

            {/* Content */}
            <div className="sm:col-span-6">
              <h3 className="font-semibold leading-snug text-slate-200">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors group-hover:text-indigo-400"
                >
                  {job.title} &middot;{' '}
                  <span className="text-slate-400 group-hover:text-indigo-300">{job.company}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-0.5 h-4 w-4 shrink-0 translate-y-px opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-400">{job.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-indigo-400/20 bg-indigo-400/5 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
