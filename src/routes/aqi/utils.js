const res = require("express/lib/response");
const https = require("https");


async function  getInfoAqi(city){
    try{

        return new Promise((resolve, reject)=>{
            try {
                https.get("https://api.waqi.info/search/?token=7a0dbf067cfd3211c451dc18098ded0dce39aed8&keyword="+city, async (res)=>{
                    res.on("data", (chunk) => {
                        let dataJSON = JSON.parse(chunk)
                        dataLocalidades = dataJSON.data
                        console.log("INFO:+",dataLocalidades,"SSSSSS-")
                        resolve(dataLocalidades);
                    });
                })
            } catch {
                reject("Ocurrió error en la obtención del body")
            }
        }).then((data)=>{return data}).catch((err)=>{return err})

    }catch(error){
        throw new Error('Obtención falló')
    }
}

module.exports={getInfoAqi}