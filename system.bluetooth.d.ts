/**
 * 蓝牙 bluetooth
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/bluetooth.html
 */
declare module '@system.bluetooth' {
  interface Bluetooth {
    /**
     * 初始化蓝牙模块
     * @example bluetooth.openAdapter({
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    openAdapter(OBJECT: OpenAdapterOBJECT): any;

    /**
     * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 bluetooth.openAdapter 成对调用。
     * @example bluetooth.closeAdapter({
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    closeAdapter(OBJECT: CloseAdapterOBJECT): any;

    /**
     * 获取本机蓝牙适配器状态。
     * @example bluetooth.onadapterstatechange = function(data) {
     *   console.log('adapterState changed, now is', data.available)
     * }
     */
    getAdapterState(OBJECT: GetAdapterStateOBJECT): any;

    /**
     * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 bluetooth.stopDevicesDiscovery 方法停止搜索。
     * @example bluetooth.startDevicesDiscovery({
     *   services: ['FEE7'],
     *   success: function() {
     *     console.log('success')
     *   }
     * })
     */
    startDevicesDiscovery(OBJECT: StartDevicesDiscoveryOBJECT): any;

    /**
     * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
     * @example bluetooth.stopDevicesDiscovery({
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    stopDevicesDiscovery(OBJECT: StopDevicesDiscoveryOBJECT): any;

    /**
     * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
     * @example function ab2hex(buffer) {
     *   var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function(bit) {
     *     return ('00' + bit.toString(16)).slice(-2)
     *   })
     *   return hexArr.join('')
     * }
     * bluetooth.ondevicefound = function(data) {
     *   console.log('new device list has founded')
     *   data.devices.forEach(device => {
     *     console.log(`handling find new devive:${JSON.stringify(device)}`)
     *     console.log(`handling advertisData = ${ab2hex(device.advertisData)}`)
     *
     *     for (let key in device.serviceData) {
     *       console.log(
     *         `handling serviceData: uuid = ${key}, serviceData = ${ab2hex(
     *           device.serviceData[key]
     *         )}`
     *       )
     *     }
     *   })
     * }
     */
    getDevices(OBJECT: GetDevicesOBJECT): any;

    /**
     * 根据 uuid 获取处于已连接状态的设备。
     * @example bluetooth.getConnectedDevices({
     *   success: function(data) {
     *     console.log(data)
     *     if (data.devices[0]) {
     *       console.log(data.devices[0].name)
     *     }
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    getConnectedDevices(OBJECT: GetConnectedDevicesOBJECT): any;

    /**
     * 连接低功耗蓝牙设备。若快应用有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
     * @example bluetooth.createBLEConnection({
     *   deviceId: deviceId,
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    createBLEConnection(OBJECT: CreateBLEConnectionOBJECT): any;

    /**
     * 断开与低功耗蓝牙设备的连接。
     * @example bluetooth.closeBLEConnection({
     *   deviceId: deviceId,
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    closeBLEConnection(OBJECT: CloseBLEConnectionOBJECT): any;

    /**
     * 获取蓝牙设备所有服务(service)。
     * @example bluetooth.getBLEDeviceServices({
     *   deviceId: deviceId,
     *   success: function(data) {
     *     data.services.forEach(service => {
     *       console.log(
     *         `handling device services: uuid = ${service.uuid}, isPrimary = ${
     *           service.isPrimary
     *         }`
     *       )
     *     })
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    getBLEDeviceServices(OBJECT: GetBLEDeviceServicesOBJECT): any;

    /**
     * 获取蓝牙设备某个服务中所有特征值(characteristic)。
     * @example bluetooth.getBLEDeviceCharacteristics({
     *   deviceId: deviceId,
     *   serviceId: serviceId,
     *   success: function(data) {
     *     data.characteristics.forEach(characteristic => {
     *       console.log(
     *         `handling device characteristic : uuid = ${
     *           characteristic.uuid
     *         }, can read = ${characteristic.properties.read}`
     *       )
     *     })
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    getBLEDeviceCharacteristics(OBJECT: GetBLEDeviceCharacteristicsOBJECT): any;

    /**
     * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
     * @example bluetooth.readBLECharacteristicValue({
     *   // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
     *   deviceId: deviceId,
     *   // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
     *   serviceId: serviceId,
     *   // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
     *   characteristicId: characteristicId,
     *   success: function() {
     *     // 执行操作成功，读取的值会在onblecharacteristicvaluechange 接口中上报
     *     console.log('success')
     *   }
     * })
     */
    readBLECharacteristicValue(OBJECT: ReadBLECharacteristicValueOBJECT): any;

    /**
     * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
     * @example bluetooth.writeBLECharacteristicValue({
     *   // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound接口中获取
     *   deviceId: deviceId,
     *   // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
     *   serviceId: serviceId,
     *   // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
     *   characteristicId: characteristicId,
     *   // 这里的value是ArrayBuffer类型
     *   value: buffer,
     *   success: function() {
     *     console.log('success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   },
     *   complete: function() {
     *     console.log('complete')
     *   }
     * })
     */
    writeBLECharacteristicValue(OBJECT: WriteBLECharacteristicValueOBJECT): any;

    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
     * @example bluetooth.onbleconnectionstatechange = function(data) {
     *   console.log(
     *     `handling device state change: deviceId = ${data.deviceId}, connected = ${
     *       data.connected
     *     }`
     *   )
     * }
     */
    notifyBLECharacteristicValueChange(
      OBJECT: NotifyBLECharacteristicValueChangeOBJECT
    ): any;

    /**
     * 监听蓝牙适配器状态变化事件
     */
    onadapterstatechange?: (data: OnadapterstatechangeData) => void;

    /**
     * 监听寻找到新设备的事件
     */
    ondevicefound?: (data: OndevicefoundData) => void;

    /**
     * 监听低功耗蓝牙设备的特征值变化。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
     */
    onblecharacteristicvaluechange?: (
      data: OnblecharacteristicvaluechangeData
    ) => void;
  }

  /**
   *
   * @param deviceId 蓝牙设备 id
   * @param serviceId 蓝牙特征值对应服务的 uuid
   * @param characteristicId 蓝牙特征值的 uuid
   * @param value 特征值最新的值
   */
  interface OnblecharacteristicvaluechangeData {
    deviceId: String;
    serviceId: String;
    characteristicId: String;
    value: Arraybuffer;
  }

  /**
   *
   * @param devices 新搜索到的设备列表，devices 返回值见 getDevices
   */
  interface OndevicefoundData {
    devices: Object[];
  }

  /**
   *
   * @param available 蓝牙适配器是否可用
   * @param discovering 蓝牙适配器是否处于搜索状态
   */
  interface OnadapterstatechangeData {
    available: Boolean;
    discovering: Boolean;
  }

  /**
   *
   * @param deviceId 蓝牙设备 id
   * @param serviceId 蓝牙特征值对应服务的 uuid
   * @param characteristicId 蓝牙特征值的 uuid
   * @param state 是否启用 notify
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface NotifyBLECharacteristicValueChangeOBJECT {
    deviceId: String;
    serviceId: String;
    characteristicId: String;
    state: Boolean;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param deviceId 蓝牙设备 id
   * @param serviceId 蓝牙特征值对应服务的 uuid
   * @param characteristicId 蓝牙特征值的 uuid
   * @param value 蓝牙设备特征值对应的二进制值
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface WriteBLECharacteristicValueOBJECT {
    deviceId: String;
    serviceId: String;
    characteristicId: String;
    value: Arraybuffer;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param deviceId 蓝牙设备 id
   * @param serviceId 蓝牙特征值对应服务的 uuid
   * @param characteristicId 蓝牙特征值的 uuid
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface ReadBLECharacteristicValueOBJECT {
    deviceId: String;
    serviceId: String;
    characteristicId: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   * @param deviceId 蓝牙设备 id
   * @param serviceId 蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
   */
  interface GetBLEDeviceCharacteristicsOBJECT {
    success: GetBLEDeviceCharacteristicsOBJECTSuccessCB;
    fail: Function;
    complete: Function;
    deviceId: String;
    serviceId: String;
  }

  /**
   * 成功回调。
   */
  type GetBLEDeviceCharacteristicsOBJECTSuccessCB = (
    successArg: GetBLEDeviceCharacteristicsSuccessSuccessArg
  ) => any;

  /**
   * 成功回调。
   * @param characteristics 设备服务列表
   */
  interface GetBLEDeviceCharacteristicsSuccessSuccessArg {
    characteristics: Object[];
  }

  /**
   *
   * @param deviceId 蓝牙设备 id
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface GetBLEDeviceServicesOBJECT {
    deviceId: String;
    success: GetBLEDeviceServicesOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调。
   */
  type GetBLEDeviceServicesOBJECTSuccessCB = (
    successArg: GetBLEDeviceServicesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调。
   * @param services 设备服务列表
   */
  interface GetBLEDeviceServicesSuccessSuccessArg {
    services: Object[];
  }

  /**
   *
   * @param deviceId 用于区分设备的 id
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface CloseBLEConnectionOBJECT {
    deviceId: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param deviceId 用于区分设备的 id
   * @param timeout 超时时间，单位 ms，不填表示不会超时
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface CreateBLEConnectionOBJECT {
    deviceId: String;
    timeout: Number;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   * @param services 蓝牙设备主 service 的 uuid 列表
   */
  interface GetConnectedDevicesOBJECT {
    success: GetConnectedDevicesOBJECTSuccessCB;
    fail: Function;
    complete: Function;
    services: String[];
  }

  /**
   * 成功回调。
   */
  type GetConnectedDevicesOBJECTSuccessCB = (
    successArg: GetConnectedDevicesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调。
   * @param devices uuid 对应的的已连接设备列表
   */
  interface GetConnectedDevicesSuccessSuccessArg {
    devices: Object[];
  }

  /**
   *
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface GetDevicesOBJECT {
    success: GetDevicesOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调。
   */
  type GetDevicesOBJECTSuccessCB = (
    successArg: GetDevicesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调。
   * @param devices 蓝牙模块生效期间已发现的蓝牙设备
   */
  interface GetDevicesSuccessSuccessArg {
    devices: Object[];
  }

  /**
   *
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface StopDevicesDiscoveryOBJECT {
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param services 要搜索的主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。
   * @param allowDuplicatesKey 默认值为 false。是否允许重复上报同一设备。如果允许重复上报，则 bluetooth.ondevicefound 方法会多次上报同一设备，但是 RSSI 值会有不同。
   * @param interval 单位毫秒，默认值为 0。上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface StartDevicesDiscoveryOBJECT {
    services: String[];
    allowDuplicatesKey: Boolean;
    interval: Number;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调
   */
  interface GetAdapterStateOBJECT {
    success: GetAdapterStateOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调。
   */
  type GetAdapterStateOBJECTSuccessCB = (
    successArg: GetAdapterStateSuccessSuccessArg
  ) => any;

  /**
   * 成功回调。
   * @param available 蓝牙适配器是否可用
   * @param discovering 是否正在搜索设备
   */
  interface GetAdapterStateSuccessSuccessArg {
    available: Boolean;
    discovering: Boolean;
  }

  /**
   *
   * @param operateAdapter 是否关闭系统蓝牙开关。设置为 true，调用时会关闭系统蓝牙开关。默认值 false。
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface CloseAdapterOBJECT {
    operateAdapter: Boolean;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param operateAdapter 是否打开系统蓝牙开关。设置为 true，在系统蓝牙开关关闭的情况下会弹框提示是否打开。默认值 false。
   * @param success 成功回调。
   * @param fail 失败回调。
   * @param complete 执行结束后的回调。
   */
  interface OpenAdapterOBJECT {
    operateAdapter: Boolean;
    success: Function;
    fail: Function;
    complete: Function;
  }

  const bluetooth: Bluetooth;
  export default bluetooth;
}
