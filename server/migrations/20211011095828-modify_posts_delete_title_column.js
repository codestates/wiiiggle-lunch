"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `alter table posts drop column title`
    );
  },

  down: (queryInterface, Sequelize) => {
    return "";
  },
};
