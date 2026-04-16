import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { ContactFormFields } from '@/Types/Forms';

export const SEND_CONTACT_MUTATION = gql`
  mutation SendContact(contactFormFields
  : ContactFormFields!) {
    sendContact(contactFormFields: ContactFormFields) {
      success
    }
  }
`;

export async function sendContact(contactFormFields: ContactFormFields): Promise<void> {
  await apolloClient.mutate({
    mutation: SEND_CONTACT_MUTATION,
    variables: { contactFormFields },
  });
}
