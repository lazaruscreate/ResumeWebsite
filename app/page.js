export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="container">
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-brand">MXA</span>
        <div className="nav-links">
          <a href="https://www.linkedin.com/in/mikexanderson/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/lazaruscreate" target="_blank" rel="noopener">GitHub</a>
          <a href="/api/resume" target="_blank" rel="noopener" className="nav-resume">Resume ↗</a>
          <a href="mailto:23michael.anderson@gmail.com" className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Tech Professional &amp; Air Force Veteran</p>
        <h1 className="hero-name">Michael X.<br />Anderson</h1>
        <div className="hero-meta">
          <span>Hattiesburg, MS</span>
          <span className="hero-dot">·</span>
          <span>Secret Clearance</span>
          <span className="hero-dot">·</span>
          <a href="mailto:23michael.anderson@gmail.com">23michael.anderson@gmail.com</a>
        </div>
        <p className="hero-summary">
          Results-driven Tech Professional and Air Force Veteran with over 8 years of experience
          in cloud technologies, programming (Java, Python, SQL), and database management. Proven
          ability to troubleshoot complex systems, lead technical support efforts, and implement
          scalable solutions.
        </p>
      </div>
    </header>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">Technical Skills</p>
      <div className="skills-grid">
        <div>
          <p className="skill-group-label">Proficient In</p>
          <div className="tags">
            {['AWS', 'Java', 'SQL', 'Python', 'Active Directory', 'Office 365', 'Intercom'].map(s => (
              <span key={s} className="tag tag-proficient">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="skill-group-label">Experience With</p>
          <div className="tags">
            {['C', 'JavaScript', 'HTML', 'CSS', 'Scala', 'Metabase', 'Windows'].map(s => (
              <span key={s} className="tag tag-secondary">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="skill-group-label">Tools</p>
          <div className="tags">
            {['Git', 'Agile', 'WebStorm', 'Apache Spark', 'Bash', 'LogRocket', 'Splashtop'].map(s => (
              <span key={s} className="tag tag-secondary">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="skill-group-label">Certifications</p>
          <div className="tags">
            {['CompTIA Security+', 'AWS Solutions Architect Associate', 'AWS Cloud Practitioner'].map(s => (
              <span key={s} className="tag tag-cert">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const jobs = [
  {
    title: 'Support Operations Manager',
    company: 'GreenSpark Software',
    url: 'https://www.greensparksoftware.com/',
    date: 'May 2024 – Present',
    location: 'Remote · 40 Hr/Wk',
    bullets: [
      'Managed 8,800+ Intercom support conversations over two years, maintaining a 94.1% CSAT score with a 2m 30s median first response time while serving as the primary technical point of contact worldwide. Implemented and managed RBAC and data access controls.',
      'Owned end-to-end account onboarding and accounting integration for new customers via Codat, configuring and troubleshooting live connections across QuickBooks Online, QuickBooks Desktop, Xero, and MBC to ensure accurate financial data sync and platform readiness.',
      'Engineered AI-powered troubleshooting tools using Claude (Anthropic) by authoring custom skill prompts and knowledge-base workflows, reducing resolution time on recurring support issues and enabling faster, consistent responses at scale.',
      'Executed large-scale customer data migrations during onboarding, using advanced Excel and Google Sheets formulas to transform, clean, and restructure tens of thousands of rows of financial and operational data for ingestion into production systems.',
    ],
  },
  {
    title: 'Help Desk Technician II',
    company: 'Defense Health Agency',
    url: 'https://walterreed.tricare.mil/',
    date: 'Oct 2023 – May 2024',
    location: 'Bethesda, MD · 40 Hr/Wk',
    bullets: [
      'Provided second-level support for troubleshooting, software updates, hardware replacement, and user training through face-to-face interaction, phone calls, and remote access methods using the Bomgar remote support platform.',
      'Conducted re-imaging of desktop workstations and laptops and enforced asset management protocols including replacements, upgrades, and compliance with Defense Reutilization Marketing Office (DRMO) guidelines.',
    ],
  },
  {
    title: 'Software Development Engineer Apprentice',
    company: 'Amazon',
    url: 'https://www.amazon.com/',
    date: 'Jan 2022 – Aug 2023',
    location: 'Seattle, WA · 40 Hr/Wk',
    bullets: [
      'Orchestrated a seamless database migration for a Scala website, transitioning from DynamoDB to an internal key-value storage solution — resulting in a ~35% reduction in developer operation load and improved scalability for future growth.',
      'Designed and implemented a critical Java backend process ingesting and transforming over 50 TB of CSVs for daily and yearly validation jobs, developing rate validation methods to prevent catastrophic codebase and customer-facing failures.',
      'Developed intricate SQL queries against AWS Redshift for data analysis and reporting, and managed an internal Java resource tracking tool for monitoring and evaluating internal spending performance.',
    ],
  },
  {
    title: 'Lead Systems Technician',
    company: 'United States Air Force',
    url: 'https://www.airforce.com/',
    date: 'Jan 2018 – Jan 2022',
    location: 'Valdosta, GA · 40 Hr/Wk',
    bullets: [
      'Conducted wire maintenance, software reformatting, and wrote Python scripts to streamline workflows while actively participating in on-call helicopter search and rescue operations. Resolved radio and radar system issues achieving 100% operational readiness, including handling and loading of secret cryptographic keys for multinational operations.',
      'Provided comprehensive training to a team of over 30 personnel on Communications and Navigation principles, classified material handling, and maintenance discipline.',
    ],
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label">Experience</p>
      <div className="timeline">
        {jobs.map((job) => (
          <div key={job.title} className="timeline-item">
            <div className="timeline-dot" />
            <div className="job-header">
              <div>
                <h2 className="job-title">{job.title}</h2>
                <a className="job-company" href={job.url} target="_blank" rel="noopener">
                  {job.company}
                </a>
              </div>
              <div className="job-meta">
                <span className="job-date">{job.date}</span>
                <span className="job-type">{job.location}</span>
              </div>
            </div>
            <ul className="job-bullets">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

const education = [
  {
    degree: 'B.S., Computer Science',
    minor: 'Minor: Data Science',
    school: 'University of Maryland Global Campus',
    url: 'https://www.umgc.edu/',
    date: 'May 2025',
  },
  {
    degree: 'A.A.S., Avionics Systems Technologies',
    school: 'Community College of the Air Force',
    url: 'https://www.airuniversity.af.edu/Barnes/CCAF/',
    date: 'October 2021',
  },
]

function Education() {
  return (
    <section className="section" id="education">
      <p className="section-label">Education</p>
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.degree} className="edu-card">
            <div className="edu-header">
              <div>
                <h2 className="edu-degree">{e.degree}</h2>
                {e.minor && <p className="edu-minor">{e.minor}</p>}
                <a className="edu-school" href={e.url} target="_blank" rel="noopener">
                  {e.school}
                </a>
              </div>
              <span className="edu-date">{e.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>Michael X. Anderson &copy; 2026</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/mikexanderson/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/lazaruscreate" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:23michael.anderson@gmail.com">23michael.anderson@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
