
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
    }

}

let getCrud = (req, res) => {
    return res.render('crud.ejs')

}

let postCrud = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post create  crud from server');
}

let displayGetCrud = async (req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('displayCrud.ejs', {
        dataTable: data,
    })
}

let getEditCrud = async(req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId)
        // console.log("---------")
        // console.log(userData)
        // console.log("---------")
        return res.render('editCrud.ejs', {
            user: userData,
        })
    } else {
        return res.send("User not default")
    }

}

let putCrud =async (req,res) => {
   let data = req.body;
   let allUsers = await CRUDService.updateUserData(data);
   return res.render('displayCrud.ejs',{
       dataTable:allUsers
   });
}

let deleteCrud = async(req, res) => {
    let id = req.query.id ;
    if(id){
        await CRUDService.deleteUserById(id);
        return res.send('successfully')
    }else{
        return res.send('User not found')
    }
     
}
module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    displayGetCrud: displayGetCrud,
    getEditCrud: getEditCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud,
}
