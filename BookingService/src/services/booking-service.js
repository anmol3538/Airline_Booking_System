const {BookingRepository} = require('../repository/index');
const axios = require('axios');
const {FLIGHT_SERVICE_PATH} = require('../config/serverconfig');
const { ServiceError } = require('../utils/errors/index');
class BookingService {
    constructor() {
        this.bookingrepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightid = data.flightid;
            let getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightid}`;
            const flight =  await axios.get(getFlightRequestURL);
            let flightdata = flight.data.data;
            let flightprice = flightdata.price;
            if(data.seats > flightdata.totalseats) {
                throw new ServiceError('Something went wrong in booking process', 'Seats are insuffiecient');
            }
            const totalcost = flightprice * data.seats;
            const bookingpayload = {...data, totalcost};
            const booking = await this.bookingrepository.create(bookingpayload);
            const updateFlightrequesturl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightid}`
            await axios.patch(updateFlightrequesturl, {totalseats: flightdata.totalseats - data.seats});
            const finalbooking = await this.bookingrepository.update(data.flightid, {status:"Booked"});
            return finalbooking;
        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError();
        }
    }
}

module.exports = BookingService