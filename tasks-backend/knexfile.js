// Update with your config settings.

module.exports = {  
	client: 'postgresql',
	connection: {
		port: '5433',
		database: 'tasks',
		user:     'postgres',
		password: 'dgcs9922'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
  

};
