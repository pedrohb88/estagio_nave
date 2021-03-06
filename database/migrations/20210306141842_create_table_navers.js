exports.up = (knex) =>
	knex.schema.createTable("navers", (table) => {
		table.uuid("id").primary().defaultTo(knex.raw('(gen_random_uuid ())'));
		table.string("name").notNullable();
		table.string("job_role").notNullable();
		table.date("birthdate").notNullable();
		table.date("admission_date").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});

exports.down = (knex) => knex.schame.dropTable("navers");

