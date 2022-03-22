## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
    username:'13023802363',
    password:'abc'
}
```

### response body

```js
{
  errno: 0;
  message: "errrno 不为0时的错误信息";
}
```

---

## 登录

### url

`/api/user/login`

### method

`post`

### request body

```js
{
    username:'13023802363',
    password:'abc'
}
```

### response body

```js
{
  errno: 0;
  message: "errrno 不为0时的错误信息";
}
```

---

## 查询用户信息

### url

`/api/user/info`

### method

`get`

### loginCheck?

`true`

### request body

无

### response body

```js
{
    errno:0,
    data:{
        username:'solomon',
        age:'28',
        sex:'male'
    }
    message:'errrno 不为0时的错误信息'
}
```

## 新增收货地址

### url

`/api/user/address`

### method

`post`

### loginCheck?

`true`

### request body

```js
{
    city:'厦门',
    community:'xx小区',
    houseNumber:'20栋',
    receiver:'solomon',
    phone:'13600324980'
}
```

### response body

```js
{
    errno:0,
    data:{
            _id:'7234975',
            city:'厦门',
            community:'xx小区',
            houseNumber:'20栋',
            receiver:'solomon',
            phone:'13600324980'
        },
    message:'errrno 不为0时的错误信息'
}
```

---

## 查询收货地址列表

### url

`/api/user/address`

### method

`get`

### loginCheck?

`true`

### request body

无

### response body

```js
{
    errno:0,
    data:{[{
            _id:'7234975',
            city:'厦门',
            community:'xx小区',
            houseNumber:'20栋',
            receiver:'solomon',
            phone:'13600324980'
        },{
            _id:'7234975',
            city:'北京',
            community:'yy小区',
            houseNumber:'12栋',
            receiver:'lucy',
            phone:'13600324980'
        },]},
    message:'errrno 不为0时的错误信息'
}
```

---

## 查询单个收货地址

### url

`/api/user/address/:id`

### example

`/api/user/address/100`

### method

`get`

### loginCheck?

`true`

### request body

无

### response body

```js
{
    errno:0,
    data:{
            _id:'7234975',
            city:'北京',
            community:'yy小区',
            houseNumber:'12栋',
            receiver:'lucy',
            phone:'13600324980'
    },
    message:'errrno 不为0时的错误信息'
}
```

---

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### loginCheck?

`true`

### request body

```js
{
    city:'厦门',
    community:'xx小区',
    houseNumber:'20栋',
    receiver:'solomon',
    phone:'13600324980'
}
```

### response body

```js
{
  errno: 0;
  message: "errrno 不为0时的错误信息";
}
```

---

## 查询(热门)商店列表

### url

`/api/shop/hot-shop`

### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:[{
            _id:'7234975',
            shopName:'沃尔玛',
            imgUrl:'../public/images/shop/wmt.jpeg',
            monthlySale:'1000',
            sendOff:'50',
            baseShippingCosts:'6',
            slogan:'满100减10优惠券随心用'
        },{
            _id:'7234975',
            shopName:'山姆',
            imgUrl:'../public/images/shop/sam.jpeg',
            monthlySale:'1000',
            sendOff:'50',
            baseShippingCosts:'6',
            slogan:'满100减10优惠券随心用'
        }],
    message:'errrno 不为0时的错误信息'
}
```

---

## 查询单个商店

### url

`/api/shop/:id`

### example

`/api/shop/100`

### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:{
            _id:'7234975',
            shopName:'山姆',
            imgUrl:'../public/images/shop/sam.jpeg',
            monthlySale:'1000',
            sendOff:'50',
            baseShippingCosts:'6'
            slogan:'满100减10优惠券随心用'
    },
    message:'errrno 不为0时的错误信息'
}
```

---

## 查询商品列表

### url

`/api/shop/:id/products`

### method

`get`

#### query

`tag=全部商品`

#### example

`/api/shop/10/products?tag=全部商品`

### request body

无

### response body

```js
{
    errno:0,
    data:{
        _id:'1213',
        shopId:'656654',
        name:'葡萄',
        imgUrl:'../public/images/product/grape.jpg',
        monthlySale:'10',
        price:'50',
        originalPrice:'33',
        tags:['all','secKill','freshFruit']
    },
    message:'errrno 不为0时的错误信息'
}
```

---

## 新增订单

### url

`/api/order`

### method

`post`

### loginCheck?

`true`

### request body

```js
{
    addressId:'213523',
    shopId:'123',
    shopName:'沃尔玛',
    isCanceled:false,
    products:[
        {
            productId:'446825as',
            num:'3',
        },
        {
            productId:'5475675',
            num:'5',
        }]
}
```

### response body

```js
{
    errno:0,
    data:{
            orderId:'7234975'
        },
    message:'errrno 不为0时的错误信息'
}
```

---
