
/**
 * 音频 audio
 * manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/audio.html
 */
declare module '@system.audio' {
  interface Audio {
    
    /**
     * 开始播放音频
     * @example audio.play()
     * 
     */
    play(): void;

    /**
     * 暂停播放音频
     * @example audio.pause()
     * 
     */
    pause(): void;

    /**
     * 停止音频播放，可以通过 play 重新播放音频
     * @example audio.stop()
     * 
     */
    stop(): void;

    /**
     * 获取当前播放状态数据
     * @example let currentTime = audio.currentTime
     * audio.currentTime = 5
     * 
     */
    getPlayState(OBJECT: GetPlayStateOBJECT): void;

    /**
     * 
     * @example audio.ontimeupdate = function() {
     *   console.log(`audio current time: ${audio.currentTime}`)
     * }
     * audio.ontimeupdate = null
     * audio.onprevious = function() {
     *   audio.src = "uri";
     *   audio.tilte="上一首歌名";
     *   audio.play();
     * };
     * 
     */
    play(): void;
  }


  /**
   * 
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetPlayStateOBJECT {
   success: GetPlayStateOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type GetPlayStateOBJECTSuccessCB = (successArg: GetPlayStateSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param state 播放状态,分别为'play','pause','stop'
   * @param src 当前播放的音频媒体 uri，停止时返回空字符串
   * @param currentTime 当前音频的当前进度，单位秒,停止时返回-1
   * @param autoplay 当前音频是否在自动播放
   * @param loop 当前音频是否在循环播放
   * @param volume 当前音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0]
   * @param muted 当前音频是否在静音播放
   * @param notificationVisible 当前音频是否正在通知栏中显示音频播放状态
   */
  interface GetPlayStateSuccessSuccessArg {
   state: String;
   src: String;
   currentTime: Number;
   autoplay: Boolean;
   loop: Boolean;
   volume: Number;
   muted: Boolean;
   notificationVisible: Boolean;
  }

  const audio: Audio;
  export default audio;
}