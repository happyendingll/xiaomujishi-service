/**
 * @description Product Schema
 * @author solomon
 */
 const mongoose = require('../db/db')

 const Schema = mongoose.Schema({
    shopId:{
        type:String,
        require:true
    },
    name:String,
    imgUrl:String,
    monthlySale:String,
    price:String,
    originalPrice:String,
    tags:[String] //字符串数组类型
 },{timestamps:true})//新增时间戳

 const Product = mongoose.model('product',Schema)

 module.exports = Product