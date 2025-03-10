const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require("./config/serverconfig");
const apiroutes = require('./routes/index')
const setupandstartserver = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}))
    app.use('/api', apiroutes);
    app.listen(PORT ,()=> {
        console.log(`Server started at ${PORT}`);

    })
} 

setupandstartserver();