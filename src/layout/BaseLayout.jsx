import React from "react";

import "../styles.css";

function PromoBar() {
  return (
    <section id="promo-bar">
      <a href="#contact">I'm available for hiring. Hire now.</a>
    </section>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal">
        <a className="pure-menu-heading" href="/">
          Thiago Villa
        </a>

        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected">
            <a href="/" className="pure-menu-link">
              Home
            </a>
          </li>
          <li className="pure-menu-item">
            <a
              href="https://linkedin.com/in/othiagovilla"
              className="pure-menu-link"
            >
              LinkedIn
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#contact" className="pure-menu-link">
              Work With Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Made with{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
        in Vale do Coquinho.
      </p>
      <p>&copy; 2024 Thiago Villa. All rights reserved.</p>
    </footer>
  );
}

function Layout(props) {
  return (
    <>
      <PromoBar />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
