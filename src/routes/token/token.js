const urls = require('../../helpers/constantes/urls');
const tokeController = require('../../qrcode/tokenController');

module.exports = app => {
  app.route(urls.TOKEN)
    .get(tokeController.generateQrCode)
    .post(tokeController.verifyUserToken)
}