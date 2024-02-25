class CrudRepository {
    constructor(Model) {
        this.model = Model

    }
    async create(data) {
        try {
            console.log(data, this.model);
            const response = await this.model.create(data)
            console.log(response);
            return response
        } catch (error) {
            throw error
        }
    }
    async find(data) {
        try {

            const response = await this.model.findOne(data)
            console.log(response);
            return response
        } catch (error) {
            throw error
        }
    }
    async update(id, data) {
        try {

            const response = await this.model.findByIdAndUpdate(id, data)
            console.log(response);
            return response
        } catch (error) {
            throw error
        }
    }
    async delete(data) {
        try {
            console.log(this.model, data)
            const response = await this.model.deleteOne(data)
            console.log(response);
            return response
        } catch (error) {
            throw error
        }
    }
}
module.exports = CrudRepository