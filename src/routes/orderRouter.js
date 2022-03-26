/**
 * @description 订单路由
 * @author solomon
 */
const router = require("koa-router")();
const { SuccessModel, ErrorModel } = require("../res-model/index");
const loginCheck = require("../middleware/loginCheck");
const { getAddress } = require("../controller/address");
const { getProduct } = require("../controller/shop");
const { createOrder } = require("../controller/order");

router.prefix("/api/order");
//创建订单
router.post("/", loginCheck, async (ctx, next) => {
  try {
    const username = ctx.session.userInfo.username;
    const requestBody = ctx.request.body;
    //获取地址信息
    const address = await getAddress(requestBody.addressId);
    //拼接商品信息
    const products = [];
    for (const { productId, num } of requestBody.products) {
      //用到了对象的解构赋值
      const product = await getProduct(productId);
      products.push({ product, num }); //用到了对象的字面量增强
    }
    const data = {
      shopId: requestBody.shopId,
      shopName: requestBody.shopName,
      isCanceled: requestBody.isCanceled,
      address,
      products,
    };
    const order = await createOrder(username, data);
    ctx.body = new SuccessModel(order);
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(10005, `创建订单失败 - ${ex}`);
  }
});
module.exports = router;
