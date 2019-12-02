const mongoose = require('mongoose')
const validator =require('validator')
const schema=mongoose.Schema

contactSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return "invalid email format"
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
        unique:true
    },
    category:{
        type:String,
        required:true,
        enum:['work','home']
    },
    userid:{
        type:schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Contact=mongoose.model('Contact',contactSchema)

module.exports=Contact