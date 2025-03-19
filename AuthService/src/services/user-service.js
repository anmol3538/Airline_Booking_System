const UserRepository = require('../repository/user-repository')

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
}

module.exports = UserService