const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'lQxiCBzusxvdILmGKTtG8eAMtNBNUC4zhGrolgge-iMv',
  }),
  url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/4f374b38-2199-4e26-81e9-31b0cfd7ebb3/',
});

function BuscarAudio(text) {

  return textToSpeech.synthesize({
    text: text,
    voice: 'pt-BR_IsabelaV3Voice',
    accept: 'audio/wav'
  })

}

module.exports = {textToSpeech, BuscarAudio }