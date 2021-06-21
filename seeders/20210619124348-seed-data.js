module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('bugs', [{
      problem: 'Crashes on POST request',
      error_text: "Cannot set property 'fill' on NULL",
      commit: '83473S',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      problem: 'Crashes GET request',
      error_text: 'Cannot read property of undefined',
      commit: '98473c',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      problem: 'Crashes on render',
      error_text: "TypeError: 'undefined' is not an object",
      commit: '54073a',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      problem: 'Crashes on POST request',
      error_text: 'ERROR: database "bugs_development" does not exist',
      commit: '11373p',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bugs', null, {});
  },
};
