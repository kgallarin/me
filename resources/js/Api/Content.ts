import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { ContentResponseDTO } from '@/Types/Responses';

export const GET_CONTENT = gql`
  query GetContent($key: String!) {
    content(key: $key) {
      id
      key
      title
      subtitle
      content {
        title
        text
      }
      heroImages {
        url
        alt
      }
      socialImages {
        url
        alt
      }
    }
  }
`;

export const GET_CONTENTS = gql`
  query GetContents {
    contents {
      id
      key
      title
      subtitle
      content {
        title
        text
      }
      heroImages {
        url
        alt
      }
      socialImages {
        url
        alt
      }
    }
  }
`;

export async function getContents(): Promise<ContentResponseDTO[]> {
  const response = await apolloClient.query({
    query: GET_CONTENTS,
  });

  return response.data.contents;
}

export async function getContentByKey(key: string): Promise<ContentResponseDTO> {
  const response = await apolloClient.query({
    query: GET_CONTENT,
    variables: { key },
  });

  return response.data.content;
}
