/// <reference path="./types.d.ts"/>

/**
 * 推送 push
 * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/push.html
 */
declare module '@service.push' {
  interface Push {
    /**
     * 获取服务提供商。
     * @since 1000
     * @example
     * ```js
     * console.log(push.getProvider())
     * ```
     */
    getProvider(): any;

    /**
     * 订阅 push，后续可以收到 push 消息（一般可在应用初始化的地方进行调用。比如在 app 的 onCreate 方法中调用。）
     * @example
     * ```js
     * push.subscribe({
     *   success: function(data) {
     *     console.log(
     *       `push.subscribe succeeded, result data = ${JSON.stringify(data)}`
     *     )
     *   },
     *   fail: function(data, code) {
     *     console.log(
     *       `push.subscribe failed, result data = ${JSON.stringify(
     *         data
     *       )}, code = ${code}`
     *     )
     *   },
     *   complete: function() {
     *     console.log('push.subscribe completed')
     *   }
     * })
     * ```
     */
    subscribe(OBJECT: SubscribeOBJECT): any;

    /**
     * 取消订阅（一般不建议调用，调用后 regId 失效，需要重新订阅获取新的 regId）
     * @example
     * ```js
     * push.unsubscribe({
     *   success: function(data) {
     *     console.log(
     *       `push.unsubscribe succeeded, result data = ${JSON.stringify(data)}`
     *     )
     *   },
     *   fail: function(data, code) {
     *     console.log(
     *       `push.unsubscribe failed, result data = ${JSON.stringify(
     *         data
     *       )}, code = ${code}`
     *     )
     *   },
     *   complete: function() {
     *     console.log('push.unsubscribe completed')
     *   }
     * })
     * ```
     */
    unsubscribe(OBJECT: UnsubscribeOBJECT): any;

    /**
     * 添加 push 事件回调（透传消息的 payload 内容可在此回调中收到）
     * @example
     * ```js
     * push.on({
     *   callback: function(ret) {
     *     console.log(`received pass through message, ret = ${JSON.stringify(ret)}`)
     *   }
     * })
     * ```
     */
    on(OBJECT: OnOBJECT): any;

    /**
     * 移除 push 事件回调，push.on中的callback不会再收到透传内容
     * @example
     * ```js
     * push.off()
     * ```
     */
    off(): any;
  }

  /**
   *
   * @param callback push 事件回调处理
   */
  interface OnOBJECT {
    callback: OnOBJECTCallbackCB;
  }

  /**
   * push 事件回调处理
   */
  type OnOBJECTCallbackCB = (callbackArg: OnCallbackCallbackArg) => any;

  /**
   * push 事件回调处理
   * @param messageId 消息 id[可选]
   * @param data 消息内容 payload[可选]
   */
  interface OnCallbackCallbackArg {
    messageId?: String;
    data?: String;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调，返回失败原因[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface UnsubscribeOBJECT {
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调，返回失败原因[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SubscribeOBJECT {
    success?: SubscribeOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type SubscribeOBJECTSuccessCB = (
    successArg: SubscribeSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param regId PushService 返回的注册 id，可用于针对某个用户发送消息[可选]
   */
  interface SubscribeSuccessSuccessArg {
    regId?: String;
  }

  /**
   * 推送 push
   * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/push.html
   */
  const push: Push;
  export default push;
}
