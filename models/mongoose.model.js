const mongoose=require('mongoose')
const Schema=mongoose.Schema
//Schema




const PsiSchema=new Schema({
    name:{
        type:String 
    },
    img:{
        type:String
    },
    description:{
        type:String
    }
})



const PsySchema =new Schema ({

    id:{   type:String,
        unique:true,
        trim:true,
        lowercase:true

    },
    gender:{
        type:String

    },
    img:{
        type:String
    },
    name:{
        type:String
    },

    psiPowers:[PsiSchema]

    



})


const PsyModel=mongoose.model('favpsy',PsySchema)
module.exports=PsyModel