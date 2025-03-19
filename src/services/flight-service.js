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
}

module.exports = FlightService