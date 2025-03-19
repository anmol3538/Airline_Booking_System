const express = require('express');
const { PORT } = require('./config/serverConfig')
const app = express();

const prepareandstartserver = () => {
    app.listen(PORT, () => {
        console.log('server started at port 3001')
    });
}

prepareandstartserver();