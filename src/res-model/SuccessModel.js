/**
 * @description 成功时的返回数据模型
 * @author solomon
 */

class SuccessModel{
    constructor(data){
        this.errno=0
        if (data!=null) {
            this.data=data
        }
    }
}
module.exports=SuccessModel