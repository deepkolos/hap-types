
/**
 * Wi-Fi wifi
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/wifi.html
 */
declare module '@system.wifi' {
  interface Wifi {
    
    /**
     * 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。
     * @example wifi.connect({
     *   SSID: '',
     *   BSSID: '',
     *   success: function() {
     *     console.log('connect wifi success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    connect(OBJECT: ConnectOBJECT): void;

    /**
     * 请求获取 Wi-Fi 列表，在 onscanned 事件中返回 Wi-Fi 列表数据。
     * @example wifi.scan({
     *   success: function() {
     *     console.log('scan success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    scan(OBJECT: ScanOBJECT): void;

    /**
     * 获取已连接中的 Wi-Fi 信息
     * @example wifi.onstatechanged = function(data) {
     *   console.log(`handling wifi state changed: ${data.state}`)
     * }
     * 
     */
    getConnectedWifi(OBJECT: GetConnectedWifiOBJECT): void;
  }


  /**
   * 
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetConnectedWifiOBJECT {
   success: GetConnectedWifiOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type GetConnectedWifiOBJECTSuccessCB = (successArg: GetConnectedWifiSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param SSID Wi-Fi 的 SSID
   * @param BSSID Wi-Fi 的 BSSID
   * @param secure Wi-Fi 是否安全
   * @param signalStrength Wi-Fi 信号强度
   */
  interface GetConnectedWifiSuccessSuccessArg {
   SSID: String;
   BSSID: String;
   secure: Boolean;
   signalStrength: Number;
  }

  /**
   * 
   * @param success 扫描请求发起成功
   * @param fail 扫描请求发起失败
   * @param complete 执行结束后的回调
   */
  interface ScanOBJECT {
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param SSID Wi-Fi 设备的 SSID
   * @param BSSID Wi-Fi 设备的 BSSID
   * @param password Wi-Fi 设备密码
   * @param success 成功回调，此时 Wi-Fi 已经成功连接上
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface ConnectOBJECT {
   SSID: String;
   BSSID: String;
   password: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  const wifi: Wifi;
  export default wifi;
}