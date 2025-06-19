import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PiEnvelope, PiGlobe, PiLinkedinLogo } from "react-icons/pi";

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

const IndexPage = ({ data }) => {
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
          <h1 className="text-h1">Building Sturdy, Scalable Software—Strong Foundations. Lasting Software.</h1>
          <p className="text-large">I build sturdy, structured, and scalable software—designed to grow, adapt, and
            withstand the test of time.
            Let's build your product to last.</p>
          <ul className="list-inline">
            <li><a href="/#contact" className="pure-button pure-button-primary">Work With Me</a></li>
            <li><a href="https://linkedin.com/in/othiagovilla" className="pure-button">Check My LinkedIn</a></li>
          </ul>
          <blockquote className="text-small">
            "Thiago approached each task with a high level of thoroughness, ensuring nothing was overlooked."
            <cite>Tyler Shambora</cite>
          </blockquote>
          <div className="pure-u-lg-1-2">
            <h2 className="text-h3 home-h2">Main Stack</h2>
            <BadgeList items={["Node", "React", "AWS", "CI/CD", "SCRUM"]} />
          </div>
          <div className="pure-u-lg-1-2">
            <h2 className="text-h3 home-h2">Trusted by cloud-native innovators</h2>
            <BadgeList items={["The Meet Group", "Pack Digital", "Escala App"]} />
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
        <div>
          <h2 className="text-h2 home-h2">Why Sturdy Software Matters?</h2>
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
            <dt className="text-h3 pure-u-lg-1-3"><PiLinkedinLogo size={24}
                                                                  style={{ verticalAlign: "middle" }} /> LinkedIn
            </dt>
            <dd className="pure-u-lg-2-3"><a
              href="https://linkedin.com/in/othiagovilla"
              target="_blank"
              rel="noopener noreferrer"
            >
              othiagovilla
            </a></dd>
          </dl>
          <form
            action="https://forms.zohopublic.com/thiagothiag1/form/HireThiagoNow/formperma/kdKqnSM0XdbmTTA-H2YVvCPrwm6SE_G55Bawn-p9PXw/htmlRecords/submit"
            method="POST" acceptCharset="UTF-8" encType="multipart/form-data"
            className="pure-u-lg-1-2">
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
