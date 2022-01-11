const express = require('express');
require('dotenv').config();
const app = express();
const sequelize = require('./connection/database');

const router = require('./routes/Router')
app.use(express.json());

app.use('/', router);






const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on Port: ${PORT}`);
    });

})

