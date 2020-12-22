const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address",
          });
          break;
        case "password":
          res.status(400).send({
            error: `Your provided password not follow the given rules (a-z A-Z 0-9 8-32 chars)`,
          });
          break;
        default:
          res.status(400).send({
            error: `Invalid registration information`,
          });
      }
    } else {
      next();
    }
  },
};
