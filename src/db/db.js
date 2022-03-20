/**
 * @description mongoose数据库连接
 * @author solomon
 */

const mongoose = require('mongoose')

const url = 'mongodb://www.hackboy.tech:27017'//设置数据量地址
const dbName = 'xiaomuDb'//数据库名称

// //数据库配置(不生效,不使用)
// mongoose.set('useCreateIndex',true)
// mongoose.set('useFindAndModify',true)

//开始连接
mongoose.connect(`${url}/${dbName}`,
{
    useNewUrlParser:true,//设置连接规则
    useUnifiedTopology:true
})

const db= mongoose.connection

db.on('error',()=>{
    console.error('connect to mongodb error');
})

db.once('open',()=>{
    console.log('connect mongodb success');
})

module.exports=mongoose
