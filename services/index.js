import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query GetProjects {
      projects(orderBy: createdAt_DESC) {
        description
        title
        tags {
          name
        }
        githubRepoUrl
        projectSiteUrl
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.projects;
};
