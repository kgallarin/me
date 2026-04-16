/**
 * Utility to convert an object to FormData, handling nested objects, arrays, and files.
 * Optimized for GraphQL multipart requests if needed, but primarily for general Laravel/PHP backends.
 */

const appendToFormData = (formData: FormData, key: string, value: unknown): void => {
  if (value === undefined || value === null) {
    return;
  }

  if (value instanceof File) {
    formData.append(key, value);
  } else if (Array.isArray(value)) {
    value.forEach((item: unknown, index: number): void => {
      // PHP/Laravel expects [] for arrays.
      // For object arrays, sometimes indexed keys are preferred: key[0][subKey]
      const arrayKey = typeof item === 'object' && !(item instanceof File) ? `${key}[${index}]` : `${key}[]`;
      appendToFormData(formData, arrayKey, item);
    });
  } else if (typeof value === 'object') {
    Object.keys(value as Record<string, unknown>).forEach((subKey: string): void => {
      appendToFormData(formData, `${key}[${subKey}]`, (value as Record<string, unknown>)[subKey]);
    });
  } else {
    formData.append(key, String(value));
  }
};

/**
 * Converts a plain object to FormData.
 */
export default function toFormData(fields: Record<string, unknown>): FormData {
  const formData = new FormData();

  Object.keys(fields).forEach((key: string): void => {
    appendToFormData(formData, key, fields[key]);
  });

  return formData;
}

interface FluentFormData {
  append(key: string, value: unknown): FluentFormData;
  build(): FormData;
}

/**
 * Composable for building FormData fluently.
 */
export function useFormData(): FluentFormData {
  const fd = new FormData();

  const fluent: FluentFormData = {
    append(key: string, value: unknown): FluentFormData {
      appendToFormData(fd, key, value);
      return fluent;
    },
    build(): FormData {
      return fd;
    },
  };

  return fluent;
}
