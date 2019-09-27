const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ length: 25 });

module.exports = secret;