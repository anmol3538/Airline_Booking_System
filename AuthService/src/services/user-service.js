const UserRepository = require('../repository/user-repository')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../config/serverConfig')
const bcrypt = require('bcrypt');
const { response } = require('express');

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
            if(error.name == 'SequelizeValidationError'){
                throw error;
            }
            console.log('something wrong at service layer');
            throw {error}
        }
    }

    async signin(email, password) {
            try{
                const user = await this.userrepository.getbyemail(email);
                if(!user){
                    throw error;
                }
                const passwordmatch = await this.checkpassword(password, user.password);
        
                if(!passwordmatch){
                    console.log('password doesnot match');
                    throw{error: 'Incorrect Password'};
                }
                const newjwt = this.createtoken({email:user.email, id: user.id});
                return newjwt;
            }
            catch(error){
                console.log(error.name);
                if(error.name == 'AttributesNotFound'){
                    throw error;
                }
                console.log('something went wrong in signin');
                throw error;
            }
    }
    async isAuthenticated(token) {
        try{
            const isverify = this.verifytoken(token);
            if(!isverify){
                throw {error: 'invalid token'}
            }
            const user = this.userrepository.getbyid(response.id);
            if(!user) {
                throw {error: 'No user with the corresponding token exists'}
            } 
            return user.id;
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

    async checkpassword(userinputpassword, encryptedpassword) {
        try{
            return await bcrypt.compareSync(userinputpassword, encryptedpassword)
        }
        catch(error){
            console.log('something wrong at passwordcheck layer');
            throw {error};
        }
    }

    isAdmin(userid) {
        try {
            return this.userrepository.isAdmin(userid);
        } catch (error) {
            console.log('something wrong at passwordcheck layer');
            throw {error};
        }
    }
}

module.exports = UserService