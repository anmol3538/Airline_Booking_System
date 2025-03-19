class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data1){
        try{
            const data = await this.repository.create(data1);
            return data;
        }
        catch (error){
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async destroy(id){
        try{
            const data = await this.repository.destroy(id);
            return data;
        }
        catch (error){
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async get(id){
        try{
            const data = await this.repository.get(id);
            return data;
        }
        catch (error){
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async getAll(){
        try{
            const data = await this.repository.getAll();
            return data;
        }
        catch (error){
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async update(modelid, data1){
        try{
            const data = await this.repository.update(data1, {
                where: {
                    id: modelid
                }
            });
            return data;
        }
        catch (error){
            console.log("something went wrong in crud service");
            throw {error};
        }
    }
}

module.exports = CrudService