/**
 * @description User Controller
 * @author solomon
 */
const User = require('../models/User')

/**
 * 注册
 * @param {string}} username 用户名
 * @param {string} password 密码
 */
const register = async (username,password)=>{
    const newUser = await User.create({username,password})
    return newUser
}
/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
const login=async(username,password)=>{
    const user = await User.findOne({username,password})
    if (user!=null) {
        return true //如果有用户返回true
    }else{
        return false //如果没有返回false
    }
}

module.exports={register,login}