const UserRepository = require('../repository/user-repository')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../config/serverConfig')
const bcrypt = require('bcrypt')

class UserService {
    constructor() {
        this.userrepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userrepository.create(data);
            return user;
        }
        catch(error){
            console.log('something wrong at service layer');
            throw {error}
        }
    }

    async signin(email, password) {
            try{
                const user = await this.userrepository.getbyemail(email);
                const passwordmatch = this.checkpassword(password, user.password);
                if(!passwordmatch){
                    console.log('password doesnot match');
                    throw{error: 'Incorrect Password'};
                }
                const newjwt = this.createtoken({email:user.email, id: user.id});
                return newjwt;
            }
            catch(error){
                console.log('something went wrong in signin');
                throw {error}
            }
    }

    createtoken(user){
        try{
            const token = jwt.sign(user, JWT_KEY, { expiresIn: '1h'})
            return token;
        }
        catch (error){
            console.log('something wrong at token layer');
            throw {error};
        }
    }

    verifytoken(token){
        try{
            const response = jwt.verify(token, JWT_KEY);
            return response;
        }
        catch (error) {
            console.log('something wrong at token layer');
            throw {error};
        }
    }

    checkpassword(userinputpassword, encryptedpassword) {
        try{
            return bcrypt.compareSync(userinputpassword, encryptedpassword)
        }
        catch(error){
            console.log('something wrong at passwordcheck layer');
            throw {error};
        }
    }
}

module.exports = UserService