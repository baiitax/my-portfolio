"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GraduationCap,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Plus,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import {
  categories,
  certifications,
  contributions,
  education,
  experience,
  leadership,
  profile,
  projectFilters,
  projects,
  skills,
  type Project,
} from "@/data/portfolio";
import { ProjectVisual, SystemVisual } from "./system-visual";
import { Preloader } from "./preloader";
import {
  approach,
  skillApplications,
  experienceInsights,
  projectInsights,
  collaborationGuide,
} from "@/data/insights";
const links = [
  ["Overview", "overview"],
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];
function SectionHead({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <div className="eyebrow">
        <span>{number}</span> / {label}
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("overview");
  const [filter, setFilter] = useState("Show all");
  const [selectedSkill, setSelectedSkill] = useState<
    (typeof skills)[number] | null
  >(null);
  const [projectFilter, setProjectFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [cap, setCap] = useState(0);
  const [emailNotice, setEmailNotice] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((x) => observer.observe(x));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (selectedProject) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  function closeModal() {
    setSelectedProject(null);
    trigger.current?.focus();
  }
  const capabilities = [
    {
      title: "Build",
      icon: Code2,
      short: "Turn ideas into useful systems.",
      description:
        "Software and web development, databases, IT systems, and technical implementation. Begin with the operational problem, structure requirements, and explore a practical technical solution.",
    },
    {
      title: "Automate",
      icon: Workflow,
      short: "Bring structure to everyday work.",
      description:
        "Manual-process analysis, digital workflow design, and structured process improvement. Connect steps, responsibilities, and information so business operations are easier to understand and manage.",
    },
    {
      title: "Strategise",
      icon: Layers3,
      short: "See the business behind the brief.",
      description:
        "Business analysis, project planning, digital marketing operations, and commercial opportunity assessment. Understand needs and constraints before defining a considered approach.",
    },
    {
      title: "Connect Markets",
      icon: Globe2,
      short: "Explore opportunity beyond borders.",
      description:
        "Agricultural trade research, supplier and buyer discovery concepts, and Saudi–West Africa commercial opportunity exploration. Research and qualification come before commercial claims.",
    },
  ];
  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav-wrap">
        <motion.div
          className="reading-progress"
          style={{ scaleX: scrollYProgress }}
        />
        <nav className="nav" aria-label="Main navigation">
          <a href="#overview" className="brand">
            <span className="brand-mark">
              m<span>.</span>
            </span>
            <span>
              Mujahid Baita<small>TECHNOLOGY · SYSTEMS · STRATEGY</small>
            </span>
          </a>
          <div className={"nav-links " + (menu ? "open" : "")}>
            {links.map(([label, id]) => (
              <a
                key={id}
                href={"#" + id}
                className={active === id ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
          </div>
          {profile.cvUrl && (
            <a className="nav-cv" href={profile.cvUrl} download>
              CV <ArrowDown size={12} />
            </a>
          )}
          <a className="button nav-cta" href="#contact">
            Let’s Collaborate <ArrowUpRight size={15} />
          </a>
          <button
            className="mobile-toggle"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <main id="main">
        <section id="overview" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> TECHNOLOGY × BUSINESS × INNOVATION
            </div>
            <h1>
              Building Intelligent
              <br />
              Systems.
              <br />
              <span>Automating Business.</span>
              <br />
              Connecting Markets<span className="headline-dot">.</span>
            </h1>
            <p>
              I combine software development, business-process analysis,
              automation, and commercial strategy to explore and build solutions
              for real operational challenges.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work <ArrowUpRight size={17} />
              </a>
              <a className="text-button" href="#contact">
                Let’s Connect <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-tags">
              <span>
                <i /> Digital Transformation
              </span>
              <span>
                <i /> Business Systems & Automation
              </span>
              <span>
                <i /> Agro-Commercial Strategy
              </span>
            </div>
          </div>
          <div className="hero-right">
            <SystemVisual />
            <div className="hero-caption">
              <span>
                <Globe2 size={14} /> BASED IN NIGERIA · GLOBALLY MINDED
              </span>
              <span>
                IDEAS INTO SYSTEMS <ArrowDownRight size={15} />
              </span>
            </div>
          </div>
          <a href="#about" className="scroll-hint">
            <span>
              <ArrowDown size={15} />
            </span>{" "}
            SCROLL TO EXPLORE
          </a>
        </section>
        <div className="discipline-strip">
          <div className="container">
            <span>A MULTIDISCIPLINARY PERSPECTIVE</span>
            <p>
              Technology <Plus /> Business Operations <Plus /> Product Thinking{" "}
              <Plus /> Commercial Strategy
            </p>
          </div>
        </div>
        <section id="about" className="section container">
          <Reveal>
            <div className="about-layout">
              <div>
                <SectionHead
                  number="01"
                  label="ABOUT"
                  title="More than code. A systems-oriented approach to business."
                />
                <p className="body-copy">
                  I work at the intersection of technology, business operations,
                  and commercial strategy—transforming manual processes into
                  structured digital workflows, exploring scalable software
                  products, and developing technology-enabled approaches to
                  business growth and international trade.
                </p>
                <div className="about-context">
                  <strong>
                    Technical foundation. Operational perspective.
                  </strong>
                  <p>
                    My background connects computer support, web and software
                    development, digital marketing, and business analysis. My
                    project interests extend this foundation into product
                    architecture, workflow automation, and agricultural trade
                    research.
                  </p>
                </div>
                <a className="inline-link" href="#experience">
                  Explore my professional journey <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="identity-card">
                <div className="identity-top">
                  <span>PROFESSIONAL IDENTITY</span>
                  <span>NG / MYB</span>
                </div>
                <div className="identity-person">
                  <div className="initials">
                    MB<span>.</span>
                  </div>
                  <div>
                    <h3>Mujahid Yakubu Baita</h3>
                    <p>
                      Technology & Digital Transformation
                      <br />
                      Business Systems · Software Development
                    </p>
                    <span className="location">
                      <Globe2 size={13} /> Nigeria
                    </span>
                  </div>
                </div>
                <div className="qualification">
                  <GraduationCap size={21} />
                  <div>
                    <strong>B.Sc. Computer Science</strong>
                    <span>Bayero University Kano · 2020</span>
                  </div>
                </div>
                <div className="tags">
                  {[
                    "Software Development",
                    "Business Automation",
                    "IT Operations",
                    "Digital Marketing",
                    "Business Analysis",
                    "Agro-Commercial Strategy",
                  ].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button
                  className="identity-expand"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  A little more about my approach{" "}
                  <Plus
                    size={17}
                    style={{ transform: expanded ? "rotate(45deg)" : "" }}
                  />
                </button>
                {expanded && (
                  <p className="expanded-bio">{profile.biography}</p>
                )}
              </div>
            </div>
            <div className="approach-block">
              <div className="eyebrow">HOW I APPROACH A BUSINESS CHALLENGE</div>
              <div className="approach-grid">
                {approach.map((a, i) => (
                  <article key={a.title}>
                    <span>0{i + 1}</span>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section id="expertise" className="section expertise-section">
          <div className="container">
            <Reveal>
              <div className="heading-row">
                <SectionHead
                  number="02"
                  label="EXPERTISE"
                  title="The periodic table of my stack."
                >
                  Technical foundations, operational capabilities, and strategic
                  disciplines.
                </SectionHead>
                <span className="section-note">
                  A CONNECTED TOOLKIT.
                  <br />
                  NOT JUST A TECH STACK.
                </span>
              </div>
              <div className="filters" aria-label="Filter skills">
                {["Show all", ...categories].map((c) => (
                  <button
                    key={c}
                    aria-pressed={filter === c}
                    className={filter === c ? "selected" : ""}
                    onClick={() => {
                      setFilter(c);
                      setSelectedSkill(null);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="skills-grid">
                {skills
                  .filter((s) => filter === "Show all" || s.category === filter)
                  .map((s) => (
                    <button
                      key={s.name}
                      className={
                        "skill-tile cat-" +
                        categories.indexOf(s.category) +
                        (s.exploratory ? " exploratory" : "") +
                        (selectedSkill?.name === s.name ? " picked" : "")
                      }
                      title={skillApplications[s.name] || s.description}
                      onClick={() => setSelectedSkill(s)}
                      aria-pressed={selectedSkill?.name === s.name}
                    >
                      <span className="skill-number">
                        {String(s.number).padStart(2, "0")}
                      </span>
                      <strong>{s.symbol}</strong>
                      <span>{s.name}</span>
                      <small>
                        {s.exploratory
                          ? "PROJECT / STRATEGY"
                          : String.fromCharCode(
                              65 + categories.indexOf(s.category),
                            ) +
                            " / " +
                            s.category.split(" &")[0]}
                      </small>
                    </button>
                  ))}
              </div>
              <div className="skill-detail" aria-live="polite">
                {selectedSkill ? (
                  <>
                    <strong>{selectedSkill.name}</strong>
                    <span>
                      {skillApplications[selectedSkill.name] ||
                        selectedSkill.description}{" "}
                      {selectedSkill.exploratory &&
                        "Presented as project / strategy experience."}
                    </span>
                    <button
                      aria-label="Close skill detail"
                      onClick={() => setSelectedSkill(null)}
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="tiny-square" />
                    <span>
                      Select an element to explore its practical application.
                    </span>
                    <span className="skill-legend">
                      DASHED BORDER = PROJECT / STRATEGY EXPERIENCE
                    </span>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </section>
        <section id="projects" className="section container">
          <Reveal>
            <div className="heading-row">
              <SectionHead
                number="03"
                label="SELECTED WORK"
                title="From business problems to digital systems."
              >
                Product concepts, operational systems, and commercial
                initiatives. Honest about where each stands.
              </SectionHead>
              <span className="section-note">
                EXPLORATION.
                <br />
                ARCHITECTURE. POSSIBILITY.
              </span>
            </div>
            <div className="filters" aria-label="Filter projects">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  aria-pressed={projectFilter === f}
                  className={f === projectFilter ? "selected" : ""}
                  onClick={() => setProjectFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {projects
                .filter(
                  (p) =>
                    projectFilter === "All Projects" ||
                    p.category.includes(projectFilter),
                )
                .map((p) => (
                  <article
                    className={"project-card project-" + p.id}
                    key={p.id}
                  >
                    <button
                      className="project-open"
                      onClick={(e) => {
                        trigger.current = e.currentTarget;
                        setSelectedProject(p);
                      }}
                      aria-label={"Explore " + p.name + " case study"}
                    >
                      <ProjectVisual id={p.id} />
                      <div className="project-content">
                        <div className="project-meta">
                          <span>{p.category[0]}</span>
                          <span>/{p.id}</span>
                        </div>
                        <h3>
                          {p.name}
                          <ArrowUpRight size={25} />
                        </h3>
                        <p>{p.subtitle}</p>
                        <p className="project-summary">{p.description}</p>
                        <div className="project-bottom">
                          <span className="status-label">
                            <i />
                            {p.status}
                          </span>
                          <span className="case-link">
                            View case study <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                ))}
            </div>
            <p className="content-disclaimer">
              <ShieldCheck size={15} /> Project visuals are illustrative
              architecture diagrams—not deployed product screenshots. Outcomes
              are not independently documented.
            </p>
          </Reveal>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container">
            <Reveal>
              <SectionHead
                number="04"
                label="EXPERIENCE"
                title="Experience built across technology and business operations."
              >
                A professional journey spanning technical support, software,
                business analysis, and operational systems.
              </SectionHead>
              <div className="timeline">
                {experience.map((e, i) => (
                  <article className="timeline-item" key={e.name}>
                    <span className="timeline-index">0{i + 1}</span>
                    <div className="timeline-date">{e.date}</div>
                    <div>
                      <h3>{e.name}</h3>
                      <span className="timeline-designation">
                        Responsibilities documented in CV
                      </span>
                      <p>{experienceInsights[e.name]?.focus}</p>
                      <p className="experience-context">
                        {experienceInsights[e.name]?.connection}
                      </p>
                      <div className="tags">
                        {e.tasks.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <span className="documented">
                      DOCUMENTED
                      <br />
                      EXPERIENCE
                    </span>
                  </article>
                ))}
              </div>
              <p className="fine-print">
                Dates and overlapping periods are preserved as supplied.
                “Present” reflects the supplied CV details; current employment
                status requires owner confirmation.
              </p>
            </Reveal>
          </div>
        </section>
        <section id="certifications" className="section container">
          <Reveal>
            <SectionHead
              number="05"
              label="CREDENTIALS"
              title="Academic foundation. Continuous professional development."
            />
            <div className="credentials-layout">
              <div>
                <h3 className="group-heading">
                  <GraduationCap size={19} /> Education
                </h3>
                {education.map((e) => (
                  <div className="education-item" key={e.name}>
                    <div>
                      <strong>{e.name}</strong>
                      <p>{e.detail}</p>
                    </div>
                    <span>{e.date}</span>
                  </div>
                ))}
                <p className="fine-print">
                  Additional qualifications listed: Primary School Leaving
                  Certificate and SSCE.
                </p>
              </div>
              <div>
                <h3 className="group-heading">
                  <ShieldCheck size={19} /> Professional certifications
                </h3>
                {certifications.map((c) => (
                  <article className="cert-card" key={c.title}>
                    <span className="cert-icon">
                      <ShieldCheck size={20} />
                    </span>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.issuer}</p>
                      <div className="cert-meta">
                        <span>{c.date}</span>
                        {c.number && <span>ID {c.number}</span>}
                      </div>
                    </div>
                  </article>
                ))}
                <p className="credential-context">
                  These areas complement the portfolio’s focus on planning,
                  responsible technical practice, and digital communication. The
                  listed credentials are not presented as proof of advanced
                  security expertise or guaranteed project outcomes.
                </p>
                <p className="fine-print">
                  Credential details reproduced from the supplied brief. No
                  independent verification or current validity is claimed.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
        <section
          id="leadership"
          className="section container leadership-section"
        >
          <Reveal>
            <SectionHead
              number="06"
              label="LEADERSHIP"
              title="Leadership, coordination, and responsibility."
            />
            <div className="leadership-grid">
              {leadership.map((l, i) => (
                <article key={l.title}>
                  <div className="leadership-top">
                    <span>{l.date}</span>
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{l.title}</h3>
                  <p>{l.org}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
        <section id="capabilities" className="section capabilities-section">
          <div className="container">
            <Reveal>
              <SectionHead
                number="07"
                label="CAPABILITIES"
                title="Connecting technology to practical outcomes."
              />
              <div
                className="capabilities-tabs"
                role="tablist"
                aria-label="Professional capabilities"
              >
                {capabilities.map((c, i) => (
                  <button
                    key={c.title}
                    role="tab"
                    id={"cap-tab-" + i}
                    aria-selected={cap === i}
                    aria-controls="cap-panel"
                    tabIndex={cap === i ? 0 : -1}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                        e.preventDefault();
                        const next =
                          (cap + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                        setCap(next);
                        document.getElementById("cap-tab-" + next)?.focus();
                      }
                    }}
                    onClick={() => setCap(i)}
                    className={cap === i ? "active" : ""}
                  >
                    <span className="cap-number">
                      0{i + 1} <c.icon size={23} />
                    </span>
                    <strong>{c.title}</strong>
                    <span>{c.short}</span>
                    <ArrowUpRight size={19} />
                  </button>
                ))}
              </div>
              <div
                className="cap-panel"
                id="cap-panel"
                role="tabpanel"
                aria-labelledby={"cap-tab-" + cap}
              >
                <span className="cap-chain">
                  TECHNICAL DELIVERY <ArrowRight size={15} /> OPERATIONAL
                  CLARITY <ArrowRight size={15} /> COMMERCIAL POSSIBILITY
                </span>
                <p>{capabilities[cap].description}</p>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="contact" className="section container">
          <Reveal>
            <div className="contact-layout">
              <div>
                <SectionHead
                  number="08"
                  label="LET’S CONNECT"
                  title="Have a business challenge worth solving?"
                />
                <p className="body-copy">
                  I welcome meaningful conversations around technology, digital
                  transformation, software products, business-process
                  automation, and agro-commercial opportunities.
                </p>
                <a className="email-link" href={"mailto:" + profile.email}>
                  <Mail size={21} />
                  {profile.email}
                  <ArrowUpRight size={19} />
                </a>
                {profile.cvUrl && (
                  <a
                    className="inline-link cv-download"
                    href={profile.cvUrl}
                    download
                  >
                    Download approved CV <ArrowDown size={16} />
                  </a>
                )}
                <div className="collaboration-guide">
                  <h3>For a more useful first conversation</h3>
                  {collaborationGuide.map((item, i) => (
                    <div key={item.title}>
                      <span>0{i + 1}</span>
                      <p>
                        <strong>{item.title}</strong>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="contact-note">
                  <span className="status-dot" /> A good conversation is where
                  useful systems begin.
                </div>
              </div>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  if (data.get("website")) return;
                  const subject = encodeURIComponent(
                    "Portfolio enquiry: " + data.get("interest"),
                  );
                  const body = encodeURIComponent(
                    "Name: " +
                      data.get("name") +
                      "\nEmail: " +
                      data.get("email") +
                      "\nOrganisation: " +
                      data.get("organisation") +
                      "\n\n" +
                      data.get("message"),
                  );
                  window.location.href =
                    "mailto:" +
                    profile.email +
                    "?subject=" +
                    subject +
                    "&body=" +
                    body;
                  setEmailNotice(true);
                }}
              >
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Full name"
                      maxLength={120}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      maxLength={180}
                    />
                  </label>
                </div>
                <label>
                  Organisation <span>(optional)</span>
                  <input
                    name="organisation"
                    autoComplete="organization"
                    placeholder="Company or organisation"
                    maxLength={180}
                  />
                </label>
                <label>
                  Area of interest
                  <select required name="interest" defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    {[
                      "Software Development",
                      "Digital Transformation",
                      "Business Automation",
                      "SaaS & Product Development",
                      "Agro-Commercial Strategy",
                      "Digital Marketing",
                      "Other",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label>
                  What are you working on?
                  <textarea
                    required
                    name="message"
                    placeholder="Tell me about the challenge, idea, or opportunity…"
                    rows={4}
                    minLength={10}
                    maxLength={5000}
                  />
                </label>
                <div className="honeypot" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <button className="button primary" type="submit">
                  Compose Email <ArrowUpRight size={17} />
                </button>
                <p className="fine-print">
                  Opens your email app with these details. Nothing is sent or
                  stored by this website. Please avoid sensitive information.
                </p>
                {emailNotice && (
                  <p role="status" className="email-notice">
                    Your email app has been requested. Send the draft there to
                    complete your message. If it did not open, email{" "}
                    {profile.email} directly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </section>
        <section id="contributions" className="section contributions-section">
          <div className="container">
            <Reveal>
              <div className="contribution-layout">
                <SectionHead
                  number="09"
                  label="SELECTED CONTRIBUTIONS"
                  title="Work that demonstrates capability."
                />
                <div>
                  {contributions.length ? (
                    contributions.map((c) => (
                      <article key={c.title}>
                        <h3>{c.title}</h3>
                        <p>{c.description}</p>
                      </article>
                    ))
                  ) : (
                    <>
                      <p>
                        Explore the thinking behind the work: from trade
                        discovery and operational workflows to product
                        architecture.
                      </p>
                      <a href="#projects" className="inline-link">
                        Explore selected case studies <ArrowUpRight size={17} />
                      </a>
                      <p className="fine-print">
                        Evidence-backed outcomes can be added as documentation
                        becomes available. No performance metrics are claimed.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <div className="footer-top">
          <a href="#overview" className="brand">
            <span className="brand-mark">
              m<span>.</span>
            </span>
            <span>
              Mujahid Baita<small>TECHNOLOGY · SYSTEMS · STRATEGY</small>
            </span>
          </a>
          <p>
            Thoughtful systems.
            <br />
            Meaningful possibilities.
          </p>
          <a href="#overview" className="inline-link">
            Back to top <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mujahid Yakubu Baita</span>
          <span>Built with intention. Based in Nigeria.</span>
          <a href={"mailto:" + profile.email}>
            Let’s start a conversation <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        aria-label={
          selectedProject
            ? selectedProject.name + " case study"
            : "Project case study"
        }
        className="case-dialog"
        onCancel={(e) => {
          e.preventDefault();
          closeModal();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        {selectedProject && (
          <div className="dialog-inner">
            <button
              className="dialog-close"
              autoFocus
              aria-label="Close case study"
              onClick={closeModal}
            >
              <X />
            </button>
            <div className="eyebrow">CASE STUDY / {selectedProject.id}</div>
            <h2>{selectedProject.name}</h2>
            <p className="dialog-subtitle">{selectedProject.subtitle}</p>
            <span className="status-label">
              <i />
              {selectedProject.status}
            </span>
            <ProjectVisual id={selectedProject.id} />
            <h3>01 / Context & opportunity</h3>
            <p>{selectedProject.description}</p>
            <div className="case-context">
              <strong>The question being explored</strong>
              <p>{projectInsights[selectedProject.id].problem}</p>
            </div>
            <h3>02 / Proposed solution</h3>
            <p>{projectInsights[selectedProject.id].solution}</p>
            <h3>03 / My contribution</h3>
            <p>{selectedProject.role}</p>
            <h3>04 / Workflow & architecture</h3>
            <p className="workflow-disclaimer">
              Proposed workflow for discussion—not a claim of completed
              implementation.
            </p>
            <ol className="case-workflow">
              {projectInsights[selectedProject.id].workflow.map((step, i) => (
                <li key={step.title}>
                  <span>0{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="tags">
              {selectedProject.areas.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <h3>05 / Technologies & tools</h3>
            <p>
              <strong>Verified implementation stack:</strong> not independently
              documented.
            </p>
            <p>
              <strong>Architectural exploration:</strong>{" "}
              {selectedProject.tools.join(" · ")}. No specific programming stack
              or production deployment is asserted.
            </p>
            <h3>06 / Current status & outcomes</h3>
            <p>
              {selectedProject.status}. Outcome not yet independently
              documented.
            </p>
            <h3>07 / Validation questions & next steps</h3>
            <ul className="validation-list">
              {projectInsights[selectedProject.id].validation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">
              Concept details reflect the supplied project brief. Public links
              and supporting evidence have not been provided.
            </p>
            <a className="button primary" href="#contact" onClick={closeModal}>
              Discuss this area <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}
