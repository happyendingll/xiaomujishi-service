/**
 * @description Address Schema
 * @author solomon
 */
const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true //必须与用户进行关联
    },
    city: String,
    community: String,
    houseNumber: String,
    receiver: String,
    phone: String,
    isDefault: Boolean,
}, {timestamps: true})//新增时间戳

const Address = mongoose.model('address', Schema)

module.exports = Address