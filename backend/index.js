const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { dbConnection } = require('./db');
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.listen(port, () => {

    dbConnection()
  console.log(`Server is running on port ${port}`);
})