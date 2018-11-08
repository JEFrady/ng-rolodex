
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('user_id').primary();
        table.string('username', 100).notNullable();
        table.string('password', 100).notNullable();
        table.string('name', 100).notNullable();
        table.string('email', 320).notNullable();
        table.string('address', 200);
        table.timestamps(true, true);
      })
      .createTable('contacts', table => {
        table.increments('contact_id').primary();
        table.string('name', 100).notNullable();
        table.string('address', 200);
        table.string('primary_phone', 20);
        table.string('alt_phone', 20);
        table.string('email', 320);
        table.string('twitter', 16);
        table.string('instagram', 31);
        table.string('github', 40);
        table.integer('created_by').references('user_id').inTable('users').onDelete('cascade');
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts')
    .dropTable('users')
};
