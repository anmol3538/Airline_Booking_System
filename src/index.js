const express = require('express');
const {PORT} = require("./config/serverconfig")
const setupandstartserver = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
} 

setupandstartserver();