
/**
 * 二维码 barcode
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/barcode.html
 */
declare module '@system.barcode' {
  interface Barcode {
    
    /**
     * 扫描二维码
     * @example barcode.scan({
     *   success: function(data) {
     *     console.log(`handling success: ${data.result}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    scan(OBJECT: ScanOBJECT): void;
  }


  /**
   * 
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface ScanOBJECT {
   success: ScanOBJECTSuccessCB;
   fail: Function;
   cancel: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type ScanOBJECTSuccessCB = (successArg: ScanSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param result 解析后的内容
   */
  interface ScanSuccessSuccessArg {
   result: String;
  }

  const barcode: Barcode;
  export default barcode;
}