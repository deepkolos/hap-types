/// <reference path="./types.d.ts"/>

/**
 * 上传下载 request
 * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/request.html
 */
declare module '@system.request' {
  interface Request {
    /**
     * 上传文件
     * @example
     * ```js
     * request.upload({
     *   url: 'http://www.example.com',
     *   files: [
     *     {
     *       uri: 'internal://xxx/xxx/test',
     *       name: 'file1',
     *       filename: 'test.png'
     *     }
     *   ],
     *   data: [
     *     {
     *       name: 'param1',
     *       value: 'value1'
     *     }
     *   ],
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    upload(OBJECT: UploadOBJECT): any;

    /**
     * 下载文件
     * @example
     * ```js
     * request.download({
     *   url: 'http://www.example.com',
     *   success: function(data) {
     *     console.log(`handling success${data.token}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    download(OBJECT: DownloadOBJECT): any;

    /**
     * 监听下载任务
     * @example
     * ```js
     * request.onDownloadComplete({
     *   token: '123',
     *   success: function(data) {
     *     console.log(`handling success${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    onDownloadComplete(OBJECT: OnDownloadCompleteOBJECT): any;
  }

  /**
   *
   * @param token download 接口返回的 token
   * @param success 成功返回的回调函数
   * @param fail 失败的回调函数
   * @param complete 结束的回调函数（调用成功、失败都会执行）
   */
  interface OnDownloadCompleteOBJECT {
    token: String;
    success: OnDownloadCompleteOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功返回的回调函数
   */
  type OnDownloadCompleteOBJECTSuccessCB = (
    successArg: OnDownloadCompleteSuccessSuccessArg
  ) => any;

  /**
   * 成功返回的回调函数
   * @param uri 下载文件的 Uri
   */
  interface OnDownloadCompleteSuccessSuccessArg {
    uri: String;
  }

  /**
   *
   * @param url 资源 url
   * @param header 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent 设置在 1040 版本开始支持。
   * @param description 下载描述，会用于通知栏标题。默认为文件名 1010+
   * @param filename 下载文件名。默认从网络请求或 url 中获取 1010+
   * @param success 成功返回的回调函数
   * @param fail 失败的回调函数
   * @param complete 结束的回调函数（调用成功、失败都会执行）
   */
  interface DownloadOBJECT {
    url: String;
    header: String;
    description: String;
    filename: String;
    success: DownloadOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功返回的回调函数
   */
  type DownloadOBJECTSuccessCB = (successArg: DownloadSuccessSuccessArg) => any;

  /**
   * 成功返回的回调函数
   * @param token 下载的 token，根据此 token 获取下载状态
   */
  interface DownloadSuccessSuccessArg {
    token: String;
  }

  /**
   *
   * @param url 资源 url
   * @param header 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent 设置在1040版本开始支持。
   * @param method 默认为 POST，可以是： POST, PUT
   * @param files 需要上传的文件列表，使用 multipart/form-data 方式提交
   * @param data HTTP 请求中其他额外的 form data 1000+
   * @param success 成功返回的回调函数
   * @param fail 失败的回调函数
   * @param complete 结束的回调函数（调用成功、失败都会执行）
   */
  interface UploadOBJECT {
    url: String;
    header: Object;
    method: String;
    files: UploadOBJECTFilesArray;
    data: UploadOBJECTDataArray;
    success: UploadOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功返回的回调函数
   */
  type UploadOBJECTSuccessCB = (successArg: UploadSuccessSuccessArg) => any;

  /**
   * 成功返回的回调函数
   * @param code 服务器状态 code
   * @param data 如果服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri 临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示
   * @param headers 服务器 response 的所有 header
   */
  interface UploadSuccessSuccessArg {
    code: Integer;
    data: String;
    headers: Object;
  }

  /**
   * HTTP 请求中其他额外的 form data
   * @since 1000
   */
  type UploadOBJECTDataArray = Array<UploadDataDataItem>;

  /**
   * HTTP 请求中其他额外的 form data
   * @since 1000
   * @param name form 元素的名称。
   * @param value form 元素的值。
   */
  interface UploadDataDataItem {
    name: String;
    value: String;
  }

  /**
   * 需要上传的文件列表，使用 multipart/form-data 方式提交
   */
  type UploadOBJECTFilesArray = Array<UploadFilesFilesItem>;

  /**
   * 需要上传的文件列表，使用 multipart/form-data 方式提交
   * @param filename multipart 提交时，header 中的文件名
   * @param name multipart 提交时，表单的项目名,默认 file
   * @param uri 文件的本地地址
   * @param type 文件的 Content-Type 格式,默认会根据 filename 或者 uri 的后缀获取
   */
  interface UploadFilesFilesItem {
    filename: String;
    name: String;
    uri: String;
    type: String;
  }

  /**
   * 上传下载 request
   * @后台运行限制 manifest 中申请后可用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/request.html
   */
  const request: Request;
  export default request;
}
