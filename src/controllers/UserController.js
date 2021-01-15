const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      let users = null;
      const search = req.query.search;
      if (search) {
        users = await User.findAll({
          where: {
            [Op.or]: ["name", "group"].map((key) => ({
              [key]: {
                [Op.like]: `%${search}%`,
              },
            })),
          },
        });
      } else {
        users = await User.findAll({
          limit: 10,
        });
      }
      res.send(users);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users",
      });
    }
  },

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.userId);
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch a user",
      });
    }
  },

  async put(req, res) {
    try {
      const user = await User.update(req.body, {
        where: {
          id: req.params.prodId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to update the user",
      });
    }
  },

  async post(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create a user",
      });
    }
  },
};
