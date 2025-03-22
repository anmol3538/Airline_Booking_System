const {FlightRepository,AirplaneRepository} = require('../repository/index')
const {compareTime}  =  require('../utils/helper')
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{
            if(!compareTime(data.arrivaltime, data.departuretime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneid);
            
            const flight = await this.flightRepository.createFlight({...data, totalseats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log("error in flight repository");
            throw {error};
        }
    }

    async getallflightdata (data){
        try{
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        }
        catch(error){
            console.log("error in flight service");
            console.log(error);
            throw {error};
        }
    }

    async getflight(flightid){
        try {
            const flight = await this.flightRepository.getFlight(flightid);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async update(flightid, data) {
        try {
            const response =  await this.flightRepository.update(flightid, data);
            return response;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }
}

module.exports = FlightService