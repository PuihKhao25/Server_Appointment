import doctorServices from '../services/doctorServices'

let getTopDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await doctorServices.getTopDoctorHome(+limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Err from server...'

        })

    }
}

let getAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorServices.getAllDoctors()
        return res.status(200).json(doctors)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let postInforDoctors = async (req, res) => {
    try {
        let response = await doctorServices.saveDetailInforDoctors(req.body);
        return res.status(200).json(response)

    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDetailDoctorById = async (req, res) => {
    try {
        let info = await doctorServices.getDetailDoctorById(req.query.id)
        return res.status(200).json(
            info
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let bulkCreateSchedule = async (req, res) => {
    try {
        let info = await doctorServices.bulkCreateSchedule(req.body)
        return res.status(200).json(
            info
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getScheduleByDate = async (req, res) => {
    try {
        let info = await doctorServices.getScheduleByDate(req.query.doctorId, req.query.date)
        return res.status(200).json(
            info
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getExtraInfoDoctorById = async (req, res) => {
    try {
        let info = await doctorServices.getExtraInfoDoctorById(req.query.doctorId)
        return res.status(200).json(
            info
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getProfileDoctorById = async (req, res) => {
    try {
        let info = await doctorServices.getProfileDoctorById(req.query.doctorId)
        return res.status(200).json(
            info
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getListPatientForDoctor = async (req, res) => {
    try {
        let info = await doctorServices.getListPatientForDoctor(req.query.doctorId, req.query.date)
        return res.status(200).json(
            info
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

let sendRemedy = async (req, res) => {
    try {
        let info = await doctorServices.sendRemedy(req.body)
        return res.status(200).json(
            info
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            error: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInforDoctors: postInforDoctors,
    getDetailDoctorById: getDetailDoctorById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInfoDoctorById: getExtraInfoDoctorById,
    getProfileDoctorById: getProfileDoctorById,
    getListPatientForDoctor: getListPatientForDoctor,
    sendRemedy: sendRemedy
}