const { UserGroup } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const usergroup = await UserGroup.findAll({
        limit: 10,
      });
      res.send(usergroup);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch user group',
      });
    }
  },

  async getOne(req, res) {
    try {
      const usergroup = await UserGroup.findByPk(req.params.usergroupId);
      res.send(usergroup);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch a user group',
      });
    }
  },

  async put(req, res) {
    try {
      const usergroup = await UserGroup.update(req.body, {
        where: {
          id: req.params.usergroupId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update user group',
      });
    }
  },

  async post(req, res) {
    try {
      const usergroup = await UserGroup.create(req.body);
      res.send(usergroup);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a user group',
      });
    }
  },

  async delete(req, res) {
    try {
      const usergroup = await UserGroup.findByPk(req.params.usergroupId);
      if (!usergroup) {
        res.status(500).send({
          error: 'An error has occured trying to delete a user group',
        });
      }
      usergroup.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a user group',
      });
    }
  },
};
