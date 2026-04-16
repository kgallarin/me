import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { SendContactInput } from '@/Types/Forms';

export const SEND_CONTACT_MUTATION = gql`
  mutation SendContact($input: SendContactInput!) {
    sendContact(input: $input) {
      success
    }
  }
`;

export async function sendContact(contactFormFields: SendContactInput): Promise<void> {
  await apolloClient.mutate({
    mutation: SEND_CONTACT_MUTATION,
    variables: { contactFormFields },
  });
}
