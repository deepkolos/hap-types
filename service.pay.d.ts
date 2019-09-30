/**
 * 支付 pay
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/pay.html
 */
declare module '@service.pay' {
  interface Pay {
    /**
     * 获取服务提供商。
     * @since 1000
     * @example
     * ```js
     * console.log(pay.getProvider())
     * ```
     */
    getProvider(): any;

    /**
     * 使用支付完成付款
     * @example
     * ```js
     * pay.pay({
     *   orderInfo: 'order1',
     *   success: function(data) {
     *     console.log(`handling success: ${data.code}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    pay(OBJECT: PayOBJECT): any;
  }

  /**
   *
   * @param orderInfo 订单信息
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface PayOBJECT {
    orderInfo: String;
    success: PayOBJECTSuccessCB;
    fail: PayOBJECTFailCB;
    complete: Function;
  }

  /**
   * 失败回调
   */
  type PayOBJECTFailCB = (failArg: PayFailFailArg) => any;

  /**
   * 失败回调
   * @param code 返回状态码
   * @param message 消息内容
   */
  interface PayFailFailArg {
    code: Integer;
    message: String;
  }

  /**
   * 成功回调
   */
  type PayOBJECTSuccessCB = (successArg: PaySuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param code 返回状态码
   * @param message 消息内容
   * @param result 支付结果
   */
  interface PaySuccessSuccessArg {
    code: Integer;
    message: String;
    result: String;
  }

  /**
   * 支付 pay
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/pay.html
   */
  const pay: Pay;
  export default pay;
}
