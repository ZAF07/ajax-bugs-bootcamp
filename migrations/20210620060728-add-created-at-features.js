module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('features', 'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false,
      });
    await queryInterface.addColumn('features', 'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('created_at', 'updated_at');
  },
};
