import * as React from "react";
import { graphql } from "gatsby";

import "../styles/projects.css";
import MainLayout from "../layout/MainLayout";
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
