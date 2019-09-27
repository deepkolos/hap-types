/**
 * 应用上下文 app
 * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/app.html
 */
declare module '@system.app' {
  interface App {
    /**
     * 获取当前应用信息
     * @example console.log(JSON.stringify(app.getInfo()))
     */
    getInfo(): GetInfoReturn;
  }

  /**
   * getInfo的返回值
   * @param packageName 应用包名 1050+
   * @param icon 应用图标路径 1050+
   * @param name 应用名称
   * @param versionName 应用版本名称
   * @param versionCode 应用版本号
   * @param logLevel log 级别
   * @param source 应用来源
   */
  interface GetInfoReturn {
    packageName: String;
    icon: String;
    name: String;
    versionName: String;
    versionCode: Integer;
    logLevel: String;
    source: GetInfoReturnSource;
  }

  /**
   * 应用来源
   * @param packageName 来源 app 的包名，一级来源
   * @param type 来源类型，二级来源，值为 shortcut、push、url、barcode、nfc、bluetooth、other
   * @param extra 来源其他信息，与 type 相关，不同的 type，extra 中的字段会不同
   */
  interface GetInfoReturnSource {
    packageName: String;
    type: String;
    extra: Object;
  }

  const app: App;
  export default app;
}
