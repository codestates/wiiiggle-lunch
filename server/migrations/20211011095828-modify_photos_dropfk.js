"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `alter table photos drop constraint photos_ibfk_1`
    );
  },

  down: (queryInterface, Sequelize) => {
    return "";
  },
};
