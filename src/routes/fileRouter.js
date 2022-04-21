const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../res-model/index')
const fs = require('fs')


router.prefix('/api/file')

router.post('/',
    async ctx => {
        const file = ctx.request.files.file;//获取body中的数据
        let buffers = fs.readFileSync(file.path);//同步读取文件
        let base64 = new Buffer(buffers).toString('base64');//转为base64编码字符串
        ctx.body =new SuccessModel(base64);
    });

module.exports = router
