module.exports = {

  "development": {
    "username": "root",
    "password": "root",
    "database": "burgers_DB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }

}
// module.exports =
// {
//   // "development": {
//   //   "username": process.env.MYSQL_USERNAME,
//   //   "password": process.env.MYSQL_PASSWORD,
//   //   "database": process.env.MYSQL_DB,
//   //   "host": process.env.MYSQL_HOST,
//   //   "dialect": "mysql",
//   //   "operatorsAliases": false
//   // },
//   "development": {
//     "username": "root",
//     "password": "root"
//     "database": "burgers.DB"
//     "host": 
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//    "use_env_variable": "JAWSDB_URL",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
