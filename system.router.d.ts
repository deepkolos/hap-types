/// <reference path="./types.d.ts"/>

/**
 * 页面路由 router
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/router.html
 */
declare module '@system.router' {
  interface Router {
    /**
     * 跳转到应用内的某个页面
     */
    push(OBJECT: PushOBJECT): any;

    /**
     * 跳转到应用内的某个页面，当前页面无法返回
     * @example
     * ```js
     * router.replace({
     *   uri: '/test',
     *   params: {
     *     testId: '1'
     *   }
     * })
     * ```
     */
    replace(OBJECT: ReplaceOBJECT): any;

    /**
     * 返回指定页面
     * @example
     * ```js
     * // A页面, open page by name
     * router.push({
     *   uri: 'B'
     * })
     * // B页面, open page by name
     * router.push({
     *   uri: 'C'
     * })
     * // C页面, open page by name
     * router.push({
     *   uri: 'D'
     * })
     * // D页面, open page by name
     * router.push({
     *   uri: 'E'
     * })
     * // E页面不传入页面路径，返回至D页面
     * router.back()
     * // D页面不传入页面名称，返回至C页面
     * router.back()
     * // C页面传入页面路径，返回至A页面
     * router.back({
     *   path: '/A'
     * })
     * ```
     */
    back(OBJECT: BackOBJECT): any;

    /**
     * 清空所有历史页面记录，仅保留当前页面
     * @example
     * ```js
     * router.clear()
     * ```
     */
    clear(): any;

    /**
     * 获取当前页面栈的页面数量
     * @example
     * ```js
     * var length = router.getLength()
     * console.log(`page's length = ${length}`)
     * ```
     */
    getLength(): Number;

    /**
     * 获取当前页面状态
     * @example
     * ```js
     * var page = router.getState()
     * console.log(`page index = ${page.index}`)
     * console.log(`page name = ${page.name}`)
     * console.log(`page path = ${page.path}`)
     * ```
     */
    getState(): GetStateReturn;
  }

  /**
   * getState的返回值
   * @param index 当前页面在页面栈中的位置[可选]
   * @param name 当前页面的名称[可选]
   * @param path 当前页面的路径[可选]
   */
  interface GetStateReturn {
    index?: Number;
    name?: String;
    path?: String;
  }

  /**
   *
   * @param path 返回目标页面的路径，可以是以下几种取值：不传该参数，返回上一页面以"/"开头的应用内已打开页面的路径；例：/about。特殊的,如果 path 的值是"/",则跳转到页面名称为"/"的页,没有则跳转到首页注意点：path 需要是以"/"开头的当前应用已经打开的页面路径，否则均视为无效参数，返回上一页面若根据 path 未匹配到已经打开的页面，返回上一页面若根据 path 参数匹配到多个页面，返回至最后打开的页面[可选] 1020+
   */
  interface BackOBJECT {
    path?: String;
  }

  /**
   *
   * @param uri 要跳转到的 uri，可以是下面的格式：以"/"开头的应用内页面的路径；例：/about。以非"/"开头的应用内页面的名称;例：About。特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页
   * @param params 跳转时需要传递的数据，参数可以在页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型[可选]
   */
  interface ReplaceOBJECT {
    uri: String;
    params?: Object;
  }

  /**
   *
   * @param uri 要跳转到的 uri，可以是下面的格式：包含 schema 的完整 uri；目前支持的 schema 有 tel，sms 和 mailto，例如 tel:10086。以‘/’开头的应用内页面的路径；例：/about。以非‘/’开头的应用内页面的名称;例：About。特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页支持包含 schema 的完整 uri。对于带有 schema 的 uri，处理流程如下：查找 app 下所有 page 的 filter 设置来选择合适的 page 处理请求（参见manifest 文件）如果没有合适的 page 能够处理请求，会使用默认策略来处理请求。目前默认策略支持对 http、https、internal 这几种 schema 的处理如果默认策略也不能处理请求，会尝试使用系统中的应用来处理请求如果没有系统应用可以处理请求，会抛弃请求默认策略的处理逻辑：如果 schema 是 http/https，会用内置的 web 页面打开网页如果 schema 是 internal（参见文件组织），会根据 uri 的文件扩展名来确定文件类型，再调用系统中的应用打开文件如果 schema 是 hap（参见hap 链接），会跳转到 hap 链接 所支持的类型
   * @param params 跳转时需要传递的数据，跳转到短信发送页面时，可以通过body（1040+）插入短信内容；跳转到快应用页面时，参数可以在页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型[可选]
   */
  interface PushOBJECT {
    uri: String;
    params?: PushOBJECTParams;
  }

  /**
   * 跳转时需要传递的数据，跳转到短信发送页面时，可以通过body（1040+）插入短信内容；跳转到快应用页面时，参数可以在页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型
   * @param body 跳转时短信发送页面时携带的短信内容。[可选] 1040+
   * @param ___PARAMLAUNCH_FLAG\__ 快应用启动参数，目前仅支持"clearTask"，在启动目标页面时会清除除此页面外的其他页面。详见页面启动模式[可选] 1050+
   */
  interface PushOBJECTParams {
    body?: String;
    ___PARAMLAUNCH_FLAG__?: String;
  }

  /**
   * 页面路由 router
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/router.html
   */
  const router: Router;
  export default router;
}
