const projects = [
  {
    title: 'MungerFirebase',
    description:
      'React chat app backed by a Firebase Cloud Function that proxies messages to Google\'s PaLM language model. Includes a CI/CD pipeline via GitHub Actions for automatic Firebase Hosting deployments on merge.',
    tech: ['React', 'Firebase', 'Cloud Functions', 'Google PaLM API', 'GitHub Actions'],
    url: 'https://github.com/mavila14/mungerfirebase',
  },
  {
    title: '8-Bit Escape',
    description:
      'Terminal-based zombie escape game written in Java. Features a JSON-driven map and enemy system, ASCII art, spatial navigation, weapons (shotgun, molotov), and 8-bit sound effects. Built collaboratively with two teammates.',
    tech: ['Java', 'JSON', 'OOP', 'ASCII Art'],
    url: 'https://github.com/jilly-jill/8-bit-escape',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio site built with Next.js 15 and Tailwind CSS. Features a two-column sticky layout, mouse spotlight effect, IntersectionObserver-driven active nav, and SSR deployment on AWS Amplify.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS Amplify'],
    url: 'https://michaelxanderson.com',
  },
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
            <h3 className="font-semibold text-slate-200">
              {project.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-slate-400">{project.description}</p>
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
