/**
 * @description 模拟商品操作
 * @author solomon
 */
 const Product = require('../../models/Product')

 //创建自执行函数
 !(async()=>{
     //创建几个商品
    //  await Product.create({
    //     shopId:'623ddf5e2ca16e7983cda928',
    //     name:'葡萄',
    //     imgUrl:'../../public/images/product/grape.jpg',
    //     monthlySale:'10',
    //     price:'50',
    //     originalPrice:'33',
    //     tags:['all','secKill','freshFruit']
    //  })
    //  await Product.create({
    //     shopId:'623ddf5f2ca16e7983cda92b',
    //     name:'苹果',
    //     imgUrl:'../../public/images/product/apple.jpeg',
    //     monthlySale:'10',
    //     price:'50',
    //     originalPrice:'33',
    //     tags:['all','secKill','freshFruit']
    //  })
    //  await Product.create({
    //     shopId:'623ddf5e2ca16e7983cda928',
    //     name:'桃子',
    //     imgUrl:'../../public/images/product/peach.jpg',
    //     monthlySale:'10',
    //     price:'50',
    //     originalPrice:'33',
    //     tags:['all','secKill','freshFruit']
    //  })
    //  await Product.create({
    //     shopId:'623ddf5e2ca16e7983cda928',
    //     name:'西瓜',
    //     imgUrl:'../../public/images/product/watermelon.jpg',
    //     monthlySale:'10',
    //     price:'50',
    //     originalPrice:'33',
    //     tags:['all','freshFruit']
    //  })
    //查询单个商店的某类商品列表
    const products = await Product.find({
         shopId:'623ddf5e2ca16e7983cda928',
         tags:{
             $in:'secKill' //查询tabs=秒杀的商品
         }
        }).sort({updatedAt:-1})
    console.log(products);

 })()