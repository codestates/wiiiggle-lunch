"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.photos.belongsTo(models.users, {
        foreignKey: "users_id",
      });
      models.photos.belongsTo(models.posts, {
        foreignKey: "posts_id",
        onDelete: "cascade",
      });
    }
  }
  photos.init(
    {
      src: DataTypes.STRING,
      users_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "photos",
    }
  );
  return photos;
};
