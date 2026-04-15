import gql from 'graphql-tag';

import { apolloClient } from '@/Apollo';

export const SEND_CONTACT_EMAIL = gql`
  mutation SendContactEmail($name: String!, $email: String!, $message: String!) {
    sendContactEmail(name: $name, email: $email, message: $message) {
      success
      message
    }
  }
`;

export interface ContactEmailInput {
    name: string;
    email: string;
    message: string;
}

export interface ContactEmailResponse {
    success: boolean;
    message: string;
}

export async function sendContactEmail(input: ContactEmailInput): Promise<ContactEmailResponse> {
    const response = await apolloClient.mutate<{ sendContactEmail: ContactEmailResponse }>({
        mutation: SEND_CONTACT_EMAIL,
        variables: input,
    });

    return response.data!.sendContactEmail;
}
