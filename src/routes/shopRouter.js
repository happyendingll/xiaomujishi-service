/**
 * @description 商店及商品路由
 * @author solomon
 */
const router = require("koa-router")();
const { SuccessModel, ErrorModel } = require("../res-model/index");
const { getHotShop, getShop, getProducts } = require("../controller/shop");

router.prefix("/api/shop");

//获取热门商店列表
router.get("/hot-shop", async (ctx, next) => {
  const hotShops = await getHotShop();
  ctx.body = new SuccessModel(hotShops);
});
//获取单个商店信息
router.get("/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const shop = await getShop(id);
  ctx.body = new SuccessModel(shop);
});
//获取商店内某个品类的商品
router.get("/:id/products", async (ctx, next) => {
  const id = ctx.params.id;
  //设置tag默认值为all,避免空传
  const tag = ctx.query.tag || "all";
  const products = await getProducts(id, tag);
  ctx.body = new SuccessModel(products);
});

module.exports = router;
