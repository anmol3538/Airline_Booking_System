const {Usermodel, Role} = require('../models/index')
const ValidationError = require('../utils/validation-error')
const ClientError = require('../utils/client-error')
const {StatusCodes} = require('http-status-codes');
class UserRepository {

    async create(data) {
        try{
            const user = await Usermodel.create(data);
            return user;
        }
        catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            console.log("something wrong at repository layer")
            throw {error}
        }
    }

    async destroy(userid){
        try{
            Usermodel.destroy({
                where : {
                    id : userid
                }
            })
            return true;
        }
        catch (error) {
            console.log("something wrong at repository layer")
            throw {error}
        }
    }

    async getbyid(userid) {
        try{
            const user = await Usermodel.findByPk(userid, {
                attributes: ['email', 'id']
            });
            return user;
        }
        catch (error) {
            console.log("something wrong at repository layer")
            throw {error}
        }
    }

    async getbyemail(usermail){
        try{
            const user = await Usermodel.findOne({
                where: {
                    email: usermail
                }
            })
            if(!user){
                throw new ClientError(
                    'AttributesNotfound',
                    'Invalid email sent in the request',
                    'Please check the email, as there is no record of email',
                    StatusCodes.NOT_FOUND
                )
            }
            return user;
        }
        catch(error){
            console.log(error);
            console.log('something wrong in repository layer');
            throw {error}
        }
    }

    async isAdmin(userid){
        try {
            const user = await Usermodel.findByPk(userid);
            const adminrole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            })
            return user.hasRole(adminrole);
        } catch (error) {
            console.log(error);
            console.log('something wrong in repository layer');
            throw {error}
        }
    }
}

module.exports = UserRepository