const mongoose=require('mongoose')
const couponSchema=new mongoose.Schema({
    name:{
        type:String
    },         
    type:{   
        type: String,
        enum : ['Basic','Seasonal','Unlimited'],
        default: 'Basic'
    },   
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    },
    discountAmount:{
        type:Number
    },
    userGroupName:{
        type:String
    }
})
module.exports=mongoose.model('coupon',couponSchema) 
