import React from "react";
import MainLayout from "../layout/MainLayout";

const IndexPage = () => {
  return (<MainLayout>
      <div className="content">
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">Building Sturdy, Scalable Software—Strong Foundations. Lasting Software.</h1>
            <p className="splash-subhead">
              I build sturdy, structured, and scalable software—designed to grow, adapt, and withstand the test of time.
              Let's build your product to last.
            </p>
            <div className="cta-buttons">
              <a href="https://TDCInnovation.com" className="pure-button pure-button-primary">
                Work With Me
              </a>
              <a href="/blog" className="pure-button pure-button-secondary">
                Read My Blog
              </a>
            </div>

            <div className="testimonial">
              <blockquote>
                "Thiago approached each task with a high level of thoroughness, ensuring nothing was overlooked."
                <cite>–Tyler Shambora</cite>
              </blockquote>
              {/* Note: Add Tyler's profile picture with proper image component */}
            </div>

            <div className="tech-stack">
              <h3>Main Stack</h3>
              <div className="logo-container">
                <span className="tech-logo">Node</span>
                <span className="tech-logo">React</span>
                <span className="tech-logo">AWS</span>
                <span className="tech-logo">CI/CD</span>
                <span className="tech-logo">SCRUM</span>
                <span className="tech-logo more-icon">More</span>
              </div>
            </div>

            <div className="client-logos">
              <h3>Trusted by cloud-native innovators</h3>
              <div className="logo-container">
                <span className="client-logo">PayPal</span>
                <span className="client-logo">The Meet Group</span>
                <span className="client-logo">Pack Digital</span>
                <span className="client-logo more-icon">More</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content">
            <h2 className="content-head">What I Bring to the Table</h2>
            <div className="pure-g benefits-section">
              <div className="pure-u-1 pure-u-md-1-3 benefit-item">
                <h3 className="benefit-title">Software that Works, Long-Term</h3>
                <p className="benefit-description">
                  I go beyond writing code—I build robust architectures that scale with your business.
                </p>
              </div>

              <div className="pure-u-1 pure-u-md-1-3 benefit-item">
                <h3 className="benefit-title">Tech That Adapts to You</h3>
                <p className="benefit-description">
                  I align software decisions with your goals, prioritizing long-term impact over fleeting trends.
                </p>
              </div>

              <div className="pure-u-1 pure-u-md-1-3 benefit-item">
                <h3 className="benefit-title">Expertise Across the Full Development Cycle</h3>
                <p className="benefit-description">
                  From strategy to deployment, I handle every phase, giving you the freedom to focus elsewhere.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="projects-section">
          <div className="content">
            <h2 className="content-head">Driving Efficiency & Long-Term Stability</h2>
            <p className="projects-subhead">Check out some of my clients' success stories.</p>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <div className="project-card">
                  <div className="project-logo">
                    {/* PayPal logo placeholder */}
                    <span className="logo-placeholder">PayPal</span>
                  </div>

                  <p className="project-description">
                    Accelerated large-scale systems testing at PayPal, enabling faster adoption of their new checkout
                    experience across hundred of microservices.
                  </p>

                  <div className="project-skills">
                    <h4>Skills:</h4>
                    <p>System Modernization, Scalable Architecture, API Optimization, Cross-Team Collaboration</p>
                  </div>

                  <div className="project-stack">
                    <h4>Stack:</h4>
                    <div className="stack-logos">
                      <span className="stack-item">React</span>
                      <span className="stack-item">Next.js</span>
                      <span className="stack-item">Playwright</span>
                      <span className="stack-item">MSW</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pure-u-1 pure-u-md-1-3">
                <div className="project-card">
                  <div className="project-logo">
                    {/* The Meet Group logo placeholder */}
                    <span className="logo-placeholder">The Meet Group</span>
                  </div>

                  <p className="project-description">
                    Improved backend efficiency at TMG by sunsetting unused services, reducing system complexity and
                    ensuring smooth scalability for millions of daily users.
                  </p>

                  <div className="project-skills">
                    <h4>Skills:</h4>
                    <p>Legacy Code Refactoring, Strangle Pattern Migration, Traffic & Dependency Analysis, Zero-Downtime
                      Deployments</p>
                  </div>

                  <div className="project-stack">
                    <h4>Stack:</h4>
                    <div className="stack-logos">
                      <span className="stack-item">PHP</span>
                      <span className="stack-item">Java</span>
                      <span className="stack-item">Kibana</span>
                      <span className="stack-item">Logstash</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pure-u-1 pure-u-md-1-3">
                <div className="project-card">
                  <div className="project-logo">
                    {/* Pack Digital logo placeholder */}
                    <span className="logo-placeholder">Pack Digital</span>
                  </div>

                  <p className="project-description">
                    Reduced CMS cost for Pack Digital by migrating storefronts from third-party providers, cutting
                    expenses without disrupting merchants.
                  </p>

                  <div className="project-skills">
                    <h4>Skills:</h4>
                    <p>Headless Ecommerce Development, API & CMS Migration, Developer Tooling & DX, Authentication &
                      Authorization</p>
                  </div>

                  <div className="project-stack">
                    <h4>Stack:</h4>
                    <div className="stack-logos">
                      <span className="stack-item">React</span>
                      <span className="stack-item">GraphQL</span>
                      <span className="stack-item">Shopify</span>
                      <span className="stack-item">Netlify</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-container">
              <a href="/portfolio" className="pure-button pure-button-primary">More Projects</a>
            </div>
          </div>
        </div>
        
        <div className="services-section">
          <div className="content">
            <h2 className="content-head">Strengthening Businesses Through Technology</h2>
            <p className="services-subhead">I work with high-growth companies to design, develop, and deploy resilient
              software that drives real impact.</p>

            <div className="services-list">
              <div className="service-item">
                <h3 className="service-title">SaaS Development & Modernization</h3>
                <p className="service-description">
                  Building, refactoring, and scaling robust platforms with Clean Architecture & SOLID principles.
                </p>
              </div>

              <div className="service-item">
                <h3 className="service-title">Systems Integration & API Development</h3>
                <p className="service-description">
                  Creating strong connections for seamless business operations with modular monoliths & microservices.
                </p>
              </div>

              <div className="service-item">
                <h3 className="service-title">Cloud-Native Architecture & DevOps</h3>
                <p className="service-description">
                  Optimizing AWS/GCP/Azure infrastructure, CI/CD automation, Inversion of Control for maintainability.
                </p>
              </div>

              <div className="service-item">
                <h3 className="service-title">Technical Leadership & Strategy</h3>
                <p className="service-description">
                  Fractional CTO, architecture and engineering consulting with Domain-Driven Design.
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a href="https://TDCInnovation.com" className="pure-button pure-button-primary">Work With Me</a>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="content">
            <h2 className="content-head">More Features & Benefits</h2>
            
            <div className="features-grid">
              <div className="feature-item">
                <h3 className="feature-title">Engineering-Driven Problem Solving</h3>
                <p className="feature-description">
                  I have a background in Computer, Biosystems, and Agricultural Engineering, which helps me apply structured, analytical thinking to software development.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Interdisciplinary Approach</h3>
                <p className="feature-description">
                  I've worked across hardware, software, and real-world systems, giving me a broader perspective when solving complex problems.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Software Architecture & Scalability</h3>
                <p className="feature-description">
                  I'm currently pursuing a postgraduate degree in software architecture, data science, and cybersecurity, strengthening my ability to design robust, secure, and scalable systems.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">From Physical to Digital Systems</h3>
                <p className="feature-description">
                  Coming from an engineering background, I think beyond software—I look at optimization, efficiency, and automation in both digital and real-world applications.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Global Collaboration</h3>
                <p className="feature-description">
                  I've worked with multicultural, multi-time zone teams, ensuring smooth communication and collaboration across different work styles.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Technical Leadership Without Bureaucracy</h3>
                <p className="feature-description">
                  I apply clean code, DDD, and maintainability principles to create long-lasting software without unnecessary complexity.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">End-to-End Thinking</h3>
                <p className="feature-description">
                  I've been involved in projects from ideation to deployment, allowing me to bridge the gap between business goals and technical execution.
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Adaptability & Continuous Learning</h3>
                <p className="feature-description">
                  I've transitioned across disciplines and technologies throughout my career, and I'm always learning to stay ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sturdy-software-section">
          <div className="content">
            <h2 className="content-head">Why Sturdy Software Matters?</h2>
            
            <div className="sturdy-content">
              <p className="sturdy-intro">
                I believe software should be strong—more than just functional, it must be resilient, structured, and built to last.
              </p>
              
              <div className="sturdy-paragraphs">
                <p>
                  In bodybuilding, a well-trained body is more than aesthetics. Strength comes from discipline, well-built foundations, and the ability to handle stress.
                </p>
                
                <p>
                  The same applies to software. Sturdy software handles load, scales with growth, and remains reliable under pressure.
                </p>
                
                <p>
                  Most software I've seen is fragile. Fix one thing, break another. Bugs pop out of nowhere, tech debt piles up, and releases fail in production. But I build software differently.
                </p>
                
                <p>
                  Strength comes from design. A strong body is sculpted with purposeful training—software should be the same. With a clear engineering vision, we can move from an MVP to a solid, maintainable system without losing agility.
                </p>
                
                <p className="sturdy-conclusion">
                  If you want your software to be sturdy, I'm the one to build it.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="why-tech-section">
          <div className="content">
            <h2 className="content-head">Why I Work in Tech</h2>
            
            <div className="why-tech-grid">
              <div className="why-tech-item">
                <h3 className="why-tech-title">Technology makes a real impact</h3>
                <p className="why-tech-description">
                  I've seen small businesses and solopreneurs thrive when they invest in the right software. It's fascinating.
                </p>
              </div>
              
              <div className="why-tech-item">
                <h3 className="why-tech-title">It's the closest thing to magic</h3>
                <p className="why-tech-description">
                  In my mind, applications are like potions, commands are spells. (And yes, I'm a huge Harry Potter fan.)
                </p>
              </div>
              
              <div className="why-tech-item">
                <h3 className="why-tech-title">Tech should liberate, not overwhelm</h3>
                <p className="why-tech-description">
                  I build tools that save time and reduce manual work—and avoid projects that exploit addictive algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="contact" className="contact-section">
          <div className="content">
            <h2 className="content-head">Let's Build Something Great Together</h2>
            
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
                      window.location.href = "mailto:" + ["thiago", "@", "thiagovilla.com"].join("");
                    }}>
                    thiago&#64;thiagovilla.com
                  </button>
                </div>
                
                <div className="contact-item">
                  <span className="contact-label">Website:</span>
                  <a href="https://thiagovilla.com" target="_blank" rel="noopener noreferrer">
                    thiagovilla.com
                  </a>
                </div>
                
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <a href="https://linkedin.com/in/othiagovilla" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/othiagovilla
                  </a>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="contact-form" name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email address" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="How can I help you?" rows="5" required></textarea>
                  </div>
                  
                  <button type="submit" className="pure-button pure-button-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;