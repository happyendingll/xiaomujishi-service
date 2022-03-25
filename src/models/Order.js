/**
 * @description Order Schema
 * @author solomon
 */

const { boolean } = require("webidl-conversions");
const mongoose = require("../db/db");

const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    shopId: {
      type: String,
      require: true,
    },
    shopName: String,
    isCanceled: Boolean, //是否支付
    //地址信息
    address: {
      username: String, //跟用户对应关系
      city: String,
      community: String,
      houseNumber: String,
      receiver: String,
      phone: String,
    },
    //商品信息
    products: [
      {
        product: {
          shopId: String,
          name: String,
          imgUrl: String,
          monthlySale: String,
          price: String,
          originalPrice: String,
          tags: [String],
        },
        num: Number,
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("order", Schema);

module.exports = Order;
