const store = require('./store'),
    update = require('./update');

module.exports = (token) => {
    update();

    for (let key in store.users) {
        if (store.users[key].token === token) {
            store.users[key].date = new Date().getTime();
            return store.users[key].data;
        }
    }

    return null;
};