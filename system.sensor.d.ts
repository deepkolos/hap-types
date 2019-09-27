
/**
 * 传感器 sensor
 * 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/sensor.html
 */
declare module '@system.sensor' {
  interface Sensor {
    
    /**
     * 监听重力感应数据。如果多次调用，仅最后一次调用生效
     * @example sensor.subscribeAccelerometer({
     *   callback: function(ret) {
     *     console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
     *   }
     * })
     * 
     */
    subscribeAccelerometer(OBJECT: SubscribeAccelerometerOBJECT): void;

    /**
     * 取消监听重力感应数据
     * @example sensor.unsubscribeAccelerometer()
     * 
     */
    unsubscribeAccelerometer(): void;

    /**
     * 监听罗盘数据。如果多次调用，仅最后一次调用生效
     * @example sensor.subscribeCompass({
     *   callback: function(ret) {
     *     console.log(`handling callback, direction = ${ret.direction}`)
     *   }
     * })
     * 
     */
    subscribeCompass(OBJECT: SubscribeCompassOBJECT): void;

    /**
     * 取消监听罗盘数据
     * @example sensor.unsubscribeCompass()
     * 
     */
    unsubscribeCompass(): void;

    /**
     * 监听距离感应数据。如果多次调用，仅最后一次调用生效。
     * @example sensor.subscribeProximity({
     *   callback: function(ret) {
     *     console.log(`handling callback, distance = ${ret.distance}`)
     *   }
     * })
     * 
     */
    subscribeProximity(OBJECT: SubscribeProximityOBJECT): void;

    /**
     * 取消监听距离感应数据。
     * @example sensor.unsubscribeProximity()
     * 
     */
    unsubscribeProximity(): void;

    /**
     * 监听光线感应数据。如果多次调用，仅最后一次调用生效。
     * @example sensor.subscribeLight({
     *   callback: function(ret) {
     *     console.log(`handling callback, intensity = ${ret.intensity}`)
     *   }
     * })
     * 
     */
    subscribeLight(OBJECT: SubscribeLightOBJECT): void;

    /**
     * 取消监听光线感应数据。
     * @example sensor.unsubscribeLight()
     * 
     */
    unsubscribeLight(): void;

    /**
     * 监听计步传感器数据。如果多次调用，仅最后一次调用生效。
     * @example sensor.subscribeStepCounter({
     *   callback: function(ret) {
     *     console.log(`handling callback, steps = ${ret.steps}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    subscribeStepCounter(OBJECT: SubscribeStepCounterOBJECT): void;

    /**
     * 取消监听计步传感器数据。
     * @example sensor.unsubscribeStepCounter()
     * 
     */
    unsubscribeStepCounter(): void;
  }


  /**
   * 
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
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
  type SubscribeStepCounterOBJECTCallbackCB = (callbackArg: SubscribeStepCounterCallbackCallbackArg) => any;

  /**
   * 计步传感器数据变化后会回调此函数。
   * @param steps 计步传感器当前累计记录的步数。每次手机重启，这个值就会从 0 开始重新计算。
   */
  interface SubscribeStepCounterCallbackCallbackArg {
   steps: Number;
  }

  /**
   * 
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
   * @param callback 光线感应数据变化后会回调此函数。
   */
  interface SubscribeLightOBJECT {
   reserved: Boolean;
   callback: SubscribeLightOBJECTCallbackCB;
  }

  /**
   * 光线感应数据变化后会回调此函数。
   */
  type SubscribeLightOBJECTCallbackCB = (callbackArg: SubscribeLightCallbackCallbackArg) => any;

  /**
   * 光线感应数据变化后会回调此函数。
   * @param intensity 光线强度，单位为 lux
   */
  interface SubscribeLightCallbackCallbackArg {
   intensity: Number;
  }

  /**
   * 
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
   * @param callback 距离感应数据变化后会回调此函数。
   */
  interface SubscribeProximityOBJECT {
   reserved: Boolean;
   callback: SubscribeProximityOBJECTCallbackCB;
  }

  /**
   * 距离感应数据变化后会回调此函数。
   */
  type SubscribeProximityOBJECTCallbackCB = (callbackArg: SubscribeProximityCallbackCallbackArg) => any;

  /**
   * 距离感应数据变化后会回调此函数。
   * @param distance 手机距离，单位为 cm。
   */
  interface SubscribeProximityCallbackCallbackArg {
   distance: Number;
  }

  /**
   * 
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
   * @param callback 罗盘数据变化后会回调此函数。
   */
  interface SubscribeCompassOBJECT {
   reserved: Boolean;
   callback: SubscribeCompassOBJECTCallbackCB;
  }

  /**
   * 罗盘数据变化后会回调此函数。
   */
  type SubscribeCompassOBJECTCallbackCB = (callbackArg: SubscribeCompassCallbackCallbackArg) => any;

  /**
   * 罗盘数据变化后会回调此函数。
   * @param direction 面对的方向度数
   */
  interface SubscribeCompassCallbackCallbackArg {
   direction: Number;
  }

  /**
   * 
   * @param reserved 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
   * @param callback 重力感应数据变化后会回调此函数。
   */
  interface SubscribeAccelerometerOBJECT {
   reserved: Boolean;
   callback: SubscribeAccelerometerOBJECTCallbackCB;
  }

  /**
   * 重力感应数据变化后会回调此函数。
   */
  type SubscribeAccelerometerOBJECTCallbackCB = (callbackArg: SubscribeAccelerometerCallbackCallbackArg) => any;

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