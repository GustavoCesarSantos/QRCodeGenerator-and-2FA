const redis = require('redis');

const qrcode = require('./qrcode');

const cache = redis.createClient();

const generateQrCode = async (req, res) => {
  const token = await qrcode.getToken();
  cache.set("token", JSON.stringify(token));
  console.log('Token setado no cache');

  const imageCode = await qrcode.generateQrCode();
  res.send(`<img src="${imageCode}">`);
};

const verifyUserToken = (req,res) => {
  cache.get("token", async (error, reply) => {
    if(reply){
      const token = JSON.parse(reply);
      const userToken = req.body.token;
      const result = await qrcode.verifyUserToken(token, userToken);
      console.log('Token verificado no cache');

      if(result){
        cache.del("token");
        console.log('Usuario autenticado e token desabilitado');
        res.status(200).json({ status: 'autenticado' });
      }else{
        res.status(200).json({ status: 'token invalido' });
      }
    }else {
      res.status(500).json({ status: 'Não existe token setado' })
    }
  });
};

module.exports = { generateQrCode, verifyUserToken }