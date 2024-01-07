'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dons', 'typedons', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon votre besoin
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('dons', 'typedons');
  }
};
