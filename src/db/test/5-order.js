/**
 * @description 模拟订单操作
 * @author solomon
 */
const Order = require("../../models/Order");
const Address = require("../../models/Address");
const Product = require("../../models/Product");

!(async () => {
  const requestBody = {
    addressId: "623dab658148b1bd99fcef2f",
    shopId: "623ddf5e2ca16e7983cda928",
    shopName: "沃尔玛",
    isCanceled: false,
    products: [
      {
        productId: "623de460252d59cc671f6a65",
        num: "3",
      },
      {
        productId: "623de460252d59cc671f6a6c",
        num: "5",
      },
    ],
  };
  //获取地址信息
  const address = await Address.findById(requestBody.addressId);
  //拼接商品信息
  const products = [];
  for (const { productId, num } of requestBody.products) {
    //用到了对象的解构赋值
    const product = await Product.findById(productId);
    products.push({ product, num }); //用到了对象的字面量增强
  }
  //创建订单信息
  const order = await Order.create({
    username: "13023802363",
    shopName: requestBody.shopName,
    isCanceled: requestBody.isCanceled,
    address,
    products,
  });
})();
