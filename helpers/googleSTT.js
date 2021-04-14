require('dotenv').config({ path: '../.env.local' });
const _ = require('lodash');
const speech = require('@google-cloud/speech');
const {Storage} = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');
const File = require('../models/File');

const googleSTT = (res, file) => {

  const speechClient = new speech.SpeechClient();

  const bucketName = 's2text-bucket';

  const uploadToGcs = async () => {
    const storage = new Storage();

    const bucket = storage.bucket(bucketName);
    const fileName = path.basename(file.path);

    await bucket.upload(file.path);
    return `gs://${bucketName}/${fileName}`;
  };

  uploadToGcs()
    .then(async (gcsUri) => {
      const audio = {
        uri: gcsUri,
      };

      const config = {
        encoding: 'mp3',
        sampleRateHertz: 24000,
        languageCode: 'tr-TR',
        enableAutomaticPunctuation: true,
      };

      const request = {
        audio,
        config,
      };

      speechClient.longRunningRecognize(request)
        .then((data) => {
          const operation = data[0];

          return operation.promise();
        })
        .then((data) => {
          const results = _.get(data[0], 'results', []);
          const transcription = results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
          console.log(`Transcription: ${transcription}`);
          //HERE
          File.updateOne({_id: file._id}, {transcript: transcription}, (err) => {
              if (err) res.status(500).json(err);
              else res.status(200).json({message: 'File transcripted'});
          });
        
        })
    })
    .catch(err => { 
      console.error('ERROR:', err);
    });
};
  
module.exports = googleSTT;