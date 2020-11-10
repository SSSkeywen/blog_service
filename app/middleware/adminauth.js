/*
 * @Author: mikey.wf
 * @Date: 2020-11-09 15:41:53
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-11-09 15:45:12
 */
'use strict';
module.exports = options => {

  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
