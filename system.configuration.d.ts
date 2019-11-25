/// <reference path="./types.d.ts"/>

/**
 * 应用配置 configuration
 * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/configuration.html
 */
declare module '@system.configuration' {
  interface Configuration {
    /**
     * 获取应用当前的语言环境。默认使用系统的语言环境，会因为设置或系统语言环境改变而发生变化
     * @example
     * ```js
     * const locale = configuration.getLocale()
     * console.log(locale.language)
     * ```
     */
    getLocale(): GetLocaleReturn;

    /**
     * 设置应用的语言环境。设置完成后，应用会按照新的语言环境来更新页面，并回调onConfigurationChanged1060+生命周期函数。当系统语言发生变化或应用重新进入时，当前语言环境会重置为系统语言；Web组件与Fetch接口在请求Header中会携带对应的Accept-Language
     * @example
     * ```js
     * configuration.setLocale({
     *   "language": "zh",
     *   "countryOrRegion": "CN"
     * })
     * ```
     */
    setLocale(): any;
  }

  /**
   * getLocale的返回值
   * @param language 语言[可选]
   * @param countryOrRegion 国家或地区[可选]
   */
  interface GetLocaleReturn {
    language?: String;
    countryOrRegion?: String;
  }

  /**
   * 应用配置 configuration
   * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/configuration.html
   */
  const configuration: Configuration;
  export default configuration;
}
