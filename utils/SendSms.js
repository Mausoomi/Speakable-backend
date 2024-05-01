
const client = require('twilio')(process.env.Account_SID,process.env.Auth_Token)

const SendSms = async (body,number) => {
    let msgOptions = {
        from:process.env.Twilio_Phone_Number,
        to:number,
        body
      }
      try {
        await client.messages.create(msgOptions)
        // next()
      } catch (error) {
        console.log(error)
        // next()
      }
}

module.exports = SendSms;