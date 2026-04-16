import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { PaginationParams } from '@/Types/Parameters';
import { PaginatedResponse, ProjectResponseDTO } from '@/Types/Responses';

export const GET_PROJECTS = gql`
  query GetProjects($first: Int!, $page: Int) {
    projects(first: $first, page: $page) {
      data {
        id
        title
        link
        description
        order
        icon {
          icon
          color
        }
        carouselSettings {
          autoplay
          showIndicators
          showArrows
        }
        images {
          url
          alt
        }
      }
      paginatorInfo {
        total
        count
        currentPage
        lastPage
        hasMorePages
      }
    }
  }
`;

export async function getProjects(params: PaginationParams = {}): Promise<PaginatedResponse<ProjectResponseDTO>> {
  // change param types if necessary
  const variables = { first: 10, ...params };
  const response = await apolloClient.query<{ projects: PaginatedResponse<ProjectResponseDTO> }>({
    query: GET_PROJECTS,
    variables,
  });

  return response.data.projects;
}
