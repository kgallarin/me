import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

import { ContactFormFields } from '@/Types/Forms';

export const SEND_CONTACT_MUTATION = gql`
  mutation SendContact($name: String!, $email: String!, $message: String!) {
    sendContactEmail(name: $name, email: $email, message: $message) {
      success
      message
    }
  }
`;

export async function sendContact(contactFormFields: ContactFormFields): Promise<void> {
    await apolloClient.mutate({
        mutation: SEND_CONTACT_MUTATION,
        variables: contactFormFields,
    });
}
