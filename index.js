require('dotenv').config()

const express = require('express');
const sequelize = require('./db');
const models = require('./src/models/models');
const cors = require('cors');
const router = require('./src/routes/index');
const PORT = process.env.PORT || 5000;
const errorHandler = require('./src/middleware/ErrorHandlingMiddleware')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`hello ${PORT}`))
    }catch(e) {
        console.log(e)
    }
}

start()