const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio site built with Next.js 15 and Tailwind CSS. Features a two-column sticky layout, mouse spotlight effect, IntersectionObserver-driven active nav, and SSR deployment on AWS Amplify.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS Amplify'],
    url: 'https://michaelxanderson.com',
  },
  // TODO: Add more projects
]

export default function Projects() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-indigo-400/30 hover:bg-slate-800/50"
          >
            <h3 className="font-semibold text-slate-200 transition-colors group-hover:text-indigo-400">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
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
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-indigo-400/20 bg-indigo-400/5 px-3 py-1 text-xs font-medium text-indigo-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
