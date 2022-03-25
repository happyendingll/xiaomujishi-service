/**
 * @description 模拟用户操作
 * @author solomon
 */
const User = require('../../models/User')

//创建自执行函数
!(async()=>{
    //模拟注册zhangsan
    await User.create({
        username:"zhangsan",
        password:'123'
    })

    //再创建一个
    await User.create({
        username:"13023802363",
        password:'abc'
    })

    //模拟登录
    const solomon = await User.findOne({
        username:"13023802363",
        password:'abc'
    })
    console.log('solomon',solomon);

})()