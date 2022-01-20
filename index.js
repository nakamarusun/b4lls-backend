const {Storage} = require('@google-cloud/storage');
const express = require("express");
const app = new express();


const storage = new Storage({
  keyFilename: !process.env.GOOGLE_APPLICATION_CREDENTIALS ?
  "./b4lls-game-firebase-adminsdk-dh5qk-5177e532eb.json":
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

let bucketName = "b4lls-cloud";

app.get('/', async (req, res) => {

  const [files] = await storage.bucket(bucketName).getFiles();
  console.log('Files:');
  const urlList = []
  files.forEach(file => {
    urlList.push(file.publicUrl());
  });

  res.send({
    url: urlList
  })
})

app.listen(process.env.PORT||4000, () => console.log("The server is running at PORT 4000"));