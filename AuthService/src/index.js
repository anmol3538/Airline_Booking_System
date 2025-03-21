const express = require('express');
const { PORT , DB_SYNC} = require('./config/serverConfig')
const bodyparser = require('body-parser')
const app = express();
const apiroutes = require('./Routes/index')
const {Usermodel, Role} = require('./models/index');
const db = require('./models');


const prepareandstartserver = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}))
    app.use('/api',apiroutes);
    app.listen(PORT, async () => {
        console.log('server started at port 3001')
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        // const u1 = await Usermodel.findByPk(2);
        // const r1 = await Role.findByPk(5);
        // console.log(u1,r1);
        // u1.addRole(r1);
        

    });
}

prepareandstartserver();
