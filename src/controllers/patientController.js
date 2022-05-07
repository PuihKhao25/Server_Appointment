import patientService from '../services/patientService'

let postBookAppointment = async(req,res) =>{
    try {
        let info = await patientService.postBookAppointment(req.body)
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
    postBookAppointment:postBookAppointment
}