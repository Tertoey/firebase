// var admin = require("firebase-admin");
// var serviceAccount = require("./firebaseAuthen/firefly-6c3fa-firebase-adminsdk-ip7y1-7bef70e867.json");
const { db } = require("./firebaseAuthen/authen");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = 8081;

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL:
//     "https://firefly-6c3fa-default-rtdb.asia-southeast1.firebasedatabase.app",
// });
// const db = admin.database();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post("/pwm", async (req, res) => {
  try {
    await db.ref("/Data").set({
      ampare: req.body.ampare,
      voltage: req.body.voltage,
    });
    res.status(200).send({ message: "Data written successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Failed to write data", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is ruuning on ${port}`);
});
