/// <reference path="./types.d.ts"/>

/**
 * 网络状态 network
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/network.html
 */
declare module '@system.network' {
  interface Network {
    /**
     * 获取网络类型
     * @example
     * ```js
     * network.getType({
     *   success: function(data) {
     *     console.log(`handling success: ${data.type}`)
     *   }
     * })
     * ```
     */
    getType(OBJECT: GetTypeOBJECT): any;

    /**
     * 监听网络连接状态。如果多次调用，仅最后一次调用生效
     * @example
     * ```js
     * network.subscribe({
     *   callback: function(data) {
     *     console.log('handling callback')
     *   }
     * })
     * ```
     */
    subscribe(OBJECT: SubscribeOBJECT): any;

    /**
     * 取消监听网络连接状态
     * @example
     * ```js
     * network.unsubscribe()
     * ```
     */
    unsubscribe(): any;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅[可选] 1050+
   * @param callback 每次网络发生变化，都会被回调[可选]
   * @param fail 失败回调，可能是因为缺乏权限[可选]
   */
  interface SubscribeOBJECT {
    reserved?: Boolean;
    callback?: SubscribeOBJECTCallbackCB;
    fail?: Function;
  }

  /**
   * 每次网络发生变化，都会被回调
   */
  type SubscribeOBJECTCallbackCB = (
    callbackArg: SubscribeCallbackCallbackArg
  ) => any;

  /**
   * 每次网络发生变化，都会被回调
   * @param metered 是否按照流量计费[可选]
   * @param type 网络类型，可能的值为 2g，3g，4g，wifi，none[可选]
   */
  interface SubscribeCallbackCallbackArg {
    metered?: Boolean;
    type?: String;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调，可能是因为缺乏权限[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetTypeOBJECT {
    success?: GetTypeOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetTypeOBJECTSuccessCB = (successArg: GetTypeSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param metered 是否按照流量计费[可选]
   * @param type 网络类型，可能的值为 2g，3g，4g，wifi，none[可选]
   */
  interface GetTypeSuccessSuccessArg {
    metered?: Boolean;
    type?: String;
  }

  /**
   * 网络状态 network
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/network.html
   */
  const network: Network;
  export default network;
}
