const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes= require('./src/routes/users');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});