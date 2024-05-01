const sgMail = require('@sendgrid/mail')
async function SendEmail_OTP  (email,otp)  {
    sgMail.setApiKey(process.env.Send_Grid_Api_Key)
    const msg = {
        to:email,
        from:{
        name:"Recovery OTP",
        email:process.env.Sender_Email
        },
        templateId:process.env.Template_ID,
        dynamicTemplateData:{
            otp:otp
        }
    }
    try {
        const sendedmessage =  await sgMail.send(msg)
        console.log("Signup Email has been sent!")
        // console.log(sendedmessage)
    } catch (error) {
        console.log(error)
        // res.json({error})
    }
}


function generateOTP(length) {
  const charset = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset[randomIndex];
  }
  return otp;
}

const sendOTP = async (email) => {
    console.log(email)
    const otp = generateOTP(6); // Generate a 6-digit OTP
    console.log(otp)
    SendEmail_OTP(email,otp)
    return otp
};



module.exports = sendOTP;
