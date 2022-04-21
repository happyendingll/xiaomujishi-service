const path = require('path');

const koaBody = require('koa-body')({
    multipart: true,
    formidable: {
        // 上传存放的路劲
        uploadDir: path.join(__dirname, '../public/upload'),
        // 保持后缀名\
        keepExtensions: true,
        // 文件大小
        // maxFileSize: 5000,
        onFileBegin: (name, file) => {
            // 获取后缀, 如: .js  .txt
            const reg = /\.[A-Za-z]+$/g
            const ext = file.name.match(reg)[0]

            //修改上传文件名
            file.path = path.join(__dirname, "../public/upload/") + Date.now() + ext;
        },
        onError(err) {
            console.log(err)
        }
    }
});

module.exports = koaBody;
