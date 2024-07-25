// firebaseConfig.js
const admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccount");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };
