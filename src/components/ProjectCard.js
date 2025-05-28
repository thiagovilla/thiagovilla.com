import React from "react";
import { Link } from "gatsby";
import markdownToHtml from "../utils/markdown-to-html";
import { PiArrowRight } from "react-icons/pi";

/**
 * Project card component
 *
 * @param {Object} props
 * @param {Project} props.project - Project data
 */
const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="link-unstyled">
    <article className="project-card">
      <header><h2>{project.title}</h2></header>

      <main dangerouslySetInnerHTML={{ __html: markdownToHtml(project.excerpt) }} />

      <footer>
        <section>
          <h3>Skills</h3>
          <ul>
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-caption">Tech Stack</h3>
          <ul className="tag-list">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        <button className="pure-button">View Project Details <PiArrowRight size={16} className="icon-align" aria-hidden="true" /></button>
      </footer>
    </article>
  </Link>
);

export default ProjectCard;
