const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id){
        try{
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }
        catch (error){
            console.log("something get wrong in airplane-repository layer");
            console.log(error);
        }
    }
}

module.exports = AirplaneRepository