const { ProductMaster } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      let products = null;
      const search = req.query.search;
      if (search) {
        products = await ProductMaster.findAll({
          where: {
            [Op.or]: ["serialNo", "prodId", "prodName"].map((key) => ({
              [key]: {
                [Op.like]: `%${search}%`,
              },
            })),
          },
        });
      } else {
        products = await ProductMaster.findAll({
          limit: 10,
        });
      }
      res.send(products);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the products",
      });
    }
  },

  async show(req, res) {
    try {
      const product = await Song.findByPk(req.params.songId);
      res.send(product);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch a product",
      });
    }
  },

  async put(req, res) {
    try {
      const product = await ProductMaster.update(req.body, {
        where: {
          id: req.params.prodId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to update the product",
      });
    }
  },

  async post(req, res) {
    try {
      const product = await ProductMaster.create(req.body);
      res.send(product);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create a product",
      });
    }
  },
};
