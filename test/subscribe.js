// Create by Zubin on 2018-07-18 11:13:34

// Create by Zubin on 2018-07-18 10:50:54

const MQ = require('../index');
const { expect } = require('chai');

const connConfig = {
  host: '192.168.8.18',
  port: 5672,
  login: 'epaperapi',
  password: '123456',
  vhost: 'epaperapi_dev',
  reconnect: true,
  reconnectBackoffTime: 10000, // 10秒尝试连接一次
};
const options = {
  exchangeName: 'exTest1',
  exchangeOption: {
    durable: true,
  },
  queueName: 'test1',
};

const mq = new MQ(connConfig, options);

mq.subscribe(async (msg, header) => {
  console.log(msg, header, new Date());
});
