import express from "express";
import getHomePage from "../controllers/homeController";
import userController from "../controllers/userControllers";
import doctorController from "../controllers/doctorController"

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
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-infor-doctors', doctorController.postInforDoctors)
    router.get('/api/get-detail-doctor-id', doctorController.getDetailDoctorById)
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule)
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate)
    router.get('/api/get-extra-infor-doctor-by-id', doctorController.getExtraInfoDoctorById)

    return app.use("/", router);
}

module.exports = initWebRoutes;