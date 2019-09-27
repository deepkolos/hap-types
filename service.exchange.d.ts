/**
 * 交换数据 exchange
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/exchange.html
 */
declare module '@service.exchange' {
  interface Exchange {
    /**
     * 读取数据
     */
    get(OBJECT: GetOBJECT): String;

    /**
     * 发布数据到快应用平台
     */
    set(OBJECT: SetOBJECT): any;

    /**
     * 从快应用平台删除数据
     */
    remove(OBJECT: RemoveOBJECT): any;

    /**
     * 从快应用平台清除数据
     */
    clear(OBJECT: ClearOBJECT): any;

    /**
     * 授权应用获取数据。同签名的应用不用授权，默认有读取权限
     */
    grantPermission(OBJECT: GrantPermissionOBJECT): any;

    /**
     * 取消授权应用获取数据。不能取消同签名应用的读取授权
     */
    revokePermission(OBJECT: RevokePermissionOBJECT): any;
  }

  /**
   *
   * @param package 取消授权的应用包名
   * @param key 数据的 key。如果为空，则取消当前所有 key 的授权
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface RevokePermissionOBJECT {
    package: String;
    key: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param package 授权应用的包名
   * @param sign 授权应用的签名 SHA-256
   * @param key 数据的 key。如果为空，则授权当前所有 key 的读取权限
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface GrantPermissionOBJECT {
    package: String;
    sign: String;
    key: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface ClearOBJECT {
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param key 数据的 key
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface RemoveOBJECT {
    key: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param key 数据的 key
   * @param value 数据的值
   * @param scope 数据发布的空间类型，支持 application，global，默认为 application
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface SetOBJECT {
    key: String;
    value: String;
    scope: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param package 数据发布方的包名，scope 为 application 时必须提供，为 global 时必须为空
   * @param sign 数据发布方签名的 SHA-256，scope 为 application 时必须提供，为 global 时必须为空
   * @param scope 数据发布的空间类型，支持 application 和 global，默认为 application
   * @param key 数据的 key
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface GetOBJECT {
    package: String;
    sign: String;
    scope: String;
    key: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  const exchange: Exchange;
  export default exchange;
}
