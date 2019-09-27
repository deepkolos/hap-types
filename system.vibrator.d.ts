/**
 * 震动 vibrator
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/vibrator.html
 */
declare module '@system.vibrator' {
  interface Vibrator {
    /**
     * 触发震动
     * @example
     * ```js
     * vibrator.vibrate({
     *   mode: 'long'
     * })
     * ```
     */
    vibrate(OBJECT: VibrateOBJECT): any;
  }

  /**
   *
   * @param mode 振动模式，"long"表示长振动，"short"表示短振动。默认为 long 1030+
   */
  interface VibrateOBJECT {
    mode: String;
  }

  const vibrator: Vibrator;
  export default vibrator;
}
