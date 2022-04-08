/**
 * @description 收货地址路由
 * @author solomon
 */
const router = require("koa-router")();
const {SuccessModel, ErrorModel} = require("../res-model/index");
const loginCheck = require("../middleware/loginCheck");
const {
    createAddress,
    getAddressList,
    getAddress,
    updateAddress,
    getDefaultAddress
} = require("../controller/address");

router.prefix("/api/user/address");

//创建收货地址
router.post("/", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    const data = ctx.request.body;
    try {
        const newAddress = await createAddress(username, data);
        ctx.body = new SuccessModel(newAddress);
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10004, `创建收货地址失败 - ${ex}`);
    }
});
//查询收货地址列表
router.get("/", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    const list = await getAddressList(username);
    ctx.body = new SuccessModel(list);
});
//查询单个收货地址
router.get("/detail/:id", loginCheck, async (ctx, next) => {
    const id = ctx.params.id;
    const address = await getAddress(id);
    ctx.body = new SuccessModel(address);
});
//修改收货地址
router.patch("/:id", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    const id = ctx.params.id;
    const data = ctx.request.body;
    const newAddress = await updateAddress(id, username, data);
    ctx.body = new SuccessModel(newAddress);
});
//查询默认收货地址
router.get("/default", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    const address = await getDefaultAddress(username);
    ctx.body = new SuccessModel(address);
});
module.exports = router;
