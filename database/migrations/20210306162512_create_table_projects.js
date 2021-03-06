exports.up = (knex) =>
	knex.schema.createTable("projects", (table) => {
		table.uuid("id").primary().defaultTo(knex.raw('(UUID())'));
		table.string("name").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});

exports.down = (knex) => knex.schame.dropTable("projects");

