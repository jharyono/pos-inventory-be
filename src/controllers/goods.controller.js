const { Goods } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async get(req, res) {
    try {
      const goods = await Goods.findAll({
        limit: 10,
      });
      res.send(goods);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the goods',
      });
    }
  },

  async getOne(req, res) {
    try {
      const goods = await Goods.findByPk(req.params.goodsId);
      res.send(goods);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch an item',
      });
    }
  },

  async put(req, res) {
    try {
      const goods = await Goods.update(req.body, {
        where: {
          id: req.params.goodsId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update goods data',
      });
    }
  },

  async post(req, res) {
    try {
      const goods = await Goods.create(req.body);
      res.send(goods);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a goods',
      });
    }
  },

  async delete(req, res) {
    try {
      const goods = await Goods.findByPk(req.params.goodsId);
      if (!goods) {
        res.status(500).send({
          error: 'An error has occured trying to delete a goods',
        });
      }
      goods.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a goods',
      });
    }
  },
};
