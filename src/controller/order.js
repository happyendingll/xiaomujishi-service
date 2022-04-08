/**
 * @description Order Controller
 * @author solomon
 */
const Order = require("../models/Order");

/**
 * 创建订单
 * @param {string} username 用户名
 * @param {Object} data 订单数据
 */
const createOrder = async (username, data) => {
    //运用到展开运算符的合并对象功能
    const order = await Order.create({username, ...data});
    return order;
};
/**
 * 查询订单列表
 * @param {string} username 用户名
 */
const getOrderList = async (username) => {
    const orders = await Order.find({username});
    return orders;
}

module.exports = {createOrder,getOrderList};
