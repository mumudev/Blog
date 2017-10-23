'use strict';
/**
 * @argument mongodb_host mongodb的主机地址
 * @argument redis_host redis的主机地址
 * @argument redis_password redis的访问密码
 * @argument redis_db redis的第几号数据库
 */
const mongodb_host = `mongodb://${process.env.mongodb_host || 'localhost'}/blog`;
const redis_host = process.env.redis_host || 'localhost';
const redis_password = process.env.redis_password || '';
const redis_db = process.env.redis_db || 0;
module.exports = {
  logger: {
    dir: './logs',
  },
  security: {
    csrf: false,
  },
  redis: {
    client: {
      port: 6379,
      host: redis_host,
      password: redis_password,
      db: redis_db,
    },
  },
  mongoose: {
    url: mongodb_host,
    options: {},
  },
};
