import React from "react";

import "../styles/main.css";
import { PiLinkedinLogo } from "react-icons/pi";

function PromoBar() {
  const calendlyUrl = typeof process !== "undefined" && process.env.GATSBY_CALENDLY_URL
    ? process.env.GATSBY_CALENDLY_URL
    : "https://calendly.com/thiagovilla/30-minute-meeting";

  return (
    <section id="promo-bar">
      <div className="promo-bar-content">
          <strong>Available for  immediate start!</strong> &mdash;{" "}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-bar-link"
          >
            Schedule Intro Call
          </a>
      </div>
    </section>
  );
}

function Header() {
  const [pathname, setPathname] = React.useState("/");

  React.useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    return path !== "/" && pathname.startsWith(path);
  };

  const navItems = [
    {
      path: "/",
      label: "Home",
      checkActive: true
    },
    {
      path: "https://linkedin.com/in/othiagovilla",
      label: "LinkedIn",
      icon: <PiLinkedinLogo size={24} style={{ verticalAlign: "middle", marginRight: "0.25rem" }} />,
      external: true
    },
    {
      path: "/faqs",
      label: "FAQs",
      checkActive: true
    },
    {
      path: "/#contact",
      label: "Work With Me"
    }
  ];

  return (
    <div className="header">
      <nav className="home-menu pure-menu">
        <a className="pure-menu-heading" href="/" style={{ lineHeight: "100%" }}>
          <img
            src="/images/logo-dark.png"
            srcSet="/images/logo-dark@2x.png 2x, /images/logo-dark@3x.png 3x"
            alt="Thiago Villa"
            style={{ height: "24px", width: "auto", verticalAlign: "middle" }}
          />

        </a>

        <ul className="pure-menu-list pure-menu-horizontal">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`pure-menu-item ${item.checkActive && isActive(item.path) ? "pure-menu-selected" : ""}`}
            >
              <a
                href={item.path}
                className="pure-menu-link"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon}{item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer">
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
