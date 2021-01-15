const { Customer } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async get(req, res) {
    try {
      const customer = await Customer.findAll({
        limit: 10,
      });
      res.send(customer);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch customer",
      });
    }
  },

  async put(req, res) {
    try {
      const customer = await Customer.update(req.body, {
        where: {
          id: req.params.customerId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to update customer data",
      });
    }
  },

  async post(req, res) {
    try {
      const customer = await Customer.create(req.body);
      res.send(customer);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create a customer",
      });
    }
  },

  async delete(req, res) {
    try {
      const customer = await Customer.findByPk(req.params.customerId);
      if (!customer) {
        res.status(500).send({
          error: "An error has occured trying to delete a customer",
        });
      }
      customer.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to delete a customer",
      });
    }
  },
};
