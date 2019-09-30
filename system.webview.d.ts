/**
 * 打开网页 webview
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/webview.html
 */
declare module '@system.webview' {
  interface Webview {
    /**
     * 打开网页，标题栏样式与打开 webview 的页面的标题栏样式相同，在 webview 的 useragent 后追加内容，格式是 hap/<平台版本号>/<厂商标识> <平台应用包名>/<平台应用版本号> <应用名>/<应用版本号> (<来源信息>)。“来源信息”与 app 接口的 getInfo 方法返回结果中的 source 字段相同。
     * @example
     * ```js
     * system.go('/detail?param1=value1')
     * ```
     */
    loadUrl(OBJECT: LoadUrlOBJECT): any;
  }

  /**
   *
   * @param url 要加载的页面 url
   * @param allowthirdpartycookies 是否支持第三方 cookies，设置为 true 时开启接收第三方 cookies。 注意：allowthirdpartycookies只支持安卓 5.0 及以上系统。5.0 以下默认为 true 1030+
   */
  interface LoadUrlOBJECT {
    url: String;
    allowthirdpartycookies: Boolean;
  }

  /**
   * 打开网页 webview
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/webview.html
   */
  const webview: Webview;
  export default webview;
}
