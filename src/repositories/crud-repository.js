class CrudRepository {
    constructor(Model){
        this.model = Model 

    }
    async create(data){
        try {
            
            const response =  await this.model.create(data)
            console.log(response);
             return response 
        } catch (error) {
            throw error 
        }
    }
    async find(data){
        try {
            
            const response =  await this.model.create(data)
            console.log(response);
             return response 
        } catch (error) {
            throw error 
        }
    }
    async update(id,data){
        try {
            
            const response =  await this.model.findByIdAndUpdate(id,data)
            console.log(response);
             return response 
        } catch (error) {
            throw error 
        }
    }
    async destroy(data){
        try {
            
            const response =  await this.model.deleteOne(data)
            console.log(response);
             return response 
        } catch (error) {
            throw error 
        }
    }
}
module.exports= CrudRepository