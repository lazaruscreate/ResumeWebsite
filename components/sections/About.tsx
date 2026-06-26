export default function About() {
  return (
    <div>
      {/* Section label — visible only on mobile where sidebar is hidden */}
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        About
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-slate-400">
        <p>
          I&apos;m a tech professional and Air Force veteran who has spent over 8 years finding ways
          to make complex systems work better. I&apos;ve maintained avionics systems for Combat
          Search and Rescue in the Air Force, engineered backend pipelines at Amazon, and most
          recently built cloud infrastructure and AI tooling at a software startup in its growth
          stages. Each role has been different enough to keep me sharp and similar enough to show me
          that disciplined, detail-oriented engineering transfers everywhere.
        </p>
        <p>
          I genuinely enjoy learning new tools and stacks, and I put the same care into a quick
          script as I do into a major system design. I hold a B.S. in Computer Science from the
          University of Maryland Global Campus along with AWS and CompTIA certifications, and
          I&apos;m currently working toward CCNA and CySA+ as my next focus area.
        </p>
      </div>
    </div>
  )
}
