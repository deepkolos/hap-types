
/**
 * 桌面图标 shortcut
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/shortcut.html
 */
declare module '@system.shortcut' {
  interface Shortcut {
    
    /**
     * 获取桌面图标是否创建
     * @example shortcut.hasInstalled({
     *   success: function() {
     *     console.log('handling success')
     *   }
     * })
     * 
     */
    hasInstalled(OBJECT: HasInstalledOBJECT): void;

    /**
     * 创建桌面图标，每次创建都需要用户授权
     * @example shortcut.systemPromptEnabled = false
     * let enabled = shortcut.systemPromptEnabled
     * console.log('system prompt enabled: ' + enabled)
     * 
     */
    install(OBJECT: InstallOBJECT): void;
  }


  /**
   * 
   * @param message 权限弹窗上的说明文字，用于向用户解释为什么要创建桌面图标
   * @param success 创建成功
   * @param fail 创建失败
   * @param complete 执行结束后的回调
   */
  interface InstallOBJECT {
   message: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param success 成功回调。参数：true 已创建，false 未创建
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface HasInstalledOBJECT {
   success: Function;
   fail: Function;
   complete: Function;
  }

  const shortcut: Shortcut;
  export default shortcut;
}