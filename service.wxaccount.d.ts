/// <reference path="./types.d.ts"/>

/**
 * 微信账户 wxaccount
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/wxaccount.html
 */
declare module '@service.wxaccount' {
  interface Wxaccount {
    /**
     * 获取当前的微信登陆方式
     */
    getType(): any;

    /**
     * 发起微信登陆，调用之前应该先使用 getType 函数查询 APP 登陆方式是否被支持
     */
    authorize(OBJECT: AuthorizeOBJECT): any;

    /**
     *
     */
    getType(): any;
  }

  /**
   *
   * @param scope 应用授权作用域，如获取用户个人信息则填写 snsapi_userinfo，微信关于 scope 的说明
   * @param state 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止 csrf 攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加 session 进行校验[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param cancel 取消回调[可选]
   */
  interface AuthorizeOBJECT {
    scope: String;
    state?: String;
    success?: AuthorizeOBJECTSuccessCB;
    fail?: Function;
    cancel?: Function;
  }

  /**
   * 成功回调
   */
  type AuthorizeOBJECTSuccessCB = (
    successArg: AuthorizeSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param code 用于换取 accessToken 的 code，方法参考微信的文档[可选]
   * @param state 第三方程序发送时用来标识其请求的唯一性的标志，由第三方程序调用 sendReq 时传入，由微信终端回传，state 字符串长度不能超过 1K[可选]
   * @param lang 微信客户端当前语言[可选]
   * @param country 微信用户当前国家信息[可选]
   */
  interface AuthorizeSuccessSuccessArg {
    code?: String;
    state?: String;
    lang?: String;
    country?: String;
  }

  /**
   * 微信账户 wxaccount
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/wxaccount.html
   */
  const wxaccount: Wxaccount;
  export default wxaccount;
}
