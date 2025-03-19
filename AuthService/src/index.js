const express = require('express');
const { PORT } = require('./config/serverConfig')
const bodyparser = require('body-parser')
const app = express();
const apiroutes = require('./Routes/index')
const prepareandstartserver = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}))
    app.use('/api',apiroutes);
    app.listen(PORT, () => {
        console.log('server started at port 3001')
    });
}

prepareandstartserver();