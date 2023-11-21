const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoute= require('./src/routes/user');


app.use('/u', userRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});