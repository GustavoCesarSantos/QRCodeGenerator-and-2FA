const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ length: 25 });

const verifyUserToken = userToken => {
  const result = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token: userToken,
  });

  return result;
};

module.exports = { secret, verifyUserToken }