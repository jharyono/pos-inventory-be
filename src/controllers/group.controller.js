const { UserGroup } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async get(req, res) {
    try {
      const usergroup = await UserGroup.findAll({
        limit: 10,
      });
      res.send(usergroup);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the user groups",
      });
    }
  },

  // async index(req, res) {
  //   try {
  //     let products = null;
  //     const search = req.query.search;
  //     if (search) {
  //       products = await ProductMaster.findAll({
  //         where: {
  //           [Op.or]: ["serialNo", "prodId", "prodName"].map((key) => ({
  //             [key]: {
  //               [Op.like]: `%${search}%`,
  //             },
  //           })),
  //         },
  //       });
  //     } else {
  //       products = await ProductMaster.findAll({
  //         limit: 10,
  //       });
  //     }
  //     res.send(products);
  //   } catch (err) {
  //     res.status(500).send({
  //       error: "An error has occured trying to fetch the products",
  //     });
  //   }
  // },

  // async show(req, res) {
  //   try {
  //     const product = await Song.findByPk(req.params.songId);
  //     res.send(product);
  //   } catch (err) {
  //     res.status(500).send({
  //       error: "An error has occured trying to fetch a product",
  //     });
  //   }
  // },

  async put(req, res) {
    try {
      const usergroup = await UserGroup.update(req.body, {
        where: {
          id: req.params.groupId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to update the user group",
      });
    }
  },

  async post(req, res) {
    try {
      const usergroup = await UserGroup.create(req.body);
      res.send(usergroup);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create a user group",
      });
    }
  },

  async delete(req, res) {
    try {
      const usergroup = await UserGroup.findByPk(req.params.groupId);
      if (!usergroup) {
        res.status(500).send({
          error: "An error has occured trying to delete the user group",
        });
      }
      usergroup.destroy();
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to delete the user group",
      });
    }
  },
};
