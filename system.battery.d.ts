/**
 * 电量信息 battery
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/battery.html
 */
declare module '@system.battery' {
  interface Battery {
    /**
     * 获取当前设备的电量信息。
     * @example
     * ```js
     * battery.getStatus({
     *   success: function(data) {
     *     console.log(`handling success: ${data.level}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getStatus(OBJECT: GetStatusOBJECT): any;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetStatusOBJECT {
    success: GetStatusOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetStatusOBJECTSuccessCB = (
    successArg: GetStatusSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param charging 是否正在充电
   * @param level 当前电量，0.0 - 1.0 之间
   */
  interface GetStatusSuccessSuccessArg {
    charging: Boolean;
    level: Number;
  }

  const battery: Battery;
  export default battery;
}
