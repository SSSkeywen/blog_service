/*
 * @Author: mikey.wf
 * @Date: 2020-11-03 14:57:08
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-11-09 17:41:07
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', adminauth, controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
};
