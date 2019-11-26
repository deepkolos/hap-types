/// <reference path="./types.d.ts"/>

/**
 * 音频 audio
 * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/audio.html
 */
declare module '@system.audio' {
  interface Audio {
    /**
     * 开始播放音频
     * @example
     * ```js
     * audio.play()
     * ```
     */
    play(): any;

    /**
     * 暂停播放音频
     * @example
     * ```js
     * audio.pause()
     * ```
     */
    pause(): any;

    /**
     * 停止音频播放，可以通过 play 重新播放音频
     * @since 1030
     * @example
     * ```js
     * audio.stop()
     * ```
     */
    stop(): any;

    /**
     * 获取当前播放状态数据
     * @since 1050
     * @example
     * ```js
     * let currentTime = audio.currentTime
     * audio.currentTime = 5
     * ```
     */
    getPlayState(OBJECT: GetPlayStateOBJECT): any;

    /**
     *
     * @example
     * ```js
     * audio.ontimeupdate = function() {
     *   console.log(`audio current time: ${audio.currentTime}`)
     * }
     * audio.ontimeupdate = null
     * audio.onprevious = function() {
     *   audio.src = "uri";
     *   audio.tilte="上一首歌名";
     *   audio.play();
     * };
     * ```
     */
    play(): any;

    /**
     * 在调用 play 方法后或者 autoplay 为 true 时的回调事件
     */
    onplay?: Function;

    /**
     * 在调用 pause 方法后的回调事件
     */
    onpause?: Function;

    /**
     * 在调用 stop 方法后的回调事件
     * @since 1030
     */
    onstop?: Function;

    /**
     * 第一次获取到音频数据的回调事件
     */
    onloadeddata?: Function;

    /**
     * 播放结束时的回调事件
     */
    onended?: Function;

    /**
     * 播放时长变化时的回调事件
     */
    ondurationchange?: Function;

    /**
     * 播放发生错误时的回调事件
     */
    onerror?: Function;

    /**
     * 播放进度变化时触发，触发频率 4HZ
     */
    ontimeupdate?: Function;

    /**
     * 通知栏点击上一首按钮时触发
     * @since 1040
     */
    onprevious?: Function;

    /**
     * 通知栏点击下一首按钮时触发
     * @since 1040
     */
    onnext?: Function;

    /**
     * 播放的音频媒体 uri
     * @readable true
     * @writeable true
     */
    src: String;

    /**
     * 音频的当前进度，单位秒，对值设置可以调整播放进度
     * @readable true
     * @writeable true
     */
    currentTime: Number;

    /**
     * 音频的播放时长，单位秒，未知返回 NaN
     * @readable true
     * @writeable false
     */
    readonly duration: Number;

    /**
     * 音频是否自动播放，默认 false
     * @readable true
     * @writeable true
     */
    autoplay: Boolean;

    /**
     * 音频是否循环播放，默认 false
     * @readable true
     * @writeable true
     */
    loop: Boolean;

    /**
     * 音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0]
     * @readable true
     * @writeable true
     */
    volume: Number;

    /**
     * 音频是否静音，默认 false
     * @readable true
     * @writeable true
     */
    muted: Boolean;

    /**
     * 音频是否在通知栏中显示音频播放状态，默认 true
     * @since 1010
     * @readable true
     * @writeable true
     */
    notificationVisible: Boolean;

    /**
     * 音频标题，未设置时显示正在播放或者暂停播放
     * @since 1040
     * @readable true
     * @writeable true
     */
    title: String;

    /**
     * 歌手名，未设置时显示正在播放或者暂停播放
     * @since 1040
     * @readable true
     * @writeable true
     */
    artist: String;

    /**
     * 封面图片uri路径
     * @since 1040
     * @readable true
     * @writeable true
     */
    cover: String;

    /**
     * 指定使用音频类型，可设置的值有 music、voicecall，值为 music 时使用扬声器播放，voicecall 时使用听筒播放，默认为 music。
     * @since 1040
     * @readable true
     * @writeable true
     */
    streamType: String;
  }

  /**
   *
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetPlayStateOBJECT {
    success?: GetPlayStateOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetPlayStateOBJECTSuccessCB = (
    successArg: GetPlayStateSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param state 播放状态,分别为'play','pause','stop'[可选]
   * @param src 当前播放的音频媒体 uri，停止时返回空字符串[可选]
   * @param currentTime 当前音频的当前进度，单位秒,停止时返回-1[可选]
   * @param autoplay 当前音频是否在自动播放[可选]
   * @param loop 当前音频是否在循环播放[可选]
   * @param volume 当前音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0][可选]
   * @param muted 当前音频是否在静音播放[可选]
   * @param notificationVisible 当前音频是否正在通知栏中显示音频播放状态[可选]
   */
  interface GetPlayStateSuccessSuccessArg {
    state?: String;
    src?: String;
    currentTime?: Number;
    autoplay?: Boolean;
    loop?: Boolean;
    volume?: Number;
    muted?: Boolean;
    notificationVisible?: Boolean;
  }

  /**
   * 音频 audio
   * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/audio.html
   */
  const audio: Audio;
  export default audio;
}
