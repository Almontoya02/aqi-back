const express = require('express')
const router = new express.Router()
const {getInfoAqi} = require("./utils")

router.get("/aqi/:city/",async(req,res)=>{
    try{
        const data = await getInfoAqi(req.params.city)
        res.status(200).send(
            {
                status:true,
                message:"data get Done",
                data:{
                    data
                }
            }
        )
    }catch(error){
        res.status(200).send(
            {
                status:false,
                message:"DAta failed",
                data:{
                    message:error.toString()
                }
            }
        )
    } 
})

module.exports=router