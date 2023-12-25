import * as joi from "joi";

export const registerShcema = joi.object().keys({
  name: joi.string().required(),
  username: joi.string().required().max(15),
  phoneNumber: joi.string().max(15).required(),
  password: joi.string().required(),
  email: joi.string().email().required(),
});
