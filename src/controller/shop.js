/**
 * @description Shop & Product Controller
 * @author solomon
 */
const Shop = require("../models/Shop");
const Product = require("../models/Product");

/**
 * 获取热门商店列表
 */
const getHotShop = async () => {
  const hotShops = await Shop.find().sort({ _id: -1 });
  return hotShops;
};
/**
 * 获取单个商店信息
 * @param {string} id 商店id
 */
const getShop = async (id) => {
  const shop = await Shop.findById(id);
  return shop;
};
/**
 * 获取商店内某个品类的商品
 * @param {string} id 商店id
 * @param {string} tag 商品品类
 */
const getProducts = async (id, tag) => {
  const products = await Product.find({
    shopId: id,
    tags: {
      $in: tag, //查询tabs=秒杀的商品
    },
  }).sort({ updatedAt: -1 });
  return products;
};
/**
 * 获取单个商品信息
 * @param {string} id 商品id
 */
const getProduct = async (id) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = { getHotShop, getShop, getProducts, getProduct };
