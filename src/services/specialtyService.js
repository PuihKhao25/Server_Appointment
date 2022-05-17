const db = require("../models")

let createSpecialty = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            if (!data.name || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else{
                await db.specialty.create({
                    name:data.name,
                    image:data.imageBase64,
                    descriptionHTML:data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })
                resolve({
                    errCode: 0,
                    errMessage: 'ok'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllSpecialty = () =>{
    return new Promise(async(resolve, reject)=>{
        try {
            let data = await db.specialty.findAll({});
            if(data && data.length >0){
                data.map(item =>{
                    item.image = new Buffer(item.image, 'base64').toString('binary');
                    return item
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'ok',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createSpecialty:createSpecialty,
    getAllSpecialty:getAllSpecialty
}