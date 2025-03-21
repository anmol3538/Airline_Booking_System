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
        return res.status(error.statuscode).json({
            data: {},
            message: 'something went wrong',
            success: false,
            err: error
        })
    }
}

const signin = async (req, res) => {
    try{
        const response = await userservice.signin(req.body.email, req.body.password);
        return res.status(200).json({  
            message: 'Successfully signed in',
            data: response,  
            success: true,
            err: {}
        });
    }
    catch (error){
        // console.log(error);
        return res.status(error.statuscode).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        })
    }
}

const isAuthenticate = async(req, res) => {
    try{
        const token = req.headers['x-access-token'];
        const response = await userservice.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'User is authenticated'
        })
    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

const isAdmin = async (req, res) => {
    try {
        const response = await userservice.isAdmin(req.body.id);
        return res.status(200).json({
            data: response,
            err: {},
            success: true,
            message: 'User is admin'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.statuscode).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}
module.exports = {
    create,
    signin,
    isAuthenticate, 
    isAdmin
}