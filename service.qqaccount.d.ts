
/**
 * QQ 账户 qqaccount
 * 禁止使用。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/qqaccount.html
 */
declare module '@service.qqaccount' {
  interface Qqaccount {
    
    /**
     * 获取当前的 QQ 登陆方式

     */
    getType(): void;

    /**
     * 发起 qq 登陆，不同的登陆方式下，应该传入不同的参数，调用之前应该先使用 getType 函数查询当前的登陆方式．

     */
    authorize(OBJECT: AuthorizeOBJECT): void;

    /**
     * 

     */
    getType(): void;
  }


  /**
   * 
   * @param state client 端的状态值。用于第三方应用防止 CSRF 攻击，成功授权后回调时会原样带回。请务必严格按照流程检查用户与 state 参数状态的绑定。app 方式下不使用该参数
   * @param redirectUri 授权回调地址,APP 方式下,不使用该参数
   * @param scope 请求用户授权时向用户显示的可进行授权的列表。可填写的值是API 文档中列出的接口，以及一些动作型的授权（目前仅有：do_like），如果要填写多个接口名称，请用逗号隔开。
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   */
  interface AuthorizeOBJECT {
   state: String;
   redirectUri: String;
   scope: String;
   success: AuthorizeOBJECTSuccessCB;
   fail: Function;
   cancel: Function;
  }

  /**
   * 成功回调
   */
  type AuthorizeOBJECTSuccessCB = (successArg: AuthorizeSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param url QQ 回调给出的完整 url,仅在网页方式下会返回
   * @param code 用于换取 accessToken 的 Authorization_Code,仅在网页方式下会返回，通过 code 换取 AccessToken 的方法参考QQ 的文档
   * @param state 原始的 state 值,仅在网页方式下会返回
   * @param openId QQ 登陆后给该用户的唯一标示,仅在 app 方式下会返回
   * @param accessToken 用于访问 api 的 accessToken,仅在 app 方式下会返回
   * @param expiresIn accessToken 的有效时长，以秒为单位
   */
  interface AuthorizeSuccessSuccessArg {
   url: String;
   code: String;
   state: String;
   openId: String;
   accessToken: String;
   expiresIn: Number;
  }

  const qqaccount: Qqaccount;
  export default qqaccount;
}