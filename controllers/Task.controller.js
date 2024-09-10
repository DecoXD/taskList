


export class TaskController {
    
    constructor(repository){
        this.repository = repository
    }


    async add(task){
        try {
            console.log('controller')
            const newTask = await this.repository.add(task)
            return newTask
        } catch (error) {
            return error
        }
    }

    async update(task){
        try {
            const newTask = await this.repository.update(task)
            return newTask
        } catch (error) {
            return error
        }
    }

    async delete(id){
        try {
            const newTask = await this.repository.delete(id)
            return newTask
        } catch (error) {
            return error
        }
    }

    async getAll(){
        try {
            const newTask = await this.repository.getAll()
            return newTask
        } catch (error) {
            return error
        }
    }

}