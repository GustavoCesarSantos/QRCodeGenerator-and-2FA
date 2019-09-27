const fs = require('fs');
const qrcode = require('qrcode');

const secret = require('./speakeasy');

qrcode.toDataURL(secret.otpauth_url, (error, url) => {
  console.log('QRCODE: ', url);
});

