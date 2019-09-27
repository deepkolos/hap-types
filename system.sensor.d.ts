/**
 * 传感器 sensor
 * @后台运行限制 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/sensor.html
 */
declare module '@system.sensor' {
  interface Sensor {
    /**
     * 监听重力感应数据。如果多次调用，仅最后一次调用生效
     * @example
     * ```js
     * sensor.subscribeAccelerometer({
     *   callback: function(ret) {
     *     console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
     *   }
     * })
     * ```
     */
    subscribeAccelerometer(OBJECT: SubscribeAccelerometerOBJECT): any;

    /**
     * 取消监听重力感应数据
     * @example
     * ```js
     * sensor.unsubscribeAccelerometer()
     * ```
     */
    unsubscribeAccelerometer(): any;

    /**
     * 监听罗盘数据。如果多次调用，仅最后一次调用生效
     * @example
     * ```js
     * sensor.subscribeCompass({
     *   callback: function(ret) {
     *     console.log(`handling callback, direction = ${ret.direction}`)
     *   }
     * })
     * ```
     */
    subscribeCompass(OBJECT: SubscribeCompassOBJECT): any;

    /**
     * 取消监听罗盘数据
     * @example
     * ```js
     * sensor.unsubscribeCompass()
     * ```
     */
    unsubscribeCompass(): any;

    /**
     * 监听距离感应数据。如果多次调用，仅最后一次调用生效。
     * @since 1000
     * @example
     * ```js
     * sensor.subscribeProximity({
     *   callback: function(ret) {
     *     console.log(`handling callback, distance = ${ret.distance}`)
     *   }
     * })
     * ```
     */
    subscribeProximity(OBJECT: SubscribeProximityOBJECT): any;

    /**
     * 取消监听距离感应数据。
     * @since 1000
     * @example
     * ```js
     * sensor.unsubscribeProximity()
     * ```
     */
    unsubscribeProximity(): any;

    /**
     * 监听光线感应数据。如果多次调用，仅最后一次调用生效。
     * @since 1000
     * @example
     * ```js
     * sensor.subscribeLight({
     *   callback: function(ret) {
     *     console.log(`handling callback, intensity = ${ret.intensity}`)
     *   }
     * })
     * ```
     */
    subscribeLight(OBJECT: SubscribeLightOBJECT): any;

    /**
     * 取消监听光线感应数据。
     * @since 1000
     * @example
     * ```js
     * sensor.unsubscribeLight()
     * ```
     */
    unsubscribeLight(): any;

    /**
     * 监听计步传感器数据。如果多次调用，仅最后一次调用生效。
     * @since 1050
     * @example
     * ```js
     * sensor.subscribeStepCounter({
     *   callback: function(ret) {
     *     console.log(`handling callback, steps = ${ret.steps}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    subscribeStepCounter(OBJECT: SubscribeStepCounterOBJECT): any;

    /**
     * 取消监听计步传感器数据。
     * @since 1050
     * @example
     * ```js
     * sensor.unsubscribeStepCounter()
     * ```
     */
    unsubscribeStepCounter(): any;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param callback 计步传感器数据变化后会回调此函数。
   * @param fail 失败回调
   */
  interface SubscribeStepCounterOBJECT {
    reserved: Boolean;
    callback: SubscribeStepCounterOBJECTCallbackCB;
    fail: Function;
  }

  /**
   * 计步传感器数据变化后会回调此函数。
   */
  type SubscribeStepCounterOBJECTCallbackCB = (
    callbackArg: SubscribeStepCounterCallbackCallbackArg
  ) => any;

  /**
   * 计步传感器数据变化后会回调此函数。
   * @param steps 计步传感器当前累计记录的步数。每次手机重启，这个值就会从 0 开始重新计算。
   */
  interface SubscribeStepCounterCallbackCallbackArg {
    steps: Number;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param callback 光线感应数据变化后会回调此函数。
   */
  interface SubscribeLightOBJECT {
    reserved: Boolean;
    callback: SubscribeLightOBJECTCallbackCB;
  }

  /**
   * 光线感应数据变化后会回调此函数。
   */
  type SubscribeLightOBJECTCallbackCB = (
    callbackArg: SubscribeLightCallbackCallbackArg
  ) => any;

  /**
   * 光线感应数据变化后会回调此函数。
   * @param intensity 光线强度，单位为 lux
   */
  interface SubscribeLightCallbackCallbackArg {
    intensity: Number;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param callback 距离感应数据变化后会回调此函数。
   */
  interface SubscribeProximityOBJECT {
    reserved: Boolean;
    callback: SubscribeProximityOBJECTCallbackCB;
  }

  /**
   * 距离感应数据变化后会回调此函数。
   */
  type SubscribeProximityOBJECTCallbackCB = (
    callbackArg: SubscribeProximityCallbackCallbackArg
  ) => any;

  /**
   * 距离感应数据变化后会回调此函数。
   * @param distance 手机距离，单位为 cm。
   */
  interface SubscribeProximityCallbackCallbackArg {
    distance: Number;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param callback 罗盘数据变化后会回调此函数。
   */
  interface SubscribeCompassOBJECT {
    reserved: Boolean;
    callback: SubscribeCompassOBJECTCallbackCB;
  }

  /**
   * 罗盘数据变化后会回调此函数。
   */
  type SubscribeCompassOBJECTCallbackCB = (
    callbackArg: SubscribeCompassCallbackCallbackArg
  ) => any;

  /**
   * 罗盘数据变化后会回调此函数。
   * @param direction 面对的方向度数
   */
  interface SubscribeCompassCallbackCallbackArg {
    direction: Number;
  }

  /**
   *
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 1050+
   * @param callback 重力感应数据变化后会回调此函数。
   */
  interface SubscribeAccelerometerOBJECT {
    reserved: Boolean;
    callback: SubscribeAccelerometerOBJECTCallbackCB;
  }

  /**
   * 重力感应数据变化后会回调此函数。
   */
  type SubscribeAccelerometerOBJECTCallbackCB = (
    callbackArg: SubscribeAccelerometerCallbackCallbackArg
  ) => any;

  /**
   * 重力感应数据变化后会回调此函数。
   * @param x x 轴坐标
   * @param y y 轴坐标
   * @param z z 轴坐标
   */
  interface SubscribeAccelerometerCallbackCallbackArg {
    x: Integer;
    y: Integer;
    z: Integer;
  }

  const sensor: Sensor;
  export default sensor;
}
