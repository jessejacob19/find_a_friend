
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interest').del()
    .then(function () {
      // Inserts seed entries
      return knex('interest').insert([
        {id: 1, interest: 'basketball', image: '../public/images/basketball.jpg'},
        {id: 2, interest: 'photography', image: '../public/images/dancing.jpg'},
        {id: 3, interest: 'dancing', image: '../public/images/gaming.jpg'},
        {id: 4, interest: 'writing', image: '../public/images/geocaching.jpg'},
        {id: 5, interest: 'hiking', image: '../public/images/hiking.jpg'},
        {id: 6, interest: 'racing', image: '../public/images/photography.jpg'},
        {id: 7, interest: 'gaming', image: '../public/images/racing.jpg'},
        {id: 8, interest: 'geocaching', image: '../public/images/scrapbooking.jpg'},
        {id: 9, interest: 'scrapbooking', image: '../public/images/writing.jpg'}
      ]);
    });
};
