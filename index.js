const setConfig = require('./setConfig'),
    login = require('./login'),
    checkUser = require('./checkUser'),
    store = require('./store');

module.exports = {
    setConfig,
    login,
    checkUser,
    users: store.users,
};