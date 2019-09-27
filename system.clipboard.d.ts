/**
 * 剪贴板 clipboard
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/clipboard.html
 */
declare module '@system.clipboard' {
  interface Clipboard {
    /**
     * 修改剪贴板内容
     * @example clipboard.set({
     *   text: 'text'
     * })
     */
    set(OBJECT: SetOBJECT): any;

    /**
     * 读取剪贴板内容
     * @example clipboard.get({
     *   success: function(data) {
     *     console.log(`handling success: ${data.text}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    get(OBJECT: GetOBJECT): any;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetOBJECT {
    success: GetOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetOBJECTSuccessCB = (successArg: GetSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param text 剪切板内容
   */
  interface GetSuccessSuccessArg {
    text: String;
  }

  /**
   *
   * @param text 需要放到剪切板的内容
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface SetOBJECT {
    text: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  const clipboard: Clipboard;
  export default clipboard;
}
