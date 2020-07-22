const db = require('./database')
const watson = require('./watson')
const fs = require('fs');
const { Howl, Howler } = require('howler');
var arquivo = 0;

module.exports = (app) => {

    app.get('/', function (req, resp) {
        db.Comentarios.findAll().then((resultado) => {
            resp.marko(
                require('../app/index.marko'),
                { comentarios: resultado }
            )
        })
    });

    app.post('/cadastro', function (req, resp) {
        db.Comentarios.create(req.body).then(resp.sendStatus(200));
    })

    app.post('/watson', function (req, resp) {
        watson.BuscarAudio(req.body.text)
            .then(response => {
                return watson.textToSpeech.repairWavHeaderStream(response.result);
            })
            .then(buffer => {
                arquivo++;
                fs.writeFileSync('src/app/public/audio' + arquivo + '.wav', buffer)
                if (arquivo - 1 > 0) {
                    fs.unlinkSync('src/app/public/audio' + (arquivo - 1) + '.wav')

                }
                resp.send(arquivo.toString())
            })
            .catch(err => {
                console.log('error:', err);
            })
    })

}