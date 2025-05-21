import React from "react";

import "../styles.css";

function PromoBar() {
  return (
    <section id="promo-bar">
      <a href="#contact">I'm available for hiring. <span style={{ textDecoration: 'underline' }}>Hire now</span>.</a>
    </section>
  );
}

function Header() {
  return (
    <div className="header">
      <nav className="home-menu pure-menu">
        <a className="pure-menu-heading" href="/">
          Thiago Villa
        </a>

        <ul className="pure-menu-list pure-menu-horizontal">
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
      </nav>
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
      <div id="toast-portal" />
    </>
  );
}

export default Layout;
