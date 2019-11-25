/// <reference path="./types.d.ts"/>

/**
 * 发送短信 sms
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/sms.html
 */
declare module '@system.sms' {
  interface Sms {
    /**
     * 发送短信，每次发送都需要用户授权
     * @example
     * ```js
     * sms.send({
     *   address：'123456',
     *   content：'这是短信内容',
     *   success: function () {
     *     console.log('handling success')
     *   },
     *   fail: function (data, code) {
     *     console.log("handling fail, code=" + code);
     *   }
     * })
     * ```
     */
    send(OBJECT: SendOBJECT): any;

    /**
     * 获取手机短信内容，用于获取手机验证码等场景（仅允许获取 5 分钟内的应用短信）。 安全性：短信中通过增加应用签名 hash 信息，接口获取短信时通过 hash 来验证区分该应用的短信内容。 短信格式：11 位签名 hash 字符放到短信末尾，可通过 Debugger 工具获取。
     * @since 1050
     */
    readSafely(OBJECT: ReadSafelyOBJECT): any;
  }

  /**
   *
   * @param timeout 超时时间，单位是 ms，默认值为 60000（一分钟）[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface ReadSafelyOBJECT {
    timeout?: Long;
    success?: ReadSafelyOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type ReadSafelyOBJECTSuccessCB = (
    successArg: ReadSafelySuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param message 原始短信内容[可选]
   */
  interface ReadSafelySuccessSuccessArg {
    message?: String;
  }

  /**
   *
   * @param address 目标号码
   * @param content 短信内容（不可超过 70 字符）
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SendOBJECT {
    address: String;
    content: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 发送短信 sms
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/sms.html
   */
  const sms: Sms;
  export default sms;
}
