const Userservice = require('../services/user-service')
const userservice = new Userservice();
const create = async (req, res) => {
    try {
        const response = await userservice.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully created new user',
            err : {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'something went wrong',
            success: false,
            err: error
        })
    }
}

module.exports = {
    create
}