/**
 * @description 失败时的返回数据模型
 * @author solomon
 */

 class ErrorModel{
    constructor(errno,message){
        this.errno=errno
        this.message=message
    }
}
module.exports=ErrorModel