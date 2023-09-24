import joi from 'joi';

export const TodoSchema = joi.object({
  name: joi.string().required().messages({
    'string.empty': 'Todo name cannot be empty',
  }),
});
