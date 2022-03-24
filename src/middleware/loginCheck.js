/**
 * @description 登录验证中间件
 * @author solomon
 */
const { SuccessModel, ErrorModel } = require("../res-model/index");

const loginCheck = async (ctx, next) => {
  const session = ctx.session;
  if (session && session.userInfo) {
    await next();
    return;
  }
  ctx.body = new ErrorModel("10003", "登录校验失败");
};
module.exports = loginCheck;
