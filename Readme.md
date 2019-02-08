# Firebase example

This project uses firestore functions and Cloud Firestore.

## Requirements

Install firebase tools: `npm install -g firebase-tools`

## How to

This project deploy a function into firebase with command `firebase deploy --only functions`. The function enable a endpoint with the form `https://us-central1-<PROJECT>.cloudfunctions.net/addMessage`. Calling the endpoint with a querystring `text` will trigger the function and add the text to Cloud Firestore.

Running `node firebase-example.js` will retrieve the collection _user_.
