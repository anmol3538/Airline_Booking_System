const express = require('express')
const app = express();
const {PORT, FLIGHT_SERVICE_PATH} = require('./config/serverconfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./Routes/index');
const db = require('./models/index');
const appandstartserver = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server started at PORT ${PORT}`);
        console.log(FLIGHT_SERVICE_PATH);
    })
    if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true});
    }
    
}

appandstartserver();