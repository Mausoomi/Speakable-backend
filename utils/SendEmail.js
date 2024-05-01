const sgMail = require('@sendgrid/mail')

const SendEmail_For_Signup = async (email,username) => {
        sgMail.setApiKey(process.env.Send_Grid_Api_Key)
        const msg = {
            to:email,
            from:{
            name:"Speakable English Project",
            email:process.env.Sender_Email
            },
            templateId:process.env.SignUp_Template_ID,
            dynamicTemplateData:{
            name:username,
            surename:''
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

const SendEmail_For_Invoice = async (email,username,invoicenumber) => {
    sgMail.setApiKey(process.env.Send_Grid_Api_Key)
    const msg = {
        to:email,
        from:{
        name:"Speakable English Project",
        email:process.env.Sender_Email
        },
        templateId:process.env.Send_Invoice_Template_ID,
        dynamicTemplateData:{
        // name:username,
        // surename:''
        }
    }
    try {
        const sendedmessage =  await sgMail.send(msg)
        console.log("Invoice Email has been sent!")
        console.log(sendedmessage)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
const SendEmail_For_Meeting_Confimation = async (email,username,url,date,time) => {
    sgMail.setApiKey(process.env.Send_Grid_Api_Key)
    const msg = {
        to:email,
        from:{
        name:"Speakable English Project",
        email:process.env.Sender_Email
        },
        templateId:process.env.Meeting_Confimation_Template_ID,
        dynamicTemplateData:{
        name:username,
        surename:'',
        url:url,
        date:date,
        time:time
        }
    }
    try {
        const sendedmessage =  await sgMail.send(msg)
        console.log("Meeting Confirmation Email has been sent!")
        console.log(sendedmessage)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
const SendEmail_For_Forget_Password = async (email,username,url) => {
    sgMail.setApiKey(process.env.Send_Grid_Api_Key)
    const msg = {
        to:email,
        from:{
        name:"Speakable English Project",
        email:process.env.Sender_Email
        },
        templateId:process.env.Forget_Password_Template_ID,
        dynamicTemplateData:{
        name:username,
        surename:'',
        url:url
        }
    }
    try {
        const sendedmessage =  await sgMail.send(msg)
        console.log("Forget Password Email has been sent!")
        console.log(sendedmessage)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
module.exports = { SendEmail_For_Signup,
                   SendEmail_For_Invoice,
                   SendEmail_For_Meeting_Confimation,
                   SendEmail_For_Forget_Password        }



