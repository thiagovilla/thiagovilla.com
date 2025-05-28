import * as React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layout/MainLayout";
import markdownToHtml from "../utils/markdown-to-html";
import TitleWithBackButton from "../components/TitleWithBackButton";
import Breadcrumbs from "../components/Breadcrumbs";

/**
 * Renders a project detail page
 *
 * @param {Object} props - Component props
 * @param {Object} props.data - GraphQL query results containing project data
 * @param {Object} props.data.project - Project data from YAML file
 *
 * @returns {JSX.Element} Project detail page component
 */
const ProjectTemplate = ({ data: { project } }) => {
  return (
    <MainLayout>
      <main id="proj-dets">
        <header>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: project.title }]} />
          <TitleWithBackButton title={project.title} to="/projects" />
        </header>

        <main
          dangerouslySetInnerHTML={{ __html: markdownToHtml(project.description) }}
        />

        <aside>
          <section>
            <h2>Skills Used</h2>
            <ul>
              {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>

          <section>
            <h2>Technology Stack</h2>
            <ul>
              {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </section>
        </aside>

        {project.media?.length > 0 && (
          <footer>
            <h2>Project Media</h2>
            <ul>
              {project.media.map((item, index) => (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View Media
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </main>
    </MainLayout>
  );
};

export const query = graphql`
  query ProjectDetailQuery($slug: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      slug
      title
      description
      skills
      techStack
      media {
        url
        title
        description
      }
    }
  }
`;

export default ProjectTemplate;
