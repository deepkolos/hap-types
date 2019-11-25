/// <reference path="./types.d.ts"/>

/**
 * 数据请求 fetch
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/fetch.html
 */
declare module '@system.fetch' {
  interface Fetch {
    /**
     * 获取网络数据
     * @example
     * ```js
     * fetch.fetch({
     *   url: 'http://www.example.com',
     *   responseType: 'text',
     *   success: function(response) {
     *     console.log(`the status code of the response: ${response.code}`)
     *     console.log(`the data of the response: ${response.data}`)
     *     console.log(
     *       `the headers of the response: ${JSON.stringify(response.headers)}`
     *     )
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, errMsg = ${data}`)
     *     console.log(`handling fail, errCode = ${code}`)
     *   }
     * })
     *
     * // 我们也可以使用promise的方式处理回调
     * fetch
     *   .fetch({
     *     url: 'http://www.example.com',
     *     responseType: 'text'
     *   })
     *   .then(res => {
     *     const result = res.data
     *
     *     console.log(`the status code of the response: ${result.code}`)
     *     console.log(`the data of the response: ${result.data}`)
     *     console.log(
     *       `the headers of the response: ${JSON.stringify(result.headers)}`
     *     )
     *   })
     *   .catch(error => {
     *     console.log(`handling fail, errMsg = ${error.data}`)
     *     console.log(`handling fail, errCode = ${error.code}`)
     *   })
     * ```
     */
    fetch(OBJECT: FetchOBJECT): any;
  }

  /**
   *
   * @param url 资源 url
   * @param data 请求的参数，可以是字符串，或者是 js 对象、arraybuffer 对象。参考 data与Content-Type关系 部分[可选] 1030+
   * @param header 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent 设置在1040版本开始支持。示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"}[可选]
   * @param method 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT[可选]
   * @param responseType 支持返回类型是 text，json，file，arraybuffer，默认会根据服务器返回 header 中的 Content-Type 确定返回类型，详见 success返回值。[可选] 1030+
   * @param success 成功返回的回调函数[可选]
   * @param fail 失败的回调函数，可能会因为权限失败[可选]
   * @param complete 结束的回调函数（调用成功、失败都会执行）[可选]
   */
  interface FetchOBJECT {
    url: String;
    data?: String | Object | Arraybuffer;
    header?: Object;
    method?: String;
    responseType?: String;
    success?: FetchOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功返回的回调函数
   */
  type FetchOBJECTSuccessCB = (successArg: FetchSuccessSuccessArg) => any;

  /**
   * 成功返回的回调函数
   * @param code 服务器状态 code[可选]
   * @param data 参考 responseType与success中data关系 部分[可选] 1030+
   * @param headers 服务器 response 的所有 header[可选]
   */
  interface FetchSuccessSuccessArg {
    code?: Integer;
    data?: String | Object | Arraybuffer;
    headers?: Object;
  }

  /**
   * 数据请求 fetch
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/fetch.html
   */
  const fetch: Fetch;
  export default fetch;
}
