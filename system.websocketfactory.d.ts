/// <reference path="./types.d.ts"/>

/**
 * WebSocket
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/websocket.html
 */
declare module '@system.websocketfactory' {
  interface Websocketfactory {
    /**
     * 创建 websocket 实例
     * @example
     * ```js
     * ws.onerror = function(data) {
     *   console.log(`onerror data.data = ${data.data}`)
     * }
     * ```
     */
    create(OBJECT: CreateOBJECT): WebSocket;
  }

  /**
   *
   * @param url 请求 url， 必须是 wss 或 ws 协议
   * @param header 请求头，header 中不能设置 Referer，User-Agent设置在1040版本开始支持[可选]
   * @param protocols 子协议组[可选]
   */
  interface CreateOBJECT {
    url: String;
    header?: Object;
    protocols?: Stringarray;
  }

  /**
   * WebSocket
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/websocket.html
   */
  const websocketfactory: Websocketfactory;
  export default websocketfactory;
}
