import * as React from "react";
import { graphql } from "gatsby";

import "../styles/projects.css";
import MainLayout from "../layout/MainLayout";
import markdownToHtml from "../utils/markdown-to-html";
import TitleWithBackButton from "../components/TitleWithBackButton";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCard from "../components/ProjectCard";


/**
 * Projects list page component
 *
 * @param {Object} props - Component props
 * @param {Object} props.data - GraphQL query results containing projects data
 * @param {Object} props.data.projects - Projects data from YAML files
 * @param {Project[]} props.data.projects.nodes - Array of project nodes containing project details
 *
 * @returns {JSX.Element} Projects page component
 */
const ProjectsPage = ({ data: { projects: { nodes: projects } } }) => {

  /**
   * Truncates a project description and converts Markdown to HTML
   *
   * @param {string} description - Project description in Markdown format
   * @param {number} length - Maximum length to truncate to
   * @returns {string} Truncated HTML description
   */
  const getTruncatedDescription = (description, length = 200) => {
    if (!description) return "";

    // Replace line breaks with spaces for the truncated preview
    const plainText = description.replace(/\n/g, " ");

    // Truncate the text before processing Markdown
    const truncated = plainText.length > length
      ? plainText.substring(0, length) + "..."
      : plainText;

    // Process the Markdown after truncation, but don't preserve line breaks
    // since we've already replaced them with spaces
    return markdownToHtml(truncated);
  };

  return (
    <MainLayout>
      <main id="proj-list">
        <header>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
          <TitleWithBackButton title={"Projects"} />
        </header>

        <section>
          <p>
            Here are some of the projects I've worked on. Each showcases different skills and technologies
            that I've applied to solve real-world problems.
          </p>

          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </MainLayout>
  );
};

export const query = graphql`
  query ProjectsPageQuery {
    projects: allProjectsYaml {
      nodes {
        slug
        title
        excerpt
        description
        skills
        techStack
      }
    }
  }
`;

export default ProjectsPage;
