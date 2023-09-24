import Joi from 'joi';
import { ref } from 'vue';

interface ValidationCompose {
  validate: (payload: any) => Promise<Joi.ValidationResult>;
  getFirstErrorMessage: (path: string) => string;
}

export function useValidation(schema: Joi.Schema): ValidationCompose {
  const errors = ref<Joi.ValidationError>();

  async function validate(payload: any): Promise<Joi.ValidationResult> {
    try {
      return await schema.validateAsync(payload);
    } catch (err) {
      if (err instanceof Joi.ValidationError) {
        errors.value = err;
      }

      throw err;
    }
  }

  function getFirstErrorMessage(path: string): string {
    return (errors.value as Joi.ValidationError).details.find(
      (e) => e.path[0] === path,
    )?.message as string;
  }

  return { validate, getFirstErrorMessage };
}
