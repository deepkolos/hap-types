/**
 * 微博账户 wbaccount
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/wbaccount.html
 */
declare module '@service.wbaccount' {
  interface Wbaccount {
    /**
     * 获取当前的微博登录方式
     */
    getType(): any;

    /**
     * 进行微博授权
     * @example
     * ```js
     * wbaccount.authorize({
     *   redirectUri: 'https://api.weibo.com/oauth2/default.html',
     *   scope: 'follow_app_official_microblog',
     *   success: function(data) {
     *     console.log('handling success. accessToken=' + data.accessToken)
     *   },
     *   fail: function(data, code) {
     *     console.log('handling fail, result data=' + data + ', code=' + code)
     *   },
     *   cancel: function() {
     *     console.log('handling cancel')
     *   }
     * })
     * ```
     */
    authorize(OBJECT: AuthorizeOBJECT): any;
  }

  /**
   *
   * @param redirectUri 授权回调地址，与微博开放平台配置保持一致，默认可填写 https://api.weibo.com/oauth2/default.html
   * @param scope 申请 scope 权限所需参数，可一次申请多个 scope 权限，用逗号分隔。示例：follow_app_official_microblog，可参考：http://open.weibo.com/wiki/Scope
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   */
  interface AuthorizeOBJECT {
    redirectUri: String;
    scope: String;
    success: AuthorizeOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
  }

  /**
   * 成功回调
   */
  type AuthorizeOBJECTSuccessCB = (
    successArg: AuthorizeSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param accessToken 授权 token
   * @param expiresIn 过期时间
   * @param uid 用户 uid
   * @param refreshToken 刷新 token，可用于刷新授权 token 有效期
   * @param phone 用户输入的手机号码
   */
  interface AuthorizeSuccessSuccessArg {
    accessToken: String;
    expiresIn: Number;
    uid: String;
    refreshToken: String;
    phone: String;
  }

  /**
   * 微博账户 wbaccount
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/wbaccount.html
   */
  const wbaccount: Wbaccount;
  export default wbaccount;
}
