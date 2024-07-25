var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccount");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://firefly-6c3fa-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const db = admin.database();

module.exports = { db };
