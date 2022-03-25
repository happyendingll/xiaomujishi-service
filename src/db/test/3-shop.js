/**
 * @description 模拟商店操作
 * @author solomon
 */
 const Shop = require('../../models/Shop')

 //创建自执行函数
 !(async()=>{
     //创建两个商店
     await Shop.create({
        shopName:'沃尔玛',
        imgUrl:'../public/images/shop/wmt.jpeg',
        monthlySale:'1000',
        sendOff:'50',
        baseShippingCosts:'6',
        slogan:'满100减10优惠券随心用'
     })
     await Shop.create({
        shopName:'山姆',
        imgUrl:'../public/images/shop/sam.jpeg',
        monthlySale:'1000',
        sendOff:'50',
        baseShippingCosts:'6',
        slogan:'满100减10优惠券随心用'
     })
    //查询热门商店
    const hotShops = await Shop.find().sort({_id:-1})
    console.log(hotShops);

    //查询商店详情
    const shop = await Shop.findOne({_id:'623ddf5e2ca16e7983cda928'})
    console.log(shop);

 })()