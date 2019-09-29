const speakeasy = require('speakeasy');

const token = speakeasy.generateSecret({ length: 25 });

const getToken = () => {
  return token;
};

const verifyUserToken = async (token, userToken) => {
  const result = await speakeasy.totp.verify({
    secret: token.base32,
    encoding: 'base32',
    token: userToken,
  });

  return result;
};

module.exports = { getToken, verifyUserToken }