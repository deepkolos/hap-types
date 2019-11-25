/// <reference path="./types.d.ts"/>

/**
 * 屏幕亮度 brightness
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/brightness.html
 */
declare module '@system.brightness' {
  interface Brightness {
    /**
     * 获得当前屏幕亮度值
     * @example
     * ```js
     * brightness.getValue({
     *   success: function(data) {
     *     console.log(`handling success, value = ${data.value}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getValue(OBJECT: GetValueOBJECT): any;

    /**
     * 设置当前屏幕亮度值
     * @example
     * ```js
     * brightness.setValue({
     *   value: 100,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    setValue(OBJECT: SetValueOBJECT): any;

    /**
     * 获得当前屏幕亮度模式
     * @example
     * ```js
     * brightness.getMode({
     *   success: function(data) {
     *     console.log(`handling success, mode = ${data.mode}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getMode(OBJECT: GetModeOBJECT): any;

    /**
     * 设置当前屏幕亮度模式
     * @example
     * ```js
     * brightness.setMode({
     *   mode: 1,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    setMode(OBJECT: SetModeOBJECT): any;

    /**
     * 设置是否保持常亮状态
     * @since 1060
     * @example
     * ```js
     * brightness.setKeepScreenOn({
     *   keepScreenOn: true,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    setKeepScreenOn(OBJECT: SetKeepScreenOnOBJECT): any;
  }

  /**
   *
   * @param keepScreenOn 是否保持屏幕常亮
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SetKeepScreenOnOBJECT {
    keepScreenOn: Boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param mode 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SetModeOBJECT {
    mode: Integer;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetModeOBJECT {
    success?: GetModeOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetModeOBJECTSuccessCB = (successArg: GetModeSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param mode 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度[可选]
   */
  interface GetModeSuccessSuccessArg {
    mode?: Integer;
  }

  /**
   *
   * @param value 屏幕亮度，取值范围 0-255
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SetValueOBJECT {
    value: Integer;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetValueOBJECT {
    success?: GetValueOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetValueOBJECTSuccessCB = (successArg: GetValueSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param value 屏幕亮度，取值范围 0-255[可选]
   */
  interface GetValueSuccessSuccessArg {
    value?: Integer;
  }

  /**
   * 屏幕亮度 brightness
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/brightness.html
   */
  const brightness: Brightness;
  export default brightness;
}
