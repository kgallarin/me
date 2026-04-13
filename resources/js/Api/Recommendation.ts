import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { PaginatedResponse, RecommendationsResponseDTO } from '@/Types/Responses';

export const GET_RECOMMENDATIONS = gql`
  query GetRecommendations($first: Int!, $page: Int) {
    recommendations(first: $first, page: $page) {
      data {
        id
        author
        title
        text
        rating
        linkedIn
        avatar {
          url
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

export interface GetRecommendationsParams {
  first?: number;
  page?: number;
}

export async function getRecommendations(
  params: GetRecommendationsParams = {},
): Promise<PaginatedResponse<RecommendationsResponseDTO>> {
  const variables = {
    first: 10,
    ...params,
  };
  const response = await apolloClient.query<{ recommendations: PaginatedResponse<RecommendationsResponseDTO> }>({
    query: GET_RECOMMENDATIONS,
    variables,
  });

  return response.data.recommendations;
}
