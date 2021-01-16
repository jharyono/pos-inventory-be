const { ControlData } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const controldata = await ControlData.findAll({
        limit: 10,
      });
      res.send(controldata);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch controldata',
      });
    }
  },

  async put(req, res) {
    try {
      const controldata = await ControlData.update(req.body, {
        where: {
          id: req.params.controldataId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update controldata data',
      });
    }
  },

  async post(req, res) {
    try {
      const controldata = await ControlData.create(req.body);
      res.send(controldata);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a controldata',
      });
    }
  },

  async delete(req, res) {
    try {
      const controldata = await ControlData.findByPk(req.params.controldataId);
      if (!controldata) {
        res.status(500).send({
          error: 'An error has occured trying to delete a controldata',
        });
      }
      controldata.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a controldata',
      });
    }
  },
};
