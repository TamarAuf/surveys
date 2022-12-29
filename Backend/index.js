const express = require('express');
const app = express();
const data = require('./UserData.json');

app.get('/', (req, res) => {
    res.send(req);
});



//const port = process.env.PORT || 3000;
app.listen(5000, () => console.log(`Listening on port 5000`));