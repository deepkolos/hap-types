/// <reference path="./types.d.ts"/>

/**
 * 通知消息 notification
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/notification.html
 */
declare module '@system.notification' {
  interface Notification {
    /**
     * 显示通知
     * @example
     * ```js
     * notification.show({
     *   contentTitle: 'title',
     *   clickAction: {
     *     uri: '/index.html?index=1'
     *   }
     * })
     * ```
     */
    show(OBJECT: ShowOBJECT): any;
  }

  /**
   *
   * @param contentTitle 标题[可选]
   * @param contentText 内容[可选]
   * @param clickAction 通知点击后触发动作的信息[可选]
   */
  interface ShowOBJECT {
    contentTitle?: String;
    contentText?: String;
    clickAction?: ShowOBJECTClickAction;
  }

  /**
   * 通知点击后触发动作的信息
   * @param uri 点击通知后跳转的页面地址。支持的格式包括：以"/"开头的应用内页面的路径；例：/about以非"/"开头的应用内页面的名称;例：About特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页可以通过"?param1=value1"的方式添加参数，参数可以在页面中通过this.param1的方式使用
   */
  interface ShowOBJECTClickAction {
    uri: String;
  }

  /**
   * 通知消息 notification
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/notification.html
   */
  const notification: Notification;
  export default notification;
}
