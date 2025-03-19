const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightnumber ||
        !req.body.airplaneid ||
        !req.body.departureAirportid ||
        !req.body.arrivalAirportid ||
        !req.body.arrivaltime ||
        !req.body.departuretime ||
        !req.body.price
    ) {
        return res.status(400).json({ 
            message: "Please fill in all fields",
            data: {},
            error: "Missing required fields",
            success: false
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}