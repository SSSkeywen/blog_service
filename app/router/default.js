/*
 * @Author: mikey.wf
 * @Date: 2020-10-09 10:18:53
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-10-12 14:44:49
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
};
