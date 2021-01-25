const { DrugCategory } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const drugcategory = await DrugCategory.findAll({
        limit: 10,
      });
      res.send(drugcategory);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch drug category',
      });
    }
  },

  async getOne(req, res) {
    try {
      const drugcategory = await DrugCategory.findByPk(
        req.params.drugcategoryId
      );
      res.send(drugcategory);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch a drug category',
      });
    }
  },

  async put(req, res) {
    try {
      const drugcategory = await DrugCategory.update(req.body, {
        where: {
          id: req.params.drugcategoryId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update drug category data',
      });
    }
  },

  async post(req, res) {
    try {
      const drugcategory = await DrugCategory.create(req.body);
      res.send(drugcategory);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a drug category',
      });
    }
  },

  async delete(req, res) {
    try {
      const drugcategory = await DrugCategory.findByPk(
        req.params.drugcategoryId
      );
      if (!drugcategory) {
        res.status(500).send({
          error: 'An error has occured trying to delete a drug category',
        });
      }
      drugcategory.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a drug category',
      });
    }
  },
};
