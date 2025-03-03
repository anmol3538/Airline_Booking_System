const dotenv = require('dotenv');
const path = require('path');


dotenv.config();

console.log("PORT:", process.env.PORT);

module.exports = {
    PORT: process.env.PORT
};
