/**
 * @description User Schema
 * @author solomon
 */
const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username:{
        type:String,
        require:true,//必须
        unique:true//唯一
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true})//新增时间戳

const User = mongoose.model('user',Schema)

module.exports = User