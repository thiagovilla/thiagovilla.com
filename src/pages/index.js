import React from "react";
import BaseLayout from "../layout/BaseLayout";
import homepageData from "../data/homepage.json";

const IndexPage = () => {
  const data = homepageData;
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
  return (
    <BaseLayout>
      <div className="container">
        <section id="hero">
          <h1>Building Sturdy, Scalable Software—Strong Foundations. Lasting Software.</h1>
          <p>I build sturdy, structured, and scalable software—designed to grow, adapt, and withstand the test of time.
            Let's build your product to last.</p>
          <ul className="list-inline">
            <li><a href="#contact" className="pure-button pure-button-primary">Work With Me</a></li>
            <li><a href="https://linkedin.com/in/othiagovilla" className="pure-button">Check My LinkedIn</a></li>
          </ul>
          <blockquote>
            "Thiago approached each task with a high level of thoroughness, ensuring nothing was overlooked."
            <cite>Tyler Shambora</cite>
          </blockquote>
          <div className="pure-u-lg-1-2">
            <h2>Main Stack</h2>
            <ul className="list-inline">
              {[
                "Node",
                "React",
                "AWS",
                "CI/CD",
                "SCRUM"
              ].map((tech) => (<li key={tech}>{tech}</li>))}
            </ul>
          </div>
          <div className="pure-u-lg-1-2">
            <h2>Trusted by cloud-native innovators</h2>
            <ul className="list-inline">
              {[
                "The Meet Group",
                "Pack Digital",
                "Escala App"
              ].map((client) => (<li key={client}>{client}</li>))}
            </ul>
          </div>
        </section>
        <section id="benefits">
          <h2>What I Bring to the Table</h2>
          <ul>
            {[
              {
                icon: "🏗️",
                title: "Software that Works, Long-Term",
                description: "I go beyond writing code—I build robust architectures that scale with your business.",
              },
              {
                icon: "🎯",
                title: "Technology That Adapts to You",
                description: "I align software decisions with your goals, prioritizing long-term impact over fleeting trends.",
              },
              {
                icon: "🔄",
                title: "Expertise Across the Full Development Cycle",
                description: "From strategy to deployment, I handle every phase, giving you the freedom to focus elsewhere.",
              }
            ].map((benefit) => (
              <li key={benefit.title}>
                <span role="img" aria-label={benefit.title}>{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section id="projects">
        <h2>Driving Efficiency & Long-Term Stability</h2>
        <p>Check out some of my clients' success stories.</p>
        <ul>
          {[
            {
              client: "Major Payment Processor",
              description: "Accelerated large-scale systems testing at a major payment processor, enabling faster adoption of their new checkout experience across hundreds of microservices.",
              skills: ["System Modernization", "Scalable Architecture", "API Optimization", "Cross-Team Collaboration"],
              stack: ["React", "Next.js", "Playwright", "MSW"]
            },
            {
              client: "The Meet Group",
              description: "Improved backend efficiency at TMG by sunsetting unused services, reducing system complexity and ensuring smooth scalability for millions of daily users.",
              skills: ["Legacy Code Refactoring", "Strangle Pattern Migration", "Traffic & Dependency Analysis", "Zero-Downtime Deployments"],
              stack: ["PHP", "Java", "Kibana", "Logstash"]
            },
            {
              client: "Pack Digital",
              description: "Reduced CMS cost for Pack Digital by migrating storefronts from third-party providers, cutting expenses without disrupting merchants.",
              skills: ["Headless Ecommerce Development", "API & CMS Migration", "Developer Tooling & DX", "Authentication & Authorization"],
              stack: ["React", "GraphQL", "Shopify", "Netlify"]
            }
          ].map((project) => (
            <li key={project.client}>
              <h3>{project.client}</h3>
              <p>{project.description}</p>
              <h4>Skills</h4>
              <ul>{project.skills.map((skill) => (<li key={skill}>{skill}</li>))}</ul>
              <h4>Stack</h4>
              <ul>{project.stack.map((tech) => (<li key={tech}>{tech}</li>))}</ul>
            </li>
          ))}
        </ul>
        <a href="#contact" className="pure-button pure-button-primary">
          Work With Me
        </a>
      </section>
      <div className="container">
        <section id="services">
          <h2>Strengthening Businesses Through Technology</h2>
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
          <h2>More Features & Benefits</h2>
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
        <div>
          <h2>Why Sturdy Software Matters?</h2>
          <p>I believe software should be <strong>strong</strong>—more than just functional, it must be resilient,
            structured, and built
            to last.</p>
          <p>In bodybuilding, a well-trained body is more than aesthetics. Strength comes from discipline, well-built
            foundations, and the ability to handle stress.</p>
          <p>The same applies to software. Sturdy software handles load, scales with growth, and remains reliable
            under pressure.</p>
          <p>Most software I've seen is fragile. Fix one thing, break another. Bugs pop out of nowhere, tech debt
            piles up, and releases fail in production. But I build software differently.</p>
          <p>Strength comes from design. A strong body is sculpted with purposeful training—software should be the
            same. With a clear engineering vision, we can move from an MVP to a solid, maintainable system without
            losing agility.</p>
          <p>If you want your software to be sturdy, I'm the one to build it.</p>
        </div>
      </section>
      <section id="why-tech">
        <div className="container">
          <h2>Why I Work in Tech</h2>
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
      <div id="contact" className="contact-section">
        <div className="content">
          <h2 className="content-head">{data.contact.title}</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <button
                  className="email-link"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "inherit"
                  }}
                  onClick={() => {
                    window.location.href = "mailto:" + data.contact.email;
                  }}
                >
                  {data.contact.email}
                </button>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <a
                  href={data.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.contact.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <div className="contact-item"></div>
              <span className="contact-label">LinkedIn:</span>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              hidden
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="pure-button pure-button-primary"
              >
                Send Message
              </button>
            </form>

            <iframe
              title="Hire Thiago Now"
              aria-label="Hire Thiago Now"
              style={{ height: 810, width: "99%", border: 0 }}
              src="https://forms.zohopublic.com/thiagothiag1/form/HireThiagoNow/formperma/lTsp41KuOlThP8T1qsrB-imczLzyeskqU31xarN6WUM"
            ></iframe>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default IndexPage;

export const Head = () =>
  <title>Thiago Villa - Senior Fullstack Software Engineer</title>;
