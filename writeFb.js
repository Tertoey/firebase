// writeData.js
const { db } = require("./firebaseAuthen/authFirestore");
const admin = require("firebase-admin");

async function writeData() {
  try {
    const docRef = db.collection("mydb");
    await docRef.add({
      ampare: 14.25, // example value, replace with actual data
      voltage: 221.2, // example value, replace with actual data
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Document written successfully");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

writeData();
