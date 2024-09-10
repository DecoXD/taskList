import { TaskController } from "../controllers/Task.controller.js";
import { TaskRepository } from "../repository/Task.repository.js";
import { MainRouter } from "./router.main.js";


const router = new MainRouter().getRouter()
const repository = new TaskRepository()
const controller = new TaskController(repository)
router.get('/create',(req,res,next) =>{
    const body = req.body;
    const response = controller.add(body)
    if(response instanceof Error){
        return next(response)
    }
    res.status(200).json({
        message:'task adcionada com sucesso!'
    })

})



export {router}
