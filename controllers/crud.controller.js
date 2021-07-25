//model
const { response } = require('express')
const PsyModel=require('../models/mongoose.model')


const createFav=(req,res)=>{
    const {gender,img,name,id,psiPowers}=req.body
    PsyModel.find({id:id},(error,data)=>{
        if(data.length>0){
            res.send('already exist')
        }else{
            const newPsyModel= new PsyModel({
                gender:gender,
                img:img,
                name:name,
                id:id,
                psiPowers:psiPowers
            })
            newPsyModel.save()
            res.send(newPsyModel)

        }
    })
}


/*===========================================================================*/
const getFav=(req,res)=>{
    PsyModel.find({},(error,data)=>{
        if (error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })  
}


/*==========================================================================================*/

const deleteFav=(req,res)=>{
    const id=req.params.id
    PsyModel.deleteOne({id:id},(error,data)=>

{
    if(error){
        res.send(error.message)
    }else{
        res.send(data)
    }
}


    )

}

//********************************************************************************************************************* */
const updateFav = (req,res)=>{

    const choosenId=req.params.id
    const {gender,name}=req.body
    PsyModel.findOne({id:choosenId},(error,data)=>{
        if(error){res.send(error.message)}else{

data.gender=gender
data.name=name
data.save()
res.send(data)
 }
    }
    )}
//==============================================================================================================================





module.exports={
    createFav,getFav,deleteFav,updateFav
}