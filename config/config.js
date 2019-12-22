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
    "use_env_variable": "DATABASE_URL",
    "dialect": "mysql"
   }

};
