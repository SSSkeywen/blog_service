/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601430996110_6356';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.session = {
    key: 'SESSION_ID', // 设置session cookie里面的key
    maxAge: 1000 * 60 * 30, // 设置过期时间
    httpOnly: true,
    encrypt: true,
    renew: true, // renew等于true 那么每次刷新页面的时候 session都会被延期
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // host: '192.168.1.34',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      // database: 'addressBook',
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    // eslint-disable-next-line array-bracket-spacing
    domainWhiteList: ['*'],
  };
  config.cors = {
    // origin: '*',
    origin: 'http://127.0.0.1:3000',
    credentials: true, // 允许Cook跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return {
    ...config,
    ...userConfig,
  };
};
