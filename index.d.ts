/// <reference types="node" />
import * as amqp from 'amqp';

declare interface IMQOptions {
  exchangeName: string;
  exchangeOption?: amqp.ExchangeOptions;
  queueName: string;
  queueOption?: amqp.QueueOptions;
}

declare interface ISubscribeData{
  message: any,
  headers: { [key: string]: any },
  deliveryInfo: amqp.DeliveryInfo,
  ack: amqp.Ack
}

/**
 * mq类
 */
declare class MQ {
  private ready;
  private exchangeSubmit;

  /**
   * 实例化mq类
   * 
   * @param {amqp.ConnectionOptions} connOptions 连接配置
   * @param {IMQOptions} options 
   * @memberof MQ
   */
  constructor(connOptions: amqp.ConnectionOptions, options: IMQOptions);

  /**
   * 发布消息
   *
   * @param {any} body
   * @param {any} [options={}]
   * @returns
   * @memberof MQ
   */
  publishMsg(body: string | Buffer, options?: {}): Promise<any>;

  /**
   * 接收消息
   *
   * @param {any} options
   * @param {any} callback
   * @memberof MQ
   */
  subscribe(options: amqp.SubscribeOptions, callback: amqp.SubscribeCallback): void;
  subscribe(callback: amqp.SubscribeCallback): void;

  /**
   * 接收消息(异步)
   *
   * @param {any} options
   * @param {any} callback
   * @memberof MQ
   */
  subscribeAsync(options: amqp.SubscribeOptions): Promise<ISubscribeData>;
}
export = MQ;

declare module MQ { }
