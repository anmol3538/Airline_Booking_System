const {FlightService}  = require('../services/index');

const flightservice = new FlightService();

const create =  async (req, res) => {
    try{
        const flight =  await flightservice.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Flight created successfully'
        })
    }
    catch(error){
        console.log("error in flight controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req,res) => {
    try{
        const flight =  await flightservice.getallflightdata(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Flight created successfully'
        })
    }
    catch(error){
        console.log("error in flight controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch a flight",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}