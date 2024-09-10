import express from 'express'
import cors from 'cors'
import { db } from './db.config.js'
import { router } from '../routes/task.router.js'

export class ServerConfig {
  constructor(){
    this.app = express()
    this.port = process.env.SERVER_PORT || 3000
  }

  startServer(){

    this._boot()
    
  }

  _boot(){
    // const database = db
    
    this.app.use(express.json())
    this.app.use(cors({
      credentials:true,
      origin:"*"
    }))
    this.app.use('/',router)
    this.app.listen(this.port,() =>{
      console.log('servidor rodando na porta ' + this.port)
    })

  }

}


