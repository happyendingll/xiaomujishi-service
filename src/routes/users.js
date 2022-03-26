const router = require('koa-router')()
const user = require('../controller/user')
const {SuccessModel,ErrorModel} =require('../res-model/index')


router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/register',async(ctx,next)=>{
  const {username,password} = ctx.request.body
  //写入操作要try catch捕获异常
  try {
    const newUser = await user.register(username,password)
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(10001,`注册失败 - ${ex.message}`)
    }
  })

  router.post('/login',async(ctx,next)=>{
    const {username,password}=ctx.request.body
    const res = await user.login(username,password)
    if (res) {
      ctx.session.userInfo={username}//登录成功后把用户名存入session中
      ctx.body=new SuccessModel()
    }else{
      ctx.body=new ErrorModel(10002,'登录验证失败')
    }
  })

module.exports = router
