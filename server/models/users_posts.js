'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_posts.init({
    users_id: DataTypes.INTEGER,
    posts_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_posts',
  });
  return users_posts;
};