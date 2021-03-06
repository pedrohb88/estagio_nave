const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const {Model} = require('objection');

Model.knex(knex);

function migrate() {
	knex.migrate
		.latest({
			directory: `${__dirname}/migrations`,
		})
		.then(([batchNo, log]) => {
			if (!log.length) {
				console.info("Database is already up to date");
			} else {
				console.info("Ran migrations: " + log.join(", "));
			}
		});
}

module.exports = { knex, migrate };
