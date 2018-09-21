const store = require('./store'),
    config = require('./config');

module.exports = () => {
    for (let key in store.users) {
        if (store.users[key].date < new Date().getTime() - (config.timer - 10)) {
            config.userStop(store.users[key].data);
            store.users.splice(key, 1);
        }
    }
};