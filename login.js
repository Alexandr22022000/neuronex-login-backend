const FirebaseTokenGenerator = require('firebase-token-generator'),
    update = require('./update'),
    store = require('./store'),
    config = require('./config'),
    tokenGenerator = new FirebaseTokenGenerator(config.tokenSecret);

module.exports = (login, password) => {
    update();

    return new Promise((resolve, reject) => {
        config.checkUser(login, password)
            .then((res) => {
                if (!res.isUser) return resolve(null);

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

                resolve(token, res.data);
            });
    });
};