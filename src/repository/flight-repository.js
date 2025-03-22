const {Flights} = require('../models/index');
const {Op} = require('sequelize');
class FlightRepository {

    #createfilter(data){
        let filter = {}
        if(data.arrivaltime){
            filter.arrivaltime = data.arrivaltime
        }
        if(data.departuretime){
            filter.departuretime = data.departuretime
        }
        if(data.minprice){
            Object.assign(filter, {price: {[Op.gte]:data.minprice}})
        }
        if(data.maxprice && data.minprice){
            Object.assign(filter, {
                [Op.and] : [
                    {price: {[Op.lte] : data.maxprice}},
                    {price: {[Op.gte] : data.minprice}}
                ]
            })
        }
        if(data.maxprice){
            Object.assign(filter, {price: {[Op.lte]:data.maxprice}})
        }
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("error in flight repository");
            console.log(error);
            throw {error};
        }
    }
    async getFlight(flightid){
        try{
            const flight = await Flights.findByPk(flightid);
            return flight;
        }
        catch(error){
            console.log("error in flight repository");
            console.log(error);
            throw {error};
        }
    }
    async getAllFlight(filter){
        try{
            const filterobject = this.#createfilter(filter);
            const flight = await Flights.findAll({
                where: filterobject
            });
            return flight;
        }
        catch(error){
            console.log("error in flight repository");
            console.log(error);
            throw {error};
        }
    }

    async update(flightid, data) {
        try {
            await Flights.update(data, {
                where : {
                    id: flightid
                }
            })
            return true;
        } catch (error) {
            console.log("error in flight repository");
            console.log(error);
            throw {error};
        }
    }
}

module.exports = FlightRepository;