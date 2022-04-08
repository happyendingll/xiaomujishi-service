/**
 * @description 模拟地址操作
 * @author solomon
 */
const Address = require("../../models/Address");

//创建自执行函数
!(async () => {
  // //  新增地址
  // await Address.create({
  //   username: "13023802363",
  //   city: "厦门",
  //   community: "xx小区",
  //   houseNumber: "20栋",
  //   receiver: "solomon",
  //   phone: "13023802363",
  // });
  // // 再新增地址
  // await Address.create({
  //   username: "13023802363",
  //   city: "厦门",
  //   community: "yy小区",
  //   houseNumber: "8栋",
  //   receiver: "solomon",
  //   phone: "13055359802",
  // });
  // // 查询地址列表
  // const addressList = await Address.find({ username: "13023802363" }).sort({
  //   updatedAt: -1,
  // });
  // console.log(addressList);
  // // 查询单个地址
  // const address = await Address.findOne({ _id: "623dab658148b1bd99fcef2f" });
  // console.log(address);
  // // 修改单个地址
  // const id = "623dab658148b1bd99fcef2f";
  // const newData = {
  //   username: "13023802363",
  //   city: "厦门",
  //   community: "最新小区",
  //   houseNumber: "8栋",
  //   receiver: "solomon",
  //   phone: "12308083205",
  // };
  // const newAddress = await Address.findOneAndUpdate(
  //   { _id: id },
  //   newData,
  //   { new: true } //返回的时最新的数据
  // );
  // console.log(newAddress);
  // 查询默认地址
  const defaultAddress = await Address.findOne({
    username: "13023802363",
    isDefault: true,
  });
  console.log(defaultAddress);
})();
