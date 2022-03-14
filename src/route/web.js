import express from "express";
import getHomePage from "../controllers/homeController";
import userController from "../controllers/userControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',getHomePage.getHomePage);
    router.get('/crud',getHomePage.getCrud);
    router.post('/post-crud',getHomePage.postCrud);
    router.get('/get-crud',getHomePage.displayGetCrud);
    router.get('/edit-crud',getHomePage.getEditCrud);
    router.post('/put-crud',getHomePage.putCrud);
    router.get('/delete-crud',getHomePage.deleteCrud);

    router.post('/api/login', userController.handleLogin)
    router.get('/aip/get-all-users', userController.handleGetAllUsers)

    return app.use("/" ,router)
}

module.exports =initWebRoutes;