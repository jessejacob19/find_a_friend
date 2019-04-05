
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interest').del()
    .then(function () {
      // Inserts seed entries
      return knex('interest').insert([
        {id: 1, interest: 'basketball', image: '/basketball.jpg'},
        {id: 2, interest: 'photography', image: '/dancing.jpg'},
        {id: 3, interest: 'dancing', image: '/gaming.jpg'},
        {id: 4, interest: 'writing', image: '/geocaching.jpg'},
        {id: 5, interest: 'hiking', image: '/hiking.jpg'},
        {id: 6, interest: 'racing', image: '/photography.jpg'},
        {id: 7, interest: 'gaming', image: '/racing.jpg'},
        {id: 8, interest: 'geocaching', image: '/scrapbooking.jpg'},
        {id: 9, interest: 'scrapbooking', image: '/writing.jpg'}
      ]);
    });
};
