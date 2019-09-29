const qrcode = require('qrcode');

const speakeasy = require('./speakeasy');

const getToken = async () => {
  return await speakeasy.getToken();
};

const generateQrCode = async () => {
  return await qrcode.toDataURL(speakeasy.getToken().otpauth_url);
};

const verifyUserToken = async (token, userToken) => {
  return await speakeasy.verifyUserToken(token, userToken);
};

module.exports = { getToken, generateQrCode, verifyUserToken }