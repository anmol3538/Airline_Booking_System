const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require("./config/serverconfig");
const apiroutes = require('./routes/index')
// const db = require('./models/index');
// const sequelize = require('sequelize');
// const city = require('./models/city');
const {Airport, City} = require('./models/index')
const {Airplane} = require('./models/index')
const setupandstartserver = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}))
    app.use('/api', apiroutes);
    app.listen(PORT ,async ()=> {
        console.log(`Server started at ${PORT}`);
        // const airports = await Airport.findAll();
        // console.log(airports);
        //db.sequelize.sync({alter : true})
        // const city = await City.findOne({
        //     where: {
        //         id : 13
        //     }
        // })
        // const airport = await city.getAirports();
        // console.log(airport);
        // await Airplane.create({
        //     modelNumber: 'Bombardier CRJ',
        // })
    })
} 

setupandstartserver();