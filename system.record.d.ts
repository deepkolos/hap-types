/**
 * 录音 record
 * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/record.html
 */
declare module '@system.record' {
  interface Record {
    /**
     * 开始录音。
     * @example
     * ```js
     * record.start({
     *   duration: 10000,
     *   sampleRate: 8000,
     *   numberOfChannels: 1,
     *   encodeBitRate: 16000,
     *   format: 'aac',
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    start(OBJECT: StartOBJECT): any;

    /**
     * 停止录音。
     * @example
     * ```js
     * record.stop()
     * ```
     */
    stop(): any;
  }

  /**
   *
   * @param duration 录音时长，单位为 ms。如果 duration 为有效值将在达到指定值时停止录音 1010+
   * @param sampleRate 采样率。不同的音频格式所支持的采样率范围不同。对于 aac 格式，默认设置为 8000，建议使用 8000/16000/44100 1010+
   * @param numberOfChannels 录音通道数，有效值 1/2 1010+
   * @param encodeBitRate 编码码率。编码码率的取值与采样率和音频格式有关。对 aac 格式，建议按照下表中取值范围来选择编码码率 1010+
   * @param format 音频格式，有效值 3gpp/amr_nb/aac。缺省为 3gpp 1010+
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface StartOBJECT {
    duration: Number;
    sampleRate: Number;
    numberOfChannels: Number;
    encodeBitRate: Number;
    format: String;
    success: StartOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type StartOBJECTSuccessCB = (successArg: StartSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param uri 录音文件的存储路径，在应用的缓存目录中
   */
  interface StartSuccessSuccessArg {
    uri: String;
  }

  const record: Record;
  export default record;
}
