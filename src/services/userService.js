import db from "../models/index";
import bcrypt from "bcryptjs";


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes : ['email','roleId','password'],
                    where: { email: email },
                    raw: false,
                });
                if (user) {
                    let check = await bcrypt.compare(password, user.password);// false
                    console.log(check)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'ok';
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your email isn't exist  in your system.please try other email !`;

            }
            resolve(userData);
        } catch (e) {
            reject(e);

        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);

        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async(resolve,reject) => {
        try {
            let users ='';
            if(userId === 'All'){
                users= await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if(userId && userId !== 'All'){
                users = await db.User.findOne({
                    where: {id: userId},
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
            
        }
    })

}


module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers:getAllUsers,
}
