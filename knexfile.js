module.exports = {
	development: {
		client: "pg",
		connection: {
			host: process.env.PG_HOST,
			user: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DATABASE,
			ssl: true,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/database/migrations`
		},
		pool: {
			afterCreate: function (conn, done) {
				console.log("Database successfully connected");
				done();
			},
		},
	},
};
