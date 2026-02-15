import * as Joi from "joi";

export const carValidation = Joi.object({
    brand: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({
            'string.pattern.base': 'Your brand did not match pattern',
            'string.empty': 'Brand cannot be empty',
        }),
    year: Joi.number().integer().min(1980).max(2026)
        .messages({
            'number.min': 'min year is 1980',
            'number.max': 'max year is 2026',
        }),
    price: Joi.number().min(0).max(1000000)
        .messages({
            'number.min': 'min price is 0',
            'number.max': 'max price is 1000000',
        })
});