const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            return await this.cityRepository.createCity(data);
        } catch (error) {
            console.error("Error in createCity:", error);
            throw error;
        }
    }

    async deleteCity(id) {  // Pass only id, not an object
        try {
            return await this.cityRepository.deleteCity(id);
        } catch (error) {
            console.error("Error in deleteCity:", error);
            throw error;
        }
    }

    async updateCity(id, data) { // Pass id as a separate argument
        try {
            return await this.cityRepository.updateCity(id, data);
        } catch (error) {
            console.error("Error in updateCity:", error);
            throw error;
        }
    }

    async getCity(id) {  // Pass id explicitly
        try {
            return await this.cityRepository.getCity(id);
        } catch (error) {
            console.error("Error in getCity:", error);
            throw error;
        }
    }
}

module.exports = CityService;
