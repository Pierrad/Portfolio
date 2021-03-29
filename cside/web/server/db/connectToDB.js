const pgp = require('pg-promise')();
// SSL for Heroku
let ssl = null;
if (process.env.NODE_ENV === 'development') {
   ssl = {rejectUnauthorized: false};
}
// Get these values from configuration
const user = process.env.HEROKU_DB_USER || process.env.DB_USER
const password = process.env.HEROKU_DB_PASS || process.env.DB_PASS
const host = process.env.HEROKU_DB_HOST || process.env.DB_HOST
const port = process.env.HEROKU_DB_PORT|| process.env.DB_PORT || '5432'
const database = process.env.HEROKU_DB_NAME || process.env.DB_NAME

// Use a symbol to store a global instance of a connection, and to access it from the singleton.
const DB_KEY = Symbol.for("MyApp.db");
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = (globalSymbols.indexOf(DB_KEY) > -1);
if (!hasDb) {
    const config = {
        connectionString: `postgres://${user}:${password}@${host}:${port}/${database}`,
        max: 30,
        ssl:ssl
    };
    global[DB_KEY] = pgp(config)
}

// Create and freeze the singleton object so that it has an instance property.
const singleton = {};
Object.defineProperty(singleton, "instance", {
    get: function () {
        return global[DB_KEY];
    }
});
Object.freeze(singleton);

export default singleton;