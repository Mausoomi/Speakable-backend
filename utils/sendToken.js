const sendToken = async (data,res,statusCode) => {
    const token = await data.jwttoken();
    const options = {
        expires : new Date(Date.now() + 1*24*60*60*1000),
        httpOnly:true,
        secure:true,
    }
    res.status(statusCode).cookie("token",token,options).json({
       success: true,
       token,
       data
    })
   }

module.exports = sendToken;