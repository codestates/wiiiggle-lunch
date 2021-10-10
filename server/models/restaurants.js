"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.restaurants.hasMany(models.posts, {
        foreignKey: "restaurants_id",
      });
    }
  }
  restaurants.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,

      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "restaurants",
    }
  );
  return restaurants;
};
