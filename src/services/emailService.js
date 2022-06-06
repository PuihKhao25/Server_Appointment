require('dotenv');
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"khao baby 👻" <khao1999@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
        html:
            getBodyHTMLEmail(dataSend)
        ,
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</3>
        <p> Bạn nhận được email  này vì đã đặt lịch khám bệnh online trên Book Appointment </p>
        <p> thông tin đặt lịch khám bệnh </p>
        <div> 
        <b>Thời gian : ${dataSend.time} </b>
        </div>
        <div> 
        <b>Bác sĩ: ${dataSend.doctorName} </b>
        </div>
        <p> Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường linh bên dưới 
        để xác nhận và hoàn tất thủ tục lịch khám bệnh</p>
        <div>
        <a href =${dataSend.redirectLink} target ="_blank" >Click here </a>
        </div>
        <div>
             Xin chân thành cảm ơn !
         </div>
        `
    }
    if (dataSend.language === 'en') {
        result =

            `
        <h3>Dear, ${dataSend.patientName}!</3>
        <p> You received this email because you booked an online medical appointment on Book Appointment </p>
        <p> Information to book a medical appointment </p>
        <div> 
        <b>Time : ${dataSend.time} </b>
        </div>
        <div> 
        <b> Doctor : ${dataSend.doctorName} </b>
        </div>
        <p> 
             If the above information is true, please click on the link below to confirm and complete the procedure.
        </p>
        <div>
        <a href =${dataSend.redirectLink} target ="_blank" >Click here </a>
        </div>
        <div>
        Sincerely thank!
         </div>
        `
    }
    return result
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</3>
        <p> Bạn nhận được email  này vì đã đặt lịch khám bệnh online trên Book Appointment  thành công</p>
        <p> thông tin đơn thuốc/ hóa đơn được gửi trong file định kèm </p>
        <div>
             Xin chân thành cảm ơn !
         </div>
        `
    }
    if (dataSend.language === 'en') {
        result =

            `
        <h3>Dear,${dataSend.patientName}!</3>
        <p> You received this email because you booked an online medical appointment on Book Appointment </p>
        <p> Information to book a medical appointment </p>
        <p> khihi</p>
        <div>
        Sincerely thank!
         </div>
        `
    }
    return result
}

let sendAttachment = async (dataSend) => {
    return new Promise(async (resolve, reject) => {

        try {

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_APP, // generated ethereal user
                    pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"khao baby 👻" <khao1999@gmail.com>', // sender address
                to: dataSend.email, // list of receivers
                subject: "Kết quả đặt lịch khám bệnh ✔", // Subject line
                html: getBodyHTMLEmailRemedy(dataSend),
                attachments: [
                    {
                        filename: `remedy-${dataSend.patientId}-$${new Date().getTime()}.png`,
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: 'base64'
                    }
                ],
            });

            resolve(true)
        } catch (e) {
            reject(e)
        }

    })
}


module.exports = {
    sendSimpleEmail,
    sendAttachment
}