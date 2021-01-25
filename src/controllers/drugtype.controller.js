const { DrugType } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const drugtype = await DrugType.findAll({
        limit: 10,
      });
      res.send(drugtype);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch drug type',
      });
    }
  },

  async getOne(req, res) {
    try {
      const drugtype = await DrugType.findByPk(req.params.drugtypeId);
      res.send(drugtype);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch a drug type',
      });
    }
  },

  async put(req, res) {
    try {
      const drugtype = await DrugType.update(req.body, {
        where: {
          id: req.params.drugtypeId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update drug type data',
      });
    }
  },

  async post(req, res) {
    try {
      const drugtype = await DrugType.create(req.body);
      res.send(drugtype);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a drug type',
      });
    }
  },

  async delete(req, res) {
    try {
      const drugtype = await DrugType.findByPk(req.params.drugtypeId);
      if (!drugtype) {
        res.status(500).send({
          error: 'An error has occured trying to delete a drug type',
        });
      }
      drugtype.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a drug type',
      });
    }
  },
};
