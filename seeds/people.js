
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'James', basketball: false, photography: true, dancing: true, writing: true, hiking: true, racing: false, gaming: false, geocaching: false, scrapbooking: false},
        
        {id: 2, name: 'John', basketball: true, photography: false, dancing: true, writing: false, hiking: true, racing: false, gaming: false, geocaching: false, scrapbooking: true},
        
        {id: 3, name: 'Jack', basketball: true, photography: false, dancing: false, writing: false, hiking: true, racing: true, gaming: false, geocaching: false, scrapbooking: false},
        
        {id: 4, name: 'Jackie', basketball: false, photography: true, dancing: false, writing: true, hiking: true, racing: true, gaming: true, geocaching: false, scrapbooking: false},
        
        {id: 5, name: 'Jasmin', basketball: false, photography: false, dancing: true, writing: true, hiking: true, racing: true, gaming: false, geocaching: false, scrapbooking: false},
        
        {id: 6, name: 'Jacinda', basketball: false, photography: true, dancing: true, writing: true, hiking: true, racing: true, gaming: true, geocaching: false, scrapbooking: false},
        
        {id: 7, name: 'Jane', basketball: false, photography: true, dancing: true, writing: true, hiking: true, racing: true, gaming: false, geocaching: false, scrapbooking: false},
        
        {id: 8, name: 'Jamie', basketball: false, photography: true, dancing: true, writing: true, hiking: true, racing: true, gaming: false, geocaching: false, scrapbooking: false},
        
        {id: 9, name: 'Jolean', basketball: false, photography: false, dancing: false, writing: false, hiking: true, racing: true, gaming: true, geocaching: true, scrapbooking: true},
      ]);
    });
};
