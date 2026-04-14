import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { StoryHeroResponseDTO } from '@/Types/Responses';

export const GET_STORY_HERO = gql`
  query GetStoryHero($key: String!) {
    storyHero(key: $key) {
      id
      key
      title
      subtitle
      description
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

export const GET_STORY_HEROES = gql`
  query GetStoryHeroes {
    storyHeroes {
      id
      key
      title
      subtitle
      description
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

export async function getStoryHeroes(): Promise<StoryHeroResponseDTO[]> {
  const response = await apolloClient.query({
    query: GET_STORY_HEROES,
  });

  return response.data.storyHeroes;
}

export async function getStoryHeroByKey(key: string): Promise<StoryHeroResponseDTO> {
  const response = await apolloClient.query({
    query: GET_STORY_HERO,
    variables: { key },
  });

  return response.data.storyHero;
}
