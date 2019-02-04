const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.

  return db
    .collection("messages")
    .add({
      original: original
    })
    .then(snapshot => {
      return res.send(`message ${snapshot} added`);
    });
});
