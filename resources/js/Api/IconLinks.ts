import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { IconLinkResponseDTO } from '@/Types/Responses';

export const GET_ICON_LINKS = gql`
  query GetIconLinks {
    iconLinks {
      id
      name
      url
      icon
      classColor
    }
  }
`;

export async function getIconLinks(): Promise<IconLinkResponseDTO[]> {
  const response = await apolloClient.query({
    query: GET_ICON_LINKS,
  });

  return response.data.iconLinks;
}
