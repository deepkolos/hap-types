/**
 * 账号 account
 * @后台运行限制 禁止使用。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/account.html
 */
declare module '@service.account' {
  interface Account {
    /**
     * 获取服务提供商。
     * @example
     * ```js
     * console.log(account.getProvider())
     * ```
     */
    getProvider(): any;

    /**
     * 进行 OAuth 授权。
     * @example
     * ```js
     * account.authorize({
     *   type: 'code',
     *   redirectUri: 'http://www.example.com/',
     *   success: function(data) {
     *     console.log(`handling success: ${data.code}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    authorize(OBJECT: AuthorizeOBJECT): any;

    /**
     * 获得用户基本信息。
     * @example
     * ```js
     * account.getProfile({
     *   token: 'abcdefg',
     *   success: function(data) {
     *     console.log(`handling success: ${data.nickname}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getProfile(OBJECT: GetProfileOBJECT): any;
  }

  /**
   *
   * @param token 访问令牌
   * @param success 成功回调
   * @param fail 失败回调，返回失败原因
   * @param complete 执行结束后的回调
   */
  interface GetProfileOBJECT {
    token: String;
    success: GetProfileOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetProfileOBJECTSuccessCB = (
    successArg: GetProfileSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param openid 用户的 openid，可能为空
   * @param id 用户的 user id，可能为空
   * @param unionid 用户在开放平台上的唯一标示符，本字段在满足一定条件下才会返回（需要在厂商的开放平台上额外申请）
   * @param nickname 用户的昵称，可能为空
   * @param avatar 用户的头像图片地址，可能为空，按照分辨率组织，当只有一个分辨率时，可以使用 default 对应的图片地址
   */
  interface GetProfileSuccessSuccessArg {
    openid: String;
    id: String;
    unionid: String;
    nickname: String;
    avatar: Object;
  }

  /**
   *
   * @param type 授权码模式为 code，简化模式为 token。
   * @param redirectUri 重定向 URI。
   * @param scope 申请的权限范围，目前只支持一种 scope，假如不填则 getProfile 只返回 openId。 scope.baseProfile：获取用户基本信息。
   * @param state 可以指定任意值，认证服务器会原封不动地返回这个值。
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface AuthorizeOBJECT {
    type: String;
    redirectUri: Uri;
    scope: String;
    state: String;
    success: AuthorizeOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type AuthorizeOBJECTSuccessCB = (
    successArg: AuthorizeSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param state 请求时同字段指定的任意值。
   * @param code 授权码模式下可用，返回的授权码。
   * @param accessToken 简化模式下可用，返回的访问令牌。
   * @param tokenType 简化模式下可用，访问令牌类型。
   * @param expiresIn 简化模式下可用，访问令牌过期时间，单位为秒，如果通过其他方式设置，则此处可能为空。
   * @param scope 简化模式下可用，实际权限范围，如果与申请一致，则此处可能为空。
   */
  interface AuthorizeSuccessSuccessArg {
    state: String;
    code: String;
    accessToken: String;
    tokenType: String;
    expiresIn: Number;
    scope: String;
  }

  /**
   * 账号 account
   * @后台运行限制 禁止使用。 后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/account.html
   */
  const account: Account;
  export default account;
}
