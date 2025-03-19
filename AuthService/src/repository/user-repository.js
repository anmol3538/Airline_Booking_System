const {usermodel} = require('../models/index')

class UserRepository {

    async create(data) {
        try{
            const user = await usermodel.create(data);
            return user;
        }
        catch (error) {
            console.log("something wrong at repository layer")
            throw {error}
        }
    }

    async destroy(userid){
        try{
            usermodel.destroy({
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
}

module.exports = UserRepository