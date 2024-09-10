import { db } from "../config/db.config.js"

export class TaskRepository{
    constructor(){
    this.db = db
}
    async add(task){
        console.log(task,'okaosk')
        console.log('akskka')
        return
        try {
           const query = 'INSERT INTO tasks (title,discription,priority) ($1,$2,$3)'
           await this.db.query(query,[task.title,task.discription,task.priority])
        } catch (error) {
            return error
        }
    }

    update(task){

    }

    delete(id){

    }

    getAll(){

    }

}