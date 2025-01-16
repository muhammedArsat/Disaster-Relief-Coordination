const mongoose = require('mongoose');

const databaseConnectivity = () => {
    mongoose.connect(process.env.DATABASE_URL).then((con) => {
        console.log('Database connected Successfully in', con.connection.host);
    });
};

module.exports = databaseConnectivity;
