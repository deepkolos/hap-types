
/**
 * 系统音量 volume
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/volume.html
 */
declare module '@system.volume' {
  interface Volume {
    
    /**
     * 获取当前多媒体音量。
     * @example volume.getMediaValue({
     *   success: function(data) {
     *     console.log(`handling success: ${data.value}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    getMediaValue(OBJECT: GetMediaValueOBJECT): void;

    /**
     * 设置当前多媒体音量。
     * @example volume.setMediaValue({
     *   value: 0.5,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    setMediaValue(OBJECT: SetMediaValueOBJECT): void;
  }


  /**
   * 
   * @param value 设置的音量，0.0-1.0 之间。
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface SetMediaValueOBJECT {
   value: Number;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetMediaValueOBJECT {
   success: GetMediaValueOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type GetMediaValueOBJECTSuccessCB = (successArg: GetMediaValueSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param value 系统媒体当前音量，0.0-1.0 之间。
   */
  interface GetMediaValueSuccessSuccessArg {
   value: Number;
  }

  const volume: Volume;
  export default volume;
}