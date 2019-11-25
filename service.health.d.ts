/// <reference path="./types.d.ts"/>

/**
 * 健康 health
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/health.html
 */
declare module '@service.health' {
  interface Health {
    /**
     * 是否支持提供每日步数的功能。
     * @example
     * ```js
     * health.hasStepsOfDay({
     *   success: function(data) {
     *     console.log(`handling success support：${data.support}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail!, code = ${code}`)
     *   }
     * })
     * ```
     */
    hasStepsOfDay(OBJECT: HasStepsOfDayOBJECT): any;

    /**
     * 获取每个自然日的步数，返回的是调用接口时，用户今天已经累计的步数。
     * @example
     * ```js
     * health.getTodaySteps({
     *   success: function(data) {
     *     console.log(`handling success steps${data.steps}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail!, code = ${code}`)
     *   }
     * })
     * ```
     */
    getTodaySteps(OBJECT: GetTodayStepsOBJECT): any;

    /**
     * 获取最近七个自然日每天的步数，包括今天。
     * @example
     * ```js
     * health.getLastWeekSteps({
     *   success: function(data) {
     *     for (const i in data.stepsList) {
     *       console.log(
     *         `handling success date: ${data.stepsList[i].date} steps: ${
     *           data.stepsList[i].steps
     *         }`
     *       )
     *     }
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail!, code = ${code}`)
     *   }
     * })
     * ```
     */
    getLastWeekSteps(OBJECT: GetLastWeekStepsOBJECT): any;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetLastWeekStepsOBJECT {
    success?: GetLastWeekStepsOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetLastWeekStepsOBJECTSuccessCB = (
    successArg: GetLastWeekStepsSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param stepsList 最近七天步数列表数据[可选]
   */
  interface GetLastWeekStepsSuccessSuccessArg {
    stepsList?: GetLastWeekStepsSuccessArgStepsListArray;
  }

  /**
   * 最近七天步数列表数据
   */
  type GetLastWeekStepsSuccessArgStepsListArray = Array<
    GetLastWeekStepsStepsListStepsListItem
  >;

  /**
   * 最近七天步数列表数据
   * @param date 日期(2019-04-08)[可选]
   * @param steps 日期对应的步数[可选]
   */
  interface GetLastWeekStepsStepsListStepsListItem {
    date?: String;
    steps?: Number;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetTodayStepsOBJECT {
    success?: GetTodayStepsOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetTodayStepsOBJECTSuccessCB = (
    successArg: GetTodayStepsSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param steps 返回当天步数[可选]
   */
  interface GetTodayStepsSuccessSuccessArg {
    steps?: Number;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface HasStepsOfDayOBJECT {
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 健康 health
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/health.html
   */
  const health: Health;
  export default health;
}
