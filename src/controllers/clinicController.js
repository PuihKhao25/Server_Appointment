import clinicService from '../services/clinicService'

let createClinic = async(req,res) =>{
    try {
        let info = await clinicService.createClinic(req.body)
        return res.status(200).json(
            info
            )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error:-1,
            errMessage:'Error from the server'
        })
    }
}

module.exports = {
    createClinic:createClinic
}