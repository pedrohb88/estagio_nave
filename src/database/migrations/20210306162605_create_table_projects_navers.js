exports.up = (knex) =>
	knex.schema.createTable("projects_navers", (table) => {
        table.increments('id');
        table.uuid('project_id');
        table.uuid('naver_id');

		table.foreign('project_id').references('projects.id');
        table.foreign('naver_id').references('navers.id');
	});

exports.down = (knex) => knex.schame.dropTable("projects_navers");

