const FirebaseTokenGenerator = require('firebase-token-generator'),
    update = require('./update'),
    store = require('./store'),
    config = require('./config'),
    tokenGenerator = new FirebaseTokenGenerator(config.tokenSecret);

module.exports = (login, password) => {
    update();

    const res = config.checkUser(login, password);

    if (!res.isUser) return null;

    const token = tokenGenerator.createToken({
        uid: config.tokenUid,
        some: config.tokenData,
        data: new Date().getTime()
    });

    store.users.push({
        token,
        data: res.data,
        date: new Date().getTime(),
    });

    return token;
};