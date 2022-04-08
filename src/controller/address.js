/**
 * @description Address Controller
 * @author solomon
 */
const Address = require("../models/Address");

/**
 * 创建收货地址
 * @param {string} username 用户名
 * @param {Object}} data 收货地址的详细信息
 */
const createAddress = async (username, data) => {
  const address = await Address.create({ username, ...data });
  return address;
};
/**
 * 查询收货地址列表
 * @param {string} username 用户名
 */
const getAddressList = async (username) => {
  const list = await Address.find({ username }).sort({
    updatedAt: -1,
  });
  return list;
};
/**
 * 查询单个收货地址
 * @param {string} id 收货地址的id
 */
const getAddress = async (id) => {
  const address = await Address.findOne({ _id: id });
  return address;
};
/**
 * 修改单个收货地址
 * @param {string} id 收货地址的id
 * @param {string} username 用户名
 * @param {Object} data 修改的地址详细信息
 */
const updateAddress = async (id, username, data) => {
  const newAddress = await Address.findOneAndUpdate(
    { _id: id, username },
    data,
    { new: true } //返回的时最新的数据
  );
  return newAddress;
};
/**
 * 查询默认收货地址
 * @param {string} username 用户名
 */
const getDefaultAddress = async (username) => {
  const defaultAddress = await Address.findOne({
    username,
    isDefault: true,
  });
  return defaultAddress;
};
module.exports = { createAddress, getAddressList, getAddress, updateAddress,getDefaultAddress};
