const express = require('express');
const app = express();
app.use(express.json())
const data = require('./UserData.json');
const port = 5000

app.get('/', (req, res) => {
    res.send(req);
});



//const port = process.env.PORT || 3000;
console.log(` app is listening on port ${port}`)