/*
 * @Author: mikey.wf
 * @Date: 2020-11-03 14:54:43
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-11-09 17:40:12
 */
'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi api';
  }

  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
      "' AND password = '" + password + "'";
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }

  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId,
    };
  }
}

module.exports = MainController;
