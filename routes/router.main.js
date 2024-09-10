import { Router } from "express";


export class MainRouter{

    constructor(router) {
        this.router = router || Router()
    }

    getRouter(){
        return this.router
    }

    get(url,...middlewares) {
        this.router.get(url,...middlewares)
    }

    post(url,...middlewares) {
        this.router.post(url,...middlewares)
    }

    patch(url,...middlewares) {
        this.router.patch(url,...middlewares)
    }

    put(url,...middlewares) {
        this.router.put(url,...middlewares)
    }


}


