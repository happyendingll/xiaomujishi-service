/**
 * @description Shop Schema
 * @author solomon
 */
 const mongoose = require('../db/db')

 const Schema = mongoose.Schema({
            shopName:{
                type:String,
                require:true
            },
            imgUrl:String,
            monthlySale:String,
            sendOff:String,
            baseShippingCosts:String,
            slogan:String
 },{timestamps:true})//新增时间戳

 const Shop = mongoose.model('shop',Schema)

 module.exports = Shop