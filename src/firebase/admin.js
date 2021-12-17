const firebase = require("firebase-admin");

const credentials = require("../../b4lls-game-firebase-adminsdk-dh5qk-5177e532eb.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://b4lls-game.firebaseio.com",
});

module.exports = firebase;