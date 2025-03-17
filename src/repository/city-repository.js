const {City} = require('../models/index');
const {Op} = require('sequelize');
class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            throw {error};
        }
    }

    async deleteCity(id){
        try{
            await City.destroy({
                where: {
                    id : id 
                }
            });
            return true;
        }
        catch(error){
            throw {error};
        }
    }

    async updateCity(id, data){
        try{
            const city = await City.update(data, {
                where: {
                    id: id,
                }
            })
            return city;
        }
        catch{
            consolel
        }
    }

    async getCity(id){
        try{
            const city = await City.findOne({
                where: {
                    id: id
                }
            })
            return city;
        }
        catch{
            console.log("Error")
        }
    }

    async getAllCities(filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where : {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                console.log(cities)
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = CityRepository;