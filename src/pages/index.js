import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  PiCalendarBlank,
  PiChatCircleDots,
  PiEnvelope,
  PiGlobe,
  PiLinkedinLogo,
  PiPlayFill
} from "react-icons/pi";

import "../styles/index.css";
import BaseLayout from "../layout/BaseLayout";
import getRelativeTime from "../utils/get-relative-time";
import FaqAccordion from "../components/FaqAccordion";
import ProjectCard from "../components/ProjectCard";
import BadgeList from "../components/BadgeList";

export const query = graphql`
  query LatestPostsAndFaqs {
    latestPosts: allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
    ) {
      nodes {
        frontmatter {
          date
          title
          category
        }
        fields {
          slug
        }
        featuredImageFile {
          childImageSharp {
            gatsbyImageData(width: 360, layout: CONSTRAINED)
          }
        }
      }
    }
    projects: allProjectsYaml(limit: 3) {
      nodes {
        slug
        title
        excerpt
        description
        skills
        techStack
      }
    }
    allFaqsJson(filter: {featured: {eq: true}}) {
      nodes {
        slug
        question
        answer
        category
        tags
        featured
        addedDate
        source
      }
    }
  }
`;

function HeroVideo({ videoId }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (isPlaying) {
    return (
      <div className="hero-video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Thiago Villa - Senior Fullstack Software Engineer Intro Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="hero-video-iframe"
        />
      </div>
    );
  }

  return (
    <div className="hero-video-wrapper">
      <button
        type="button"
        className="hero-video-facade"
        onClick={() => setIsPlaying(true)}
        aria-label="Play introduction video"
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="Introduction Video Thumbnail"
          className="hero-video-thumbnail"
          loading="lazy"
        />
        <div className="hero-video-overlay">
          <div className="hero-video-play-btn" aria-hidden="true">
            <PiPlayFill size={34} style={{ marginLeft: "4px" }} />
          </div>
          <span className="hero-video-tag">
            <span className="status-beacon" aria-hidden="true" />
            Watch 1-min Intro Video
          </span>
        </div>
      </button>
    </div>
  );
}

const IndexPage = ({ data }) => {
  const calendlyUrl =
    (typeof process !== "undefined" && process.env.GATSBY_CALENDLY_URL) ||
    "https://calendly.com/thiagovilla/30-minute-meeting";
  const introVideoId =
    (typeof process !== "undefined" && process.env.GATSBY_INTRO_VIDEO_ID) ||
    "dQw4w9WgXcQ";

  const [isCrispOnline, setIsCrispOnline] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const crispWebsiteId =
      (typeof process !== "undefined" && process.env.GATSBY_CRISP_WEBSITE_ID) ||
      (typeof window !== "undefined" && window.CRISP_WEBSITE_ID) ||
      "18048123-df38-4bdc-a209-df2193b167b6";

    const updateStatus = (status) => {
      if (status === "online" || status === true || status === "available") {
        setIsCrispOnline(true);
      } else if (status === "offline" || status === false || status === "away") {
        setIsCrispOnline(false);
      }
    };

    // 1. Crisp JavaScript SDK listener and status getter
    if (window.$crisp) {
      window.$crisp.push([
        "on",
        "website:availability:changed",
        (status) => updateStatus(status)
      ]);
      try {
        const currentStatus = window.$crisp.get("website:availability:status");
        if (currentStatus) {
          updateStatus(currentStatus);
        }
      } catch (e) {}
    }

    // 2. Crisp availability endpoint check
    const endpoint =
      (typeof process !== "undefined" && process.env.GATSBY_CRISP_STATUS_ENDPOINT) ||
      (crispWebsiteId ? `https://client.crisp.chat/settings/website/${crispWebsiteId}/` : null);

    if (endpoint) {
      fetch(endpoint)
        .then((res) => (res.ok ? res.json() : null))
        .then((payload) => {
          if (payload) {
            const status =
              payload?.data?.status ||
              payload?.data?.availability ||
              payload?.status ||
              payload?.availability;
            const isOnline =
              status === "online" || status === true || payload?.online === true;
            updateStatus(isOnline);
          }
        })
        .catch(() => {});
    }
  }, []);

  const handleOpenChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#contact";
      }
    }
  };

  const features = [
    {
      title: "Engineering-Driven Problem Solving",
      description: "I have a background in *Computer, Biosystems, and Agricultural Engineering*, which helps me apply structured, analytical thinking to software development."
    },
    {
      title: "Interdisciplinary Approach",
      description: "I've worked across hardware, software, and real-world systems, giving me a broader perspective when solving complex problems."
    },
    {
      title: "Software Architecture & Scalability",
      description: "I'm currently pursuing a postgraduate degree in software architecture, data science, and cybersecurity, strengthening my ability to design robust, secure, and scalable systems."
    },
    {
      title: "From Physical to Digital Systems",
      description: "Coming from an engineering background, I think beyond software—I look at optimization, efficiency, and automation in both digital and real-world applications."
    },
    {
      title: "Global Collaboration",
      description: "I've worked with multicultural, multi-time zone teams, ensuring smooth communication and collaboration across different work styles."
    },
    {
      title: "Technical Leadership Without Bureaucracy",
      description: "I apply clean code, DDD, and maintainability principles to create long-lasting software without unnecessary complexity."
    },
    {
      title: "End-to-End Thinking",
      description: "I've been involved in projects from ideation to deployment, allowing me to bridge the gap between business goals and technical execution."
    },
    {
      title: "Adaptability & Continuous Learning",
      description: "I've transitioned across disciplines and technologies throughout my career, and I'm always learning to stay ahead."
    }
  ];
  const whys = [
    {
      title: "Technology makes a real impact",
      description: "I've seen small businesses and solopreneurs thrive when they invest in the right software. It's fascinating."
    },
    {
      title: "It's the closest thing to magic",
      description: "In my mind, applications are like potions, commands are spells. (And yes, I'm a huge Harry Potter fan.)"
    },
    {
      title: "Tech should liberate, not overwhelm",
      description: "I build tools that save time and reduce manual work—and avoid projects that exploit addictive algorithms."
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();
      // Honeypot field. Don't submit if filled out.
    if (e.target.website.value) return;
    // Random string names (mostly uppercase, 10+ chars)
    if (/^[a-zA-Z]{10,}$/.test(e.target.SingleLine.value)) return;
    // Empty or whitespace-only messages
    if (e.target.MultiLine.value.trim().length === 0) return;
    e.target.submit();
  }

  return (
    <BaseLayout>
      <div className="container">
        <section id="hero">
          <div className="hero-grid pure-g">
            <div className="pure-u-1 pure-u-lg-13-24 hero-content-col">
              <div className="hero-availability">
                <span className="hero-availability-text">Available for immediate start</span>
              </div>
              <h1 className="text-h1 hero-title">
                Building <em>Sturdy Software</em> That Lasts.
              </h1>
              <p className="text-large hero-subtitle">
                I'm <strong>Thiago Villa</strong>, a Senior Fullstack Software Engineer &amp; Architect. I engineer robust, scalable systems that withstand stress, eliminate tech debt, and drive tangible business outcomes.
              </p>
              <div className="hero-cta-group">
                {isCrispOnline ? (
                  <button
                    type="button"
                    onClick={handleOpenChat}
                    className="pure-button pure-button-primary hero-btn-primary"
                    aria-label="Start live chat"
                  >
                    <span className="status-beacon" aria-hidden="true" style={{ marginRight: "8px" }} />
                    <PiChatCircleDots size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
                    Live Chat
                  </button>
                ) : (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pure-button pure-button-primary hero-btn-primary"
                  >
                    <PiCalendarBlank size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
                    Book Intro Call
                  </a>
                )}
                <a
                  href="https://linkedin.com/in/othiagovilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pure-button hero-btn-secondary"
                >
                  <PiLinkedinLogo size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
                  Check LinkedIn
                </a>
              </div>
              <blockquote className="hero-quote">
                "Thiago approached each task with a high level of thoroughness, ensuring nothing was overlooked."
                <cite>Tyler Shambora &mdash; VP of Engineering</cite>
              </blockquote>
            </div>
            <div className="pure-u-1 pure-u-lg-11-24 hero-media-col">
              <HeroVideo
                videoId={introVideoId}
              />
            </div>
          </div>
          <div className="hero-trust-bar pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h2 className="text-h3 home-h2">Core Stack &amp; Practices</h2>
              <BadgeList items={["TypeScript / Node.js", "React / Next.js", "AWS & Cloud-Native", "Clean Architecture & DDD", "CI/CD & DevOps"]} />
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <h2 className="text-h3 home-h2">Trusted by cloud-native innovators</h2>
              <BadgeList items={["The Meet Group", "Pack Digital", "Escala App"]} />
            </div>
          </div>
        </section>
        <section id="personal-story">
          <div className="story-header text-center">
            <h2 className="text-h2 home-h2">From Physical Systems to Sturdy Software</h2>
            <p className="text-large story-lead">
              How multidisciplinary engineering and physical discipline shaped a philosophy of resilient, high-utility software craftsmanship.
            </p>
          </div>
          <div className="story-grid pure-g">
            <div className="pure-u-1 pure-u-lg-1-3 story-card">
              <div className="story-card-inner">
                <span className="story-icon" role="img" aria-label="Sprout to computer">🌱 ➔ 💻</span>
                <h3 className="text-h3">Multidisciplinary Roots</h3>
                <p>
                  My background spans <strong>Computer, Biosystems, and Agricultural Engineering</strong>. Working with physical systems—where sensors, climate variables, and hardware constraints cannot be mocked—taught me early on that systems must be built to endure harsh real-world stress, not just clean test harnesses.
                </p>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-3 story-card">
              <div className="story-card-inner">
                <span className="story-icon" role="img" aria-label="Architecture">🏛️</span>
                <h3 className="text-h3">Resilient Architectures</h3>
                <p>
                  I translate this foundational discipline into software systems. Whether architecting cloud-native microservices, high-throughput Node.js pipelines, or modular monoliths, I apply <strong>Domain-Driven Design (DDD)</strong>, <strong>Clean Architecture</strong>, and strict decoupling so platforms scale predictably with business growth.
                </p>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-3 story-card">
              <div className="story-card-inner">
                <span className="story-icon" role="img" aria-label="Partnership">🤝</span>
                <h3 className="text-h3">Pragmatic Leadership</h3>
                <p>
                  Engineering is about maximizing business velocity while reducing maintenance burden. I collaborate closely with engineering teams through transparent communication, automated CI/CD pipelines, and zero bureaucracy—shipping dependable software that compounds in value over time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits">
          <h2 className="text-h2 home-h2">What I Bring to the Table</h2>
          <ul>
            {[
              {
                icon: "🏗️",
                title: "Software that Works, Long-Term",
                description: "I go beyond writing code—I build robust architectures that scale with your business."
              },
              {
                icon: "🎯",
                title: "Technology That Adapts to You",
                description: "I align software decisions with your goals, prioritizing long-term impact over fleeting trends."
              },
              {
                icon: "🔄",
                title: "Expertise Across the Full Development Cycle",
                description: "From strategy to deployment, I handle every phase, giving you the freedom to focus elsewhere."
              }
            ].map((benefit) => (
              <li key={benefit.title}>
                <span role="img" aria-label={benefit.title}>{benefit.icon}</span>
                <h3 className="text-h3">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section id="projects">
        <h2 className="text-h2 home-h2">Driving Efficiency & Long-Term Stability</h2>
        <p className="text-large">Check out some of my clients' success stories.</p>
        <ul>
          {data.projects.nodes.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} maxSkills={4} />
            </li>
          ))}
        </ul>
        <div>
          <Link to="/#contact" className="pure-button pure-button-primary" style={{ marginRight: "var(--space-xs)" }}>
            Work With Me
          </Link>
          <Link to="/projects" className="pure-button">
            View All Projects
          </Link>
        </div>
      </section>
      <section id="posts">
        <h2 className="text-h2 home-h2">Latest Posts</h2>
        <ul>
          {data.latestPosts.nodes.map(post => (
            <li key={post.fields.slug}>
              <a href={"blog/" + post.fields.slug} className="color-inherit">
                {post.featuredImageFile && (
                  <GatsbyImage
                    image={getImage(post.featuredImageFile)}
                    alt={post.frontmatter.featuredImageAlt ?? post.frontmatter.title}
                  />
                )}
                <main>
                  <p className="text-small">
                    <time dateTime={post.frontmatter.date}>{getRelativeTime(post.frontmatter.date)}</time>
                    <strong className="badge--primary">{post.frontmatter.category}</strong>
                  </p>
                  <h3>{post.frontmatter.title}</h3>
                </main>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="container">
        <section id="services">
          <h2 className="text-h2 home-h2">Strengthening Businesses Through Technology</h2>
          <p>I work with high-growth companies to design, develop, and deploy resilient software that drives real
            impact.</p>
          <ul>
            {[
              {
                title: "SaaS Development & Modernization",
                description: "Building, refactoring, and scaling robust platforms with Clean Architecture & SOLID principles."
              },
              {
                title: "Systems Integration & API Development",
                description: "Creating strong connections for seamless business operations with modular monoliths & microservices."
              },
              {
                title: "Cloud-Native Architecture & DevOps",
                description: "Optimizing AWS/GCP/Azure infrastructure, CI/CD automation, Inversion of Control for maintainability."
              },
              {
                title: "Technical Leadership & Strategy",
                description: "Fractional CTO, architecture and engineering consulting with Domain-Driven Design."
              }
            ].map((service) => (
              <li key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section id="features">
        <div className="container">
          <h2 className="text-h2 home-h2">More Features & Benefits</h2>
          <ul>
            {features.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="sturdy-software">
        <div className="container">
          <div className="sturdy-inner">
            <h2 className="text-h2 home-h2">Why Sturdy Software Matters</h2>
            <p className="sturdy-manifesto">
              I believe software should be <strong>sturdy</strong>—more than just functional in the moment, it must be resilient, structured, and architected to endure.
            </p>
            <div className="sturdy-body">
              <p>
                In bodybuilding and athletic training, true physical strength is never just superficial aesthetics. Strength is forged through rigorous discipline, purposeful mechanical tension, and the capacity to absorb stress without breaking down.
              </p>
              <p>
                The exact same principle applies to software systems. Sturdy software handles sudden traffic surges, absorbs evolving business requirements, and remains predictable under pressure.
              </p>
              <p>
                Most systems fail because they are built for short-term demos instead of long-term maintainability—bugs multiply, technical debt suffocates delivery velocity, and deployments turn into stressful emergencies. I build software differently: establishing clean domain boundaries, test coverage, and automated delivery so your team moves fast with complete confidence.
              </p>
            </div>
            <div className="sturdy-cta text-center">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pure-button pure-button-primary hero-btn-primary"
              >
                <PiCalendarBlank size={20} style={{ verticalAlign: "middle", marginRight: "6px" }} />
                Book an Intro Call
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="why-tech">
        <div className="container">
          <h2 className="text-h2 home-h2">Why I Work in Tech</h2>
          <ul>
            {
              whys.map(({ title, description }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <div className="container">
        <section id="faqs-hp">
          <h2 className="text-h2 home-h2">Frequently Asked Questions</h2>
          <p>Common questions about my services and work process</p>
          <FaqAccordion faqs={data.allFaqsJson.nodes} />
        </section>
        <section id="contact">
          <h2 className="text-h2 home-h2">Work With Me</h2>
          <dl className="pure-u-lg-1-2">
            <dt className="text-h3 pure-u-lg-1-3"><PiCalendarBlank size={24} style={{ verticalAlign: "middle" }} /> Schedule</dt>
            <dd className="pure-u-lg-2-3">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                Book Intro Call on Calendly
              </a>
            </dd>
            <dt className="text-h3 pure-u-lg-1-3"><PiLinkedinLogo size={24} style={{ verticalAlign: "middle" }} /> LinkedIn</dt>
            <dd className="pure-u-lg-2-3"><a
              href="https://linkedin.com/in/othiagovilla"
              target="_blank"
              rel="noopener noreferrer"
            >
              othiagovilla
            </a></dd>
            <dt className="text-h3 pure-u-lg-1-3"><PiEnvelope size={24} style={{ verticalAlign: "middle" }} /> Email
            </dt>
            <dd className="pure-u-lg-2-3">
              <button
                onClick={() => window.location.href = ["mailto:thiago@", "thiagovilla.com"].join("")}
                aria-label="Send email to Thiago" className="btn-reset btn-link cursor-pointer"
              >
                <ul className="list-inline">
                  <li>thiago</li>
                  <li>@</li>
                  <li>thiagovilla.com</li>
                </ul>
              </button>
            </dd>
            <dt className="text-h3 pure-u-lg-1-3"><PiGlobe size={24} style={{ verticalAlign: "middle" }} /> Website</dt>
            <dd className="pure-u-lg-2-3"><a href="https://thiagovilla.com">thiagovilla.com</a></dd>
          </dl>
          <form
            onSubmit={handleSubmit}
            action="https://forms.zohopublic.com/thiagothiag1/form/HireThiagoNow/formperma/kdKqnSM0XdbmTTA-H2YVvCPrwm6SE_G55Bawn-p9PXw/htmlRecords/submit"
            method="POST" acceptCharset="UTF-8" encType="multipart/form-data"
            className="pure-u-lg-1-2">
            <input type="text" name="website" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <label htmlFor="SingleLine">Name</label>
            <input type="text" name="SingleLine" maxLength="255" placeholder="Your&#x20;name"
                   autoComplete="name" required={true} />
            <label htmlFor="Email">Email</label>
            <input type="email" maxLength="255" name="Email" placeholder="Your&#x20;email"
                   autoComplete="email" required={true} />
            <label htmlFor="MultiLine">Message</label>
            <textarea name="MultiLine" maxLength="65535" placeholder="I want to hire you." rows={4}
                      required={true}></textarea>
            <button type="submit">Send now</button>
          </form>
        </section>
      </div>
    </BaseLayout>
  )
    ;
};

export default IndexPage;

export const Head = () =>
  <title>Thiago Villa - Senior Fullstack Software Engineer</title>
;
