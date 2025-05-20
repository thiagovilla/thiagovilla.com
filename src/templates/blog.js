import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { PiCopy, PiEnvelope, PiInstagramLogo, PiLinkedinLogo, PiWhatsappLogo } from "react-icons/pi";

import MainLayout from "../layout/MainLayout";
import Toast from "../components/Toast";

/**
 * Converts a date to a relative time string
 * @param {Date|String|Number} date - The date to convert
 * @returns {String} Relative time string
 */
const getRelativeTime = (date) => {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_WEEK = 604800;
  const SECONDS_IN_MONTH = 2592000;
  const SECONDS_IN_YEAR = 31536000;

  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

  if (seconds < SECONDS_IN_MINUTE) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (seconds < SECONDS_IN_HOUR) {
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (seconds < SECONDS_IN_DAY) {
    const hours = Math.floor(seconds / SECONDS_IN_HOUR);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (seconds < SECONDS_IN_WEEK) {
    const days = Math.floor(seconds / SECONDS_IN_DAY);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (seconds < SECONDS_IN_MONTH) {
    const weeks = Math.floor(seconds / SECONDS_IN_WEEK);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (seconds < SECONDS_IN_YEAR) {
    const months = Math.floor(seconds / SECONDS_IN_MONTH);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(seconds / SECONDS_IN_YEAR);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const query = graphql`
  query BlogPostAndRelated($slug: String! = "my-first-post") {
    post: markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        category
        tags
        featuredImageAlt
        featuredImageCreditText
        featuredImageCreditLink
      }
      html
      featuredImageFile {
        childImageSharp {
          gatsbyImageData(width: 700, layout: CONSTRAINED)
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      limit: 5
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fields: {slug: {ne: $slug}}}
    ) {
      nodes {
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        featuredImageFile {
          childImageSharp {
            gatsbyImageData(width: 250, layout: CONSTRAINED)
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        title
        description
        author {
          bio
          name
          email
          role
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  }
 `;

export default function BlogPost({ data }) {
  const [showToast, setShowToast] = useState(false);
  const { frontmatter, html } = data.post;
  const image = getImage(data.post.featuredImageFile);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const socials = [{
    link: "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
    icon: PiLinkedinLogo
  }, {
    link: "https://api.whatsapp.com/send?text=" + url,
    icon: PiWhatsappLogo
  }, {
    link: "https://www.instagram.com/direct/inbox",
    icon: PiInstagramLogo
  }, {
    link: "mailto:?subject=" + encodeURIComponent(frontmatter.title) + "&body=" + url,
    icon: PiEnvelope
  }];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <MainLayout>
      {showToast && <Toast open={showToast} message="Copied to clipboard!" />}
      <article id="post">
        <header>
          <h1>{frontmatter.title}</h1>
          <StaticImage src="../images/profile-pic.jpg" alt="Profile picture" placeholder="blurred" layout="fixed"
                       width={56} height={56} />
          <p>
            <button onClick={handleCopy}>
              <time dateTime={frontmatter.date}>{getRelativeTime(frontmatter.date)}</time>
            </button>
            {" "}· By <address>Thiago Villa</address>
            {" "}<strong><span hidden>In</span> {frontmatter.category}</strong>
          </p>
          <ul>
            {frontmatter.tags?.map(tag => <li key={tag}>#{tag}</li>)}
          </ul>
          <ul>
            {socials.map(social => (
              <li key={social.link}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {<social.icon size={24} />}
                </a>
              </li>
            ))}
            <li>
              <button onClick={handleCopy}>
                <PiCopy size={24} />
              </button>
            </li>
          </ul>
          {image && <figure>
            <GatsbyImage image={image} alt={frontmatter.featuredImageAlt ?? frontmatter.title} />
            {frontmatter.featuredImageCreditText && <figcaption>Photo Credit: <a
              href={frontmatter.featuredImageCreditLink}>{frontmatter.featuredImageCreditText}</a></figcaption>}
          </figure>}
        </header>
        <main dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <section id="bio">
        <StaticImage
          src="../images/profile-pic.jpg"
          alt={data.site.siteMetadata.author.name}
          width={100}
          height={100}
          layout="fixed"
          placeholder="blurred"
          style={{ borderRadius: "50%" }}
        />
        <h2>About the Author</h2>
        <p>{data.site.siteMetadata.author.name} - {data.site.siteMetadata.author.role}</p>
        <p>{data.site.siteMetadata.author.bio}</p>
        <ul>
          <li><a
            href={data.site.siteMetadata.author.social.linkedin}
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <PiLinkedinLogo size={24} />
          </a></li>
          <li><a
            href={"mailto:" + data.site.siteMetadata.author.email}
            aria-label="Email"
          >
            <PiEnvelope size={24} />
          </a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Latest Posts</h2>
        <ul>
          {data.relatedPosts.nodes.map(post => (
            <li key={post.fields.slug}>
              <a href={post.fields.slug}>
                {post.featuredImageFile && (
                  <GatsbyImage
                    image={getImage(post.featuredImageFile)}
                    alt={post.frontmatter.featuredImageAlt ?? post.frontmatter.title}
                  />
                )}
                <main>
                  <h3>{post.frontmatter.title}</h3>
                  <time dateTime={post.frontmatter.date}>
                    {getRelativeTime(post.frontmatter.date)}
                  </time>
                </main>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

export const Head = ({ data }) =>
  <title>{data.post.frontmatter.title} - Thiago Villa</title>;
