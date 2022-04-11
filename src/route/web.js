import express from "express";
import getHomePage from "../controllers/homeController";
import userController from "../controllers/userControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage.getHomePage);
    router.get('/crud', getHomePage.getCrud);
    router.post('/post-crud', getHomePage.postCrud);
    router.get('/get-crud', getHomePage.displayGetCrud);
    router.get('/edit-crud', getHomePage.getEditCrud);
    router.post('/put-crud', getHomePage.putCrud);
    router.get('/delete-crud', getHomePage.deleteCrud);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser); // rest API
    router.get('/api/allcode', userController.getAllCode);

    return app.use("/", router);
}

module.exports = initWebRoutes;