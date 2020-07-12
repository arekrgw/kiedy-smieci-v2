import Joi from "@hapi/joi";

export const fullSchema = Joi.object({
  city: Joi.object({
    cityName: Joi.string().required(),
    province: Joi.string().optional(),
  }),
  region: Joi.object({
    regionName: Joi.string().required(),
    postalCode: Joi.string().optional(),
    hours: Joi.string().optional(),
  }),
  dates: Joi.array().items(
    Joi.object({
      date: Joi.string()
        // .pattern(/^20[2-9]\d-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)
        .required()
        .isoDate(),
      type: Joi.string().required(),
    })
  ),
});
