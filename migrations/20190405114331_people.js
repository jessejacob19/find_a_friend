
exports.up = function(knex, Promise) {
    return knex.schema.createTable('people', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.boolean('basketball').defaultTo(false)
        table.boolean('photography').defaultTo(false)
        table.boolean('dancing').defaultTo(false)
        table.boolean('writing').defaultTo(false)
        table.boolean('hiking').defaultTo(false)
        table.boolean('racing').defaultTo(false)
        table.boolean('gaming').defaultTo(false)
        table.boolean('geocaching').defaultTo(false)
        table.boolean('scrapbooking').defaultTo(false)   
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('people')
};
