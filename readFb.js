// queryData.js
const { db } = require("./firebaseAuthen/authFirestore");

async function queryData() {
  try {
    const querySnapshot = await db
      .collection("mydb")
      .orderBy("timestamp", "asc")
      .get();

    const documents = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ampare: data.ampare,
        voltage: data.voltage,
        timestamp: data.timestamp.toDate(), // Convert Firestore Timestamp to Date
      };
    });

    console.log("Ordered documents by timestamp desc:", documents);
  } catch (error) {
    console.error("Error querying documents:", error);
  }
}

queryData();
