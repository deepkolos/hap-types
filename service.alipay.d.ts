/**
 * 支付宝支付 alipay
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/alipay.html
 */
declare module '@service.alipay' {
  interface Alipay {
    /**
     * 使用支付宝支完成支付
     * @example alipay.pay({
     *   orderInfo: 'order1',
     *   callback: function(ret) {
     *     console.log('handling callback')
     *   }
     * })
     */
    pay(OBJECT: PayOBJECT): any;
  }

  /**
   *
   * @param orderInfo 服务端生成的订单信息，参考支付宝的请求参数说明文档
   * @param callback 支付结果回调，格式参考支付宝的通知参数说明文档
   */
  interface PayOBJECT {
    orderInfo: String;
    callback: Function;
  }

  const alipay: Alipay;
  export default alipay;
}
