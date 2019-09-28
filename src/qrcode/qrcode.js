const qrcode = require('qrcode');

const speakeasy = require('./speakeasy');

const generateQrCode = async () => {
  return await qrcode.toDataURL(speakeasy.secret.otpauth_url);
};

const verifyUserToken = userToken => {
  const result = speakeasy.verifyUserToken(userToken);
  return result;
};

module.exports = { generateQrCode, verifyUserToken }