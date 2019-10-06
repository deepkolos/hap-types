/// <reference path="./types.d.ts"/>

/**
 * 设备信息 device
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/device.html
 */
declare module '@system.device' {
  interface Device {
    /**
     * 获取设备信息
     * @example
     * ```js
     * device.getInfo({
     *   success: function(ret) {
     *     console.log(`handling success， brand = ${ret.brand}`)
     *   }
     * })
     * ```
     */
    getInfo(OBJECT: GetInfoOBJECT): any;

    /**
     * 批量获取设备标识，需要用户授权
     * @example
     * ```js
     * device.getId({
     *   type: ['device', 'mac'],
     *   success: function(data) {
     *     console.log(`handling success: ${data.device}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getId(OBJECT: GetIdOBJECT): any;

    /**
     * 获取设备唯一标识。需要用户授权
     * @since 1000
     */
    getDeviceId(OBJECT: GetDeviceIdOBJECT): any;

    /**
     * 获取用户唯一标识
     * @since 1000
     */
    getUserId(OBJECT: GetUserIdOBJECT): any;

    /**
     * 获取广告唯一标识
     * @since 1000
     */
    getAdvertisingId(OBJECT: GetAdvertisingIdOBJECT): any;

    /**
     * 获取设备序列号
     * @since 1040
     */
    getSerial(OBJECT: GetSerialOBJECT): any;

    /**
     * 获取存储空间的总大小
     * @since 1000
     */
    getTotalStorage(OBJECT: GetTotalStorageOBJECT): any;

    /**
     * 获取存储空间的可用大小
     * @since 1000
     */
    getAvailableStorage(OBJECT: GetAvailableStorageOBJECT): any;

    /**
     * 返回 CPU 信息
     * @since 1000
     * @example
     * ```js
     * var device = require('@system.device')
     * var platform = device.platform
     * var versionName = platform.versionName
     * var versionCode = platform.versionCode
     * ```
     */
    getCpuInfo(OBJECT: GetCpuInfoOBJECT): GetCpuInfoReturn;
  }

  /**
   * getCpuInfo的返回值
   * @param versionName 运行平台版本名称
   * @param versionCode 运行平台版本号
   */
  interface GetCpuInfoReturn {
    versionName: String;
    versionCode: Integer;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetCpuInfoOBJECT {
    success: GetCpuInfoOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetCpuInfoOBJECTSuccessCB = (
    successArg: GetCpuInfoSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param cpuInfo CPU 信息。在 Android 上返回的是/proc/cpuinfo 文件的内容
   */
  interface GetCpuInfoSuccessSuccessArg {
    cpuInfo: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetAvailableStorageOBJECT {
    success: GetAvailableStorageOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetAvailableStorageOBJECTSuccessCB = (
    successArg: GetAvailableStorageSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param availableStorage 存储空间的可用大小，单位是 Byte。在 Android 上返回的是外部存储的可用大小
   */
  interface GetAvailableStorageSuccessSuccessArg {
    availableStorage: Long;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetTotalStorageOBJECT {
    success: GetTotalStorageOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetTotalStorageOBJECTSuccessCB = (
    successArg: GetTotalStorageSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param totalStorage 存储空间的总大小，单位是 Byte。在 Android 上返回的是外部存储的总大小
   */
  interface GetTotalStorageSuccessSuccessArg {
    totalStorage: Long;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetSerialOBJECT {
    success: GetSerialOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetSerialOBJECTSuccessCB = (
    successArg: GetSerialSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param serial 设备序列号
   */
  interface GetSerialSuccessSuccessArg {
    serial: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetAdvertisingIdOBJECT {
    success: GetAdvertisingIdOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetAdvertisingIdOBJECTSuccessCB = (
    successArg: GetAdvertisingIdSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param advertisingId 广告唯一标识
   */
  interface GetAdvertisingIdSuccessSuccessArg {
    advertisingId: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetUserIdOBJECT {
    success: GetUserIdOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetUserIdOBJECTSuccessCB = (
    successArg: GetUserIdSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param userId 设备唯一标识。在 Android 上返回 androidid
   */
  interface GetUserIdSuccessSuccessArg {
    userId: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetDeviceIdOBJECT {
    success: GetDeviceIdOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetDeviceIdOBJECTSuccessCB = (
    successArg: GetDeviceIdSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param deviceId 设备唯一标识。在 Android 上返回 IMEI 或 MEID
   */
  interface GetDeviceIdSuccessSuccessArg {
    deviceId: String;
  }

  /**
   *
   * @param type 支持 device、mac、user、advertising 1000+四种类型，可提供一至多个
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetIdOBJECT {
    type: Array<any>;
    success: GetIdOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetIdOBJECTSuccessCB = (successArg: GetIdSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param device 设备唯一标识。在 Android 上返回 IMEI 或 MEID
   * @param mac 设备的 mac 地址。在 Android M 及以上返回固定值：02:00:00:00:00:00
   * @param user 用户唯一标识。在 Android 上返回 androidid
   * @param advertising 广告唯一标识 1000+
   */
  interface GetIdSuccessSuccessArg {
    device: String;
    mac: String;
    user: String;
    advertising: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetInfoOBJECT {
    success: GetInfoOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetInfoOBJECTSuccessCB = (successArg: GetInfoSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param brand 设备品牌
   * @param manufacturer 设备生产商
   * @param model 设备型号
   * @param product 设备代号
   * @param osType 操作系统名称
   * @param osVersionName 操作系统版本名称
   * @param osVersionCode 操作系统版本号
   * @param platformVersionName 运行平台版本名称
   * @param platformVersionCode 运行平台版本号
   * @param language 系统语言
   * @param region 系统地区
   * @param screenWidth 屏幕宽
   * @param screenHeight 屏幕高
   * @param windowWidth 可使用窗口宽度 1030+
   * @param windowHeight 可使用窗口高度 1030+
   * @param statusBarHeight 状态栏高度 1030+
   * @param screenDensity 设备的屏幕密度 1040+
   */
  interface GetInfoSuccessSuccessArg {
    brand: String;
    manufacturer: String;
    model: String;
    product: String;
    osType: String;
    osVersionName: String;
    osVersionCode: Integer;
    platformVersionName: String;
    platformVersionCode: Integer;
    language: String;
    region: String;
    screenWidth: Integer;
    screenHeight: Integer;
    windowWidth: Integer;
    windowHeight: Integer;
    statusBarHeight: Integer;
    screenDensity: Float;
  }

  /**
   * 设备信息 device
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/device.html
   */
  const device: Device;
  export default device;
}
