module.exports = {
	development: {
		client: "mysql",
		connection: {
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
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
