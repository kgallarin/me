import { ApolloError } from '@apollo/client/core';

export interface BaseErrors {
  general_error?: string[];
  [key: string]: string[] | undefined;
}

export interface FormWrapper<FieldsType, ErrorsType extends BaseErrors> {
  fields: FieldsType;
  errors: ErrorsType;
  isFaulty: boolean;
  isDirty: boolean;
  isProcessing: boolean;
  setErrors: (errors: Partial<ErrorsType>) => void;
  setErrorResponse: (error: ApolloError | unknown) => void;
  clearErrors: () => void;
  reset: () => void;
  getChangedFields: () => Partial<FieldsType>;
  getFields: (fields: (keyof FieldsType)[]) => Partial<FieldsType>;
}

export interface ContactFormFields {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors extends BaseErrors {
  name?: string[];
  email?: string[];
  message?: string[];
}
