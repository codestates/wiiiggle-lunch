"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `alter table photos add constraint photos_ibfk_2 foreign key(posts_id) references posts (id) on delete cascade`
    );
  },

  down: (queryInterface, Sequelize) => {
    return "";
  },
};
