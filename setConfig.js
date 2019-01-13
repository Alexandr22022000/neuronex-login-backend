const config = require('./config');

module.exports = (checkUser, tokenSecret, tokenData, tokenUid, timer, userStop) => {
    config.checkUser = checkUser;

    if (timer !== undefined) config.timer = timer;
    if (tokenSecret !== undefined) config.tokenSecret = tokenSecret;
    if (tokenData !== undefined) config.tokenData = tokenData;
    if (tokenUid !== undefined) config.tokenUid = tokenUid;
    if (userStop !== undefined) config.userStop = userStop;
};