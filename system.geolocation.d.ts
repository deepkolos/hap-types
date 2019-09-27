/**
 * 地理位置 geolocation
 * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/geolocation.html
 */
declare module '@system.geolocation' {
  interface Geolocation {
    /**
     * 获取地理位置
     * @example
     * ```js
     * geolocation.getLocation({
     *   success: function(data) {
     *     console.log(
     *       `handling success: longitude = ${data.longitude}, latitude = ${
     *         data.latitude
     *       }`
     *     )
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getLocation(OBJECT: GetLocationOBJECT): any;

    /**
     * 获取系统当前支持的定位类型
     * @since 1010
     * @example
     * ```js
     * geolocation.getLocationType({
     *   success: function(data) {
     *     console.log(`handling success: locationType = ${data.types}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getLocationType(OBJECT: GetLocationTypeOBJECT): any;

    /**
     * 监听地理位置。如果多次调用，仅最后一次调用生效
     * @example
     * ```js
     * geolocation.subscribe({
     *   callback: function(data) {
     *     console.log(
     *       `handling success: longitude = ${data.longitude}, latitude = ${
     *         data.latitude
     *       }`
     *     )
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    subscribe(OBJECT: SubscribeOBJECT): any;

    /**
     * 取消监听地理位置
     * @example
     * ```js
     * geolocation.unsubscribe()
     * ```
     */
    unsubscribe(): any;

    /**
     * 获取支持的坐标系类型
     * @since 1050
     * @example
     * ```js
     * var types = geolocation.getSupportedCoordTypes()
     * ```
     */
    getSupportedCoordTypes(): any;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param coordType 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84 1050+
   * @param callback 每次位置信息发生变化，都会被回调
   * @param fail 失败回调，原因可能是用户拒绝
   */
  interface SubscribeOBJECT {
    reserved: Boolean;
    coordType: String;
    callback: SubscribeOBJECTCallbackCB;
    fail: Function;
  }

  /**
   * 每次位置信息发生变化，都会被回调
   */
  type SubscribeOBJECTCallbackCB = (
    callbackArg: SubscribeCallbackCallbackArg
  ) => any;

  /**
   * 每次位置信息发生变化，都会被回调
   * @param longitude 经度
   * @param latitude 纬度
   * @param accuracy 精确度 1040+
   * @param time 时间 1040+
   */
  interface SubscribeCallbackCallbackArg {
    longitude: Number;
    latitude: Number;
    accuracy: Number;
    time: Number;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetLocationTypeOBJECT {
    success: GetLocationTypeOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetLocationTypeOBJECTSuccessCB = (
    successArg: GetLocationTypeSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param types 支持的类型['gps','network']
   */
  interface GetLocationTypeSuccessSuccessArg {
    types: Array<any>;
  }

  /**
   *
   * @param timeout 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调
   * @param coordType 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84 1050+
   * @param success 成功回调
   * @param fail 失败回调，原因可能是用户拒绝
   * @param complete 执行结束后的回调
   */
  interface GetLocationOBJECT {
    timeout: Long;
    coordType: String;
    success: GetLocationOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetLocationOBJECTSuccessCB = (
    successArg: GetLocationSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param longitude 经度
   * @param latitude 纬度
   * @param accuracy 精确度 1040+
   * @param time 时间 1040+
   */
  interface GetLocationSuccessSuccessArg {
    longitude: Number;
    latitude: Number;
    accuracy: Number;
    time: Number;
  }

  const geolocation: Geolocation;
  export default geolocation;
}
