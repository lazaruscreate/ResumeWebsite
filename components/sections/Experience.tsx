const experiences = [
  {
    dateRange: 'May 2024 — Present',
    title: 'Support Operations Manager',
    company: 'GreenSpark Software',
    url: 'https://www.greensparksoftware.com/',
    bullets: [
      'Managed 8,800+ Intercom support conversations over two years with a 94.1% CSAT score and 2m 30s median first response time, serving as the primary technical point of contact worldwide and handling the majority of all company IT and support volume.',
      'Implemented and managed RBAC and data access controls across the platform.',
      'Owned end-to-end account onboarding and accounting integrations via Codat, configuring and troubleshooting live connections across QuickBooks Online, QuickBooks Desktop, Xero, and MBC to ensure accurate financial data sync and platform readiness.',
      'Engineered AI-powered troubleshooting tools using Claude (Anthropic) by authoring custom skill prompts and knowledge-base workflows, reducing resolution time on recurring issues and enabling faster, consistent responses at scale.',
      'Executed large-scale data migrations using advanced Excel and Google Sheets to transform, clean, and restructure tens of thousands of rows of financial and operational data for ingestion into production systems.',
    ],
    tech: ['Intercom', 'Claude AI', 'Codat', 'QuickBooks', 'Xero', 'RBAC', 'Google Sheets'],
  },
  {
    dateRange: 'Oct 2023 — May 2024',
    title: 'Help Desk Technician II',
    company: 'Defense Health Agency',
    url: 'https://walterreed.tricare.mil/',
    bullets: [
      'Provided second-level support for troubleshooting, software updates, hardware replacement, and user training at Walter Reed National Military Medical Center through face-to-face interaction, phone calls, and remote access via the Bomgar platform.',
      'Conducted re-imaging of desktop workstations and laptops, troubleshooting issues to restore operational functionality.',
      'Enforced asset management protocols including replacements, upgrades, and compliance with Defense Reutilization Marketing Office (DRMO) guidelines.',
    ],
    tech: ['Bomgar', 'Active Directory', 'Windows', 'Asset Management', 'DRMO'],
  },
  {
    dateRange: 'Jan 2022 — Aug 2023',
    title: 'Software Development Engineer Apprentice',
    company: 'Amazon',
    url: 'https://www.amazon.com/',
    bullets: [
      'Orchestrated a database migration for a Scala website from DynamoDB to an internal key-value storage solution, reducing developer operation load by ~35% and significantly accelerating scheduled processes and scalability for future growth.',
      'Designed and implemented a critical Java backend process that ingested and transformed over 50 TB of CSVs for daily and yearly validation jobs, developing rate validation methods to prevent catastrophic failures in both the codebase and customer-facing website.',
      'Developed intricate SQL queries against AWS Redshift for data analysis and reporting, and managed an internal Java resource tracking tool supporting a site dedicated to monitoring and evaluating internal spending performance.',
    ],
    tech: ['Java', 'Scala', 'DynamoDB', 'AWS Redshift', 'SQL', 'AWS'],
  },
  {
    dateRange: 'Jan 2018 — Jan 2022',
    title: 'Lead Systems Technician',
    company: 'United States Air Force',
    url: 'https://www.airforce.com/',
    bullets: [
      'Conducted wire maintenance, software reformatting, and wrote Python scripts to streamline workflows while actively participating in on-call helicopter search and rescue operations, ensuring optimal functionality and rapid response during critical missions.',
      'Demonstrated exceptional troubleshooting skills resolving radio and radar system issues, achieving 100% operational readiness and ensuring continuous operation of aircraft avionics systems — including the handling and loading of secret cryptographic keys for multinational operations.',
      'Provided comprehensive training to a team of over 30 personnel on Communications and Navigation principles, classified material handling, and maintenance discipline.',
    ],
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
              <ul className="mt-3 flex flex-col gap-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/50" />
                    {b}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
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
