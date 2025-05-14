import React from "react";
import MainLayout from "../layout/MainLayout";
import homepageData from "../data/homepage.json";

// DRY helper components
const TechLogos = ({ logos }) => (
  <div className="logo-container">
    {logos.map((logo, i) => (
      <span key={i} className={logo.className}>
        {logo.label}
      </span>
    ))}
  </div>
);

const ClientLogos = ({ logos }) => (
  <div className="logo-container">
    {logos.map((logo, i) => (
      <span key={i} className={logo.className}>
        {logo.label}
      </span>
    ))}
  </div>
);

const BenefitItems = ({ items }) => (
  <div className="pure-g benefits-section">
    {items.map((b, i) => (
      <div key={i} className="pure-u-1 pure-u-md-1-3 benefit-item">
        <h3 className="benefit-title">{b.title}</h3>
        <p className="benefit-description">{b.description}</p>
      </div>
    ))}
  </div>
);

const ProjectCards = ({ projects }) => (
  <div className="pure-g">
    {projects.map((p, i) => (
      <div key={i} className="pure-u-1 pure-u-md-1-3">
        <div className="project-card">
          <div className="project-logo">
            <span className="logo-placeholder">{p.logo}</span>
          </div>
          <p className="project-description">{p.description}</p>
          <div className="project-skills">
            <h4>Skills:</h4>
            <p>{p.skills}</p>
          </div>
          <div className="project-stack">
            <h4>Stack:</h4>
            <div className="stack-logos">
              {p.stack.map((s, j) => (
                <span key={j} className="stack-item">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ServiceItems = ({ items }) => (
  <div className="services-list">
    {items.map((s, i) => (
      <div key={i} className="service-item">
        <h3 className="service-title">{s.title}</h3>
        <p className="service-description">{s.description}</p>
      </div>
    ))}
  </div>
);

const FeatureItems = ({ items }) => (
  <div className="features-grid">
    {items.map((f, i) => (
      <div key={i} className="feature-item">
        <h3 className="feature-title">{f.title}</h3>
        <p className="feature-description">{f.description}</p>
      </div>
    ))}
  </div>
);

const WhyTechItems = ({ items }) => (
  <div className="why-tech-grid">
    {items.map((reason, i) => (
      <div key={i} className="why-tech-item">
        <h3 className="why-tech-title">{reason.title}</h3>
        <p className="why-tech-description">{reason.description}</p>
      </div>
    ))}
  </div>
);

const IndexPage = () => {
  const data = homepageData;
  return (
    <MainLayout>
      <div className="content">
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">{data.hero.headline}</h1>
            <p className="splash-subhead">{data.hero.subhead}</p>
            <div className="cta-buttons">
              {data.hero.cta.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={`pure-button pure-button-${
                    i === 0 ? "primary" : "secondary"
                  }`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
            <div className="testimonial">
              <blockquote>
                {data.hero.testimonial.quote}
                <cite>{data.hero.testimonial.author}</cite>
              </blockquote>
              {/* Note: Add Tyler's profile picture with proper image component */}
            </div>
            <div className="tech-stack">
              <h3>{data.hero.techStack.title}</h3>
              <TechLogos logos={data.hero.techStack.logos} />
            </div>
            <div className="client-logos">
              <h3>{data.hero.clients.title}</h3>
              <ClientLogos logos={data.hero.clients.logos} />
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h2 className="content-head">{data.benefits.title}</h2>
            <BenefitItems items={data.benefits.items} />
          </div>
        </div>
        <div className="projects-section">
          <div className="content">
            <h2 className="content-head">{data.projects.title}</h2>
            <p className="projects-subhead">{data.projects.subhead}</p>
            <ProjectCards projects={data.projects.items} />
            <div className="cta-container">
              <a
                href={data.projects.cta.href}
                className="pure-button pure-button-primary"
              >
                {data.projects.cta.label}
              </a>
            </div>
          </div>
        </div>
        <div className="services-section">
          <div className="content">
            <h2 className="content-head">{data.services.title}</h2>
            <p className="services-subhead">{data.services.subhead}</p>
            <ServiceItems items={data.services.items} />
            <div className="cta-container">
              <a
                href={data.services.cta.href}
                className="pure-button pure-button-primary"
              >
                {data.services.cta.label}
              </a>
            </div>
          </div>
        </div>
        <div className="features-section">
          <div className="content">
            <h2 className="content-head">{data.features.title}</h2>
            <FeatureItems items={data.features.items} />
          </div>
        </div>
        <div className="sturdy-software-section">
          <div className="content">
            <h2 className="content-head">{data.sturdySoftware.title}</h2>
            <div className="sturdy-content">
              <p className="sturdy-intro">{data.sturdySoftware.intro}</p>
              <div className="sturdy-paragraphs">
                {data.sturdySoftware.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <p className="sturdy-conclusion">
                  {data.sturdySoftware.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-tech-section">
          <div className="content">
            <h2 className="content-head">{data.whyTech.title}</h2>
            <WhyTechItems items={data.whyTech.items} />
          </div>
        </div>
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
                      color: "inherit",
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
                frameborder="0"
                style={{ height: 810, width: "99%", border: 0 }}
                src="https://forms.zohopublic.com/thiagothiag1/form/HireThiagoNow/formperma/lTsp41KuOlThP8T1qsrB-imczLzyeskqU31xarN6WUM"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
