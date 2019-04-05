
exports.up = function(knex, Promise) {
    return knex.schema.createTable('interest',(table) => {
        table.increments('id').primary()
        table.string('interest')
        table.string('image')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interest')
};
