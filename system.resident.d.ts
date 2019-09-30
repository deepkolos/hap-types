/**
 * 后台运行 resident
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/resident.html
 */
declare module '@system.resident' {
  interface Resident {
    /**
     * 启动后台运行。此接口可多次调用，最后一次调用时的 desc 参数作为描述文案显示到通知栏上(有音乐播放通知时，不显示本通知)。
     * @example
     * ```js
     * resident.start({
     *   desc: '备份进度 30%'
     * })
     * ```
     */
    start(OBJECT: StartOBJECT): any;

    /**
     * 停止后台运行。即使start调用多次，stop调用一次即可停止后台运行。
     * @example
     * ```js
     * resident.stop()
     * ```
     */
    stop(): any;
  }

  /**
   *
   * @param desc 更新后台通知的描述信息
   */
  interface StartOBJECT {
    desc: String;
  }

  /**
   * 后台运行 resident
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/resident.html
   */
  const resident: Resident;
  export default resident;
}
