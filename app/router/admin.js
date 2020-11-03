/*
 * @Author: mikey.wf
 * @Date: 2020-11-03 14:57:08
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-11-03 16:15:32
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
};
