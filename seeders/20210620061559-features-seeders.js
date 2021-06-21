module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('features', [
      {
        name: 'Navbar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Submit Button',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Form',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Header',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Footer',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
