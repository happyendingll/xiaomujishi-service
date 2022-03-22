## 新增
### url
`/api/user/address`
### method
`post`
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