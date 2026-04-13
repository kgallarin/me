import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { PaginationParams } from '@/Types/Parameters';
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

export async function getRecommendations(
  params: PaginationParams = {},
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
