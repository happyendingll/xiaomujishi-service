/**
 * @description Demo Schema
 * @author solomon
 */
 const mongoose = require('../db/db')

 const Schema = mongoose.Schema({

 },{timestamps:true})//新增时间戳

 const Demo = mongoose.model('demo',Schema)

 module.exports = Demo