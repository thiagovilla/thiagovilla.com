import React from "react";
import { Link } from "gatsby";
import markdownToHtml from "../utils/markdown-to-html";
import { PiArrowRight } from "react-icons/pi";
import BadgeList from "./BadgeList";

/**
 * Project card component
 *
 * @param {Object} props
 * @param {Project} props.project - Project data
 */
const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="link-unstyled">
    <article className="project-card">
      <header><h2 className="text-h3">{project.title}</h2></header>

      <main dangerouslySetInnerHTML={{ __html: markdownToHtml(project.excerpt) }} />

      <footer>
        <section>
          <h3 className="text-caption">Skills</h3>
          <BadgeList items={project.skills} />
        </section>

        <section>
          <h3 className="text-caption">Tech Stack</h3>
          <BadgeList items={project.techStack} />
        </section>

        <button className="pure-button">View Project Details <PiArrowRight size={16} className="icon-fix-align" aria-hidden="true" /></button>
      </footer>
    </article>
  </Link>
);

export default ProjectCard;
