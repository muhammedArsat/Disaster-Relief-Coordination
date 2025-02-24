const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const databaseConnectivity = require('./config/DatabaseConfiguration');
const cors = require('cors');

const volunteerRoutes = require("./routes/VolunteerRoutes");
const postRoutes = require("./routes/PostRoutes");

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
databaseConnectivity();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.use("/api/v1",volunteerRoutes,postRoutes);
app.listen(process.env.PORT, () => {
    console.log(
        `server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`
    );
});
