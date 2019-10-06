/// <reference path="./types.d.ts"/>

/**
 * 应用管理 package
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/package.html
 */
declare module '@system.package' {
  interface Pkg {
    /**
     * 检测应用是否存在。支持检测原生应用是否已安装。
     * @example
     * ```js
     * pkg.hasInstalled({
     *   package: 'com.hap.app',
     *   success: function(data) {
     *     console.log(`handling success: ${data.result}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    hasInstalled(OBJECT: HasInstalledOBJECT): any;

    /**
     * 安装应用。支持安装原生应用。
     * @example
     * ```js
     * pkg.install({
     *   package: 'com.hap.app',
     *   success: function(data) {
     *     console.log(`handling success: ${data.result}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    install(OBJECT: InstallOBJECT): any;
  }

  /**
   *
   * @param package 应用包名
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface InstallOBJECT {
    package: String;
    success: InstallOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type InstallOBJECTSuccessCB = (successArg: InstallSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param result 是否成功发起安装操作
   */
  interface InstallSuccessSuccessArg {
    result: Boolean;
  }

  /**
   *
   * @param package 应用包名
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface HasInstalledOBJECT {
    package: String;
    success: HasInstalledOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type HasInstalledOBJECTSuccessCB = (
    successArg: HasInstalledSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param result 应用是否存在
   */
  interface HasInstalledSuccessSuccessArg {
    result: Boolean;
  }

  /**
   * 应用管理 package
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/package.html
   */
  const pkg: Pkg;
  export default pkg;
}
