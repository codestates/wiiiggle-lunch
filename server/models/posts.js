"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.posts.belongsToMany(models.users, {
        through: "users_posts",
      });
      models.posts.hasMany(models.photos, {
        foreignKey: "posts_id",
      });
      models.posts.belongsTo(models.users, {
        foreignKey: "users_id",
      });
      models.posts.belongsTo(models.restaurants, {
        foreignKey: "restaurants_id",
      });
    }
  }
  posts.init(
    {
      tmi: DataTypes.STRING,
      menu: DataTypes.STRING,
      score: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER,
      restaurants_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
