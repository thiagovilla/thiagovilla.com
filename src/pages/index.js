import * as React from "react";

const Hero = () => (
  <section className="wrapper">
    <h1>Sturdy software, built for impact</h1>
    <p>
      Your company needs sturdy software that leads to great products, meaning
      happy customers and recurring revenue, steady releases, and an awesome
      developer experience.
    </p>
    <p>
      Hi, my name is Thiago. I am a{" "}
      <strong>senior fullstack web developer</strong> in{" "}
      <span role="img" aria-label="Flag of Brazil" title="Flag of Brazil">
        🇧🇷
      </span>{" "}
      and I want to help your company bulk up your code today.
    </p>
    <ul className="hero__highlights unstyled-list">
      <li>8+ years in software development</li>
      <li>Full stack expertise: Node & React</li>
      <li>Solving distributed systems issues</li>
      <li>Clean, scalable, tested code</li>
      <li>Agile team experience, E2E development</li>
      <li>Always learning new tech</li>
    </ul>
    <p>
      I'm available for hiring.{" "}
      <a href="#contact" className="button button-primary">
        Hire now
      </a>{" "}
      or{" "}
      <a
        href="https://linkedin.com/in/othiagovilla"
        className="button button-secondary"
      >
        see my LinkedIn
      </a>
      .
    </p>
  </section>
);

const Benefits = () => (
  <section className="benefits wrapper">
    <h2>Hire me and you get</h2>
    <ul className="pure-g unstyled-list">
      <li className="pure-u-1 pure-u-md-1-2">
        <h3>Efficient, scalable, and maintainable systems</h3>
        <p>
          I use my experience to build applications that scale out to handle
          future growth, saving time and resources on refactoring.
        </p>
      </li>
      <li className="pure-u-1 pure-u-md-1-2">
        <h3>Faster project completion and fewer errors</h3>
        <p>
          I am proficient in multiple languages and choose the best tool for the
          job. That speeds up development and minimizes bugs.
        </p>
      </li>
      <li className="pure-u-1 pure-u-md-1-2">
        <h3>Easily solve critical technical challenges</h3>
        <p>
          My problem-solving abilities reduce downtime and improve the
          reliability of the software, keeping projects on track.
        </p>
      </li>
      <li className="pure-u-1 pure-u-md-1-2">
        <h3>Improve team performance and cohesion</h3>
        <p>
          Through leadership and mentoring, I help junior team members grow,
          creating a stronger, more efficient team.
        </p>
      </li>
      <li className="pure-u-1 pure-u-md-1-2">
        <h3>Deliver high-quality, secure software</h3>
        <p>
          I apply best practices that ensure the product is robust, secure, and
          ready for production, reducing long-term maintenance costs.
        </p>
      </li>
    </ul>
  </section>
);

const ContactForm = () => (
  <iframe
    id="contact"
    aria-label="Hire Thiago Now"
    frameborder="0"
    style={{ display: "block", height: 755, width: "99%", border: "none" }}
    src="https://forms.zohopublic.com/thiagothiag1/form/HireThiagoNow/formperma/lTsp41KuOlThP8T1qsrB-imczLzyeskqU31xarN6WUM"
  ></iframe>
);

const IndexPage = () => {
  return (
    <>
      <Hero />
      {/* TODO: featured projects */}
      <Benefits />
      <ContactForm />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Thiago Villa</title>;
