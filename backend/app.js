const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const databaseConnectivity = require('./config/DatabaseConfiguration');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
databaseConnectivity();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(
        `server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`
    );
});
