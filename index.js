const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello fellow humans from an dockerized app')
});

app.listen( port, () => {
    console.log(`The engine is running at ${port}`);
});