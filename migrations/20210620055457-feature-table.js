module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('features', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: Sequelize.TEXT,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
