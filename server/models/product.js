const mongoose = require("mongoose")

const ProductSceham = mongoose.Schema({
    desc:{type:String, required:true, text:true},
    img:{type:String, required:true, text:true},
    price: { type: String, required: true, text:true },
    rating:{type:String, required:true, text:true },
    category:{type:String, required:true, text:true},
    order: { type: String, required: true, text:true },
    rating_img:{type:String, required:true, text:true},
    
},{
    versionKey: false,
    timestamp:false

});


module.exports = mongoose.model("product", ProductSceham)

