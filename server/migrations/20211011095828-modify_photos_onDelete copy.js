"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `alter table photos add constraint photos_ibfk_1 foreign key(users_id) references users (id) on delete cascade`
    );
  },

  down: (queryInterface, Sequelize) => {
    return "";
  },
};
