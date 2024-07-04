require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/route');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/user',Router);
console.log("I am here");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})