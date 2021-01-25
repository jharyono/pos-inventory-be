const { Supplier } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const supplier = await Supplier.findAll({
        limit: 10,
      });
      res.send(supplier);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch supplier',
      });
    }
  },

  async getOne(req, res) {
    try {
      const supplier = await Supplier.findByPk(req.params.supplierId);
      res.send(supplier);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch a supplier',
      });
    }
  },

  async put(req, res) {
    try {
      const supplier = await Supplier.update(req.body, {
        where: {
          id: req.params.supplierId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update supplier data',
      });
    }
  },

  async post(req, res) {
    try {
      const supplier = await Supplier.create(req.body);
      res.send(supplier);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a supplier',
      });
    }
  },

  async delete(req, res) {
    try {
      const supplier = await Supplier.findByPk(req.params.supplierId);
      if (!supplier) {
        res.status(500).send({
          error: 'An error has occured trying to delete a supplier',
        });
      }
      supplier.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a supplier',
      });
    }
  },
};
