import { UnwrapNestedRefs, UnwrapRef, reactive, watch } from 'vue';

import { ApolloError } from '@apollo/client/core';
import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';

import type { BaseErrors, FormWrapper } from '@/Types/Forms';

export default function useForm<FieldsType extends object, ErrorsType extends BaseErrors>(
  fields: FieldsType,
): UnwrapNestedRefs<FormWrapper<FieldsType, ErrorsType>> {
  const originalFields = cloneDeep(fields);

  // Flag to suppress the watcher during programmatic resets
  let resetting = false;

  const reset = (): void => {
    resetting = true;
    form.fields = cloneDeep(originalFields) as UnwrapRef<FieldsType>;
    form.errors = {} as UnwrapRef<ErrorsType>;
    form.isFaulty = false;
    form.isDirty = false;
    // delay for watcher side effect, then fire again
    setTimeout((): void => {
      resetting = false;
    }, 0);
  };

  const clearErrors = (): void => {
    form.errors = {} as UnwrapRef<ErrorsType>;
    form.isFaulty = false;
  };

  const setErrors = (errors: Partial<ErrorsType>): void => {
    form.errors = errors as UnwrapRef<ErrorsType>;
    form.isFaulty = true;
  };

  const setErrorResponse = (error: ApolloError | unknown): void => {
    if (error instanceof ApolloError) {
      const graphQLErrors = error.graphQLErrors;

      if (graphQLErrors && graphQLErrors.length > 0) {
        // Lighthouse puts validation errors in extensions.validation
        const validationErrors = graphQLErrors[0]?.extensions?.validation as Partial<ErrorsType> | undefined;

        if (validationErrors && Object.keys(validationErrors).length > 0) {
          form.setErrors(validationErrors);
          return;
        }

        // Generic GraphQL error
        form.setErrors({ general_error: [graphQLErrors[0].message] } as Partial<ErrorsType>);
        return;
      }
    }

    // Fallback for non-Apollo errors
    const message = (error as Error)?.message || 'An unexpected error occurred';
    form.setErrors({ general_error: [message] } as Partial<ErrorsType>);
  };

  const getChangedFields = (): Partial<FieldsType> => {
    const changedFields: Partial<FieldsType> = {};
    const current = form.fields as unknown as FieldsType;

    (Object.keys(originalFields) as (keyof FieldsType)[]).forEach((key: keyof FieldsType): void => {
      if (!isEqual(current[key], (originalFields as FieldsType)[key])) {
        changedFields[key] = current[key];
      }
    });

    return changedFields;
  };

  const getFields = (keys: (keyof FieldsType)[]): Partial<FieldsType> => {
    const output: Partial<FieldsType> = {};
    const formFields = form.fields as FieldsType;

    keys.forEach((key: keyof FieldsType): void => {
      if (key in formFields) {
        output[key] = formFields[key];
      }
    });

    return output;
  };

  const form: UnwrapNestedRefs<FormWrapper<FieldsType, ErrorsType>> = reactive({
    fields,
    errors: {} as ErrorsType,
    isFaulty: false,
    isDirty: false,
    isProcessing: false,
    reset,
    setErrorResponse,
    setErrors,
    clearErrors,
    getChangedFields,
    getFields,
  });

  watch(
    (): UnwrapRef<FieldsType> => form.fields,
    (): void => {
      if (resetting) return;
      form.clearErrors();
      form.isDirty = !isEqual(form.fields, originalFields);
    },
    { deep: true },
  );

  return form;
}
