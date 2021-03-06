/// <reference path="./types.d.ts"/>

/**
 * 文件存储 file
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/file.html
 */
declare module '@system.file' {
  interface File {
    /**
     * 将源文件移动到指定位置，接口中使用的 URI 描述请参考文件组织
     * @example
     * ```js
     * file.move({
     *   srcUri: 'internal://cache/path/to/file',
     *   dstUri: 'internal://files/path/to/file',
     *   success: function(uri) {
     *     console.log(`move success: ${uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    move(OBJECT: MoveOBJECT): any;

    /**
     * 将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考文件组织
     * @example
     * ```js
     * file.copy({
     *   srcUri: 'internal://cache/path/to/file',
     *   dstUri: 'internal://files/path/to/file',
     *   success: function(uri) {
     *     console.log(`copy success: ${uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    copy(OBJECT: CopyOBJECT): any;

    /**
     * 获取指定目录下的文件列表，接口中使用的 URI 描述请参考文件组织
     * @example
     * ```js
     * file.list({
     *   uri: 'internal://files/movies/',
     *   success: function(data) {
     *     console.log(data.fileList)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    list(OBJECT: ListOBJECT): any;

    /**
     * 获取本地文件的文件信息，接口中使用的 URI 描述请参考文件组织
     * @example
     * ```js
     * file.get({
     *   uri: 'internal://files/path/to/file',
     *   success: function(data) {
     *     console.log(data.uri)
     *     console.log(data.length)
     *     console.log(data.lastModifiedTime)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    get(OBJECT: GetOBJECT): any;

    /**
     * 删除本地存储的文件，接口中使用的 URI 描述请参考文件组织
     * @example
     * ```js
     * file.delete({
     *   uri: 'internal://files/path/to/file',
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    delete(OBJECT: DeleteOBJECT): any;

    /**
     * 写文本到文件
     * @since 1010
     * @example
     * ```js
     * file.writeText({
     *   uri: 'internal://files/work/demo.txt',
     *   text: 'test',
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    writeText(OBJECT: WriteTextOBJECT): any;

    /**
     * 写 Buffer 到文件
     * @since 1010
     * @example
     * ```js
     * file.writeArrayBuffer({
     *   uri: 'internal://files/work/demo',
     *   buffer: buffer,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    writeArrayBuffer(OBJECT: WriteArrayBufferOBJECT): any;

    /**
     * 从文件中读取文本
     * @since 1010
     * @example
     * ```js
     * file.readText({
     *   uri: 'internal://files/work/demo.txt',
     *   success: function(data) {
     *     console.log('text: ' + data.text)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    readText(OBJECT: ReadTextOBJECT): any;

    /**
     * 从文件中读取 Buffer
     * @since 1010
     * @example
     * ```js
     * file.readArrayBuffer({
     *   uri: 'internal://files/work/demo',
     *   position: 100,
     *   length: 100,
     *   success: function(data) {
     *     console.log('buffer.length: ' + data.buffer.length)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    readArrayBuffer(OBJECT: ReadArrayBufferOBJECT): any;

    /**
     * 判断文件或目录是否存在
     * @since 1060
     * @example
     * ```js
     * file.access({
     *   uri: 'internal://files/test',
     *   success: function(data) {
     *     console.log(`handling success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    access(OBJECT: AccessOBJECT): any;

    /**
     * 创建目录
     * @since 1060
     * @example
     * ```js
     * file.mkdir({
     *   uri: 'internal://files/dir/',
     *   success: function(data) {
     *     console.log(`handling success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    mkdir(OBJECT: MkdirOBJECT): any;

    /**
     * 删除目录
     * @since 1060
     * @example
     * ```js
     * file.rmdir({
     *   uri: 'internal://files/dir/',
     *   success: function(data) {
     *     console.log(`handling success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    rmdir(OBJECT: RmdirOBJECT): any;
  }

  /**
   *
   * @param uri 目录的uri，不能是应用资源路径和tmp类型的uri
   * @param recursive 是否递归删除子文件和子目录。默认false[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface RmdirOBJECT {
    uri: String;
    recursive?: Boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 目录的uri，不能是应用资源路径和tmp类型的uri
   * @param recursive 是否递归创建该目录的上级目录后再创建该目录。默认false[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface MkdirOBJECT {
    uri: String;
    recursive?: Boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 目录或文件uri，不能是应用资源路径和tmp类型的uri
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface AccessOBJECT {
    uri: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 本地文件路径
   * @param position 读取的起始位置，默认值为文件的起始位置[可选]
   * @param length 读取的长度，不填写则读取到文件结尾[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface ReadArrayBufferOBJECT {
    uri: String;
    position?: Number;
    length?: Number;
    success?: ReadArrayBufferOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type ReadArrayBufferOBJECTSuccessCB = (
    successArg: ReadArrayBufferSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param buffer 读取的文件内容[可选]
   */
  interface ReadArrayBufferSuccessSuccessArg {
    buffer?: Uint8array;
  }

  /**
   *
   * @param uri 本地文件路径
   * @param encoding 编码格式，默认 UTF-8[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface ReadTextOBJECT {
    uri: String;
    encoding?: String;
    success?: ReadTextOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type ReadTextOBJECTSuccessCB = (successArg: ReadTextSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param text 读取的文本[可选]
   */
  interface ReadTextSuccessSuccessArg {
    text?: String;
  }

  /**
   *
   * @param uri 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
   * @param buffer 需要写入的 Buffer
   * @param position 指向文件开始写入数据的位置的偏移量，默认 0[可选]
   * @param append 是否追加模式，默认false。当为true时，position参数无效[可选] 1060+
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface WriteArrayBufferOBJECT {
    uri: String;
    buffer: Uint8array;
    position?: Number;
    append?: Boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
   * @param text 需要写入的字符串
   * @param encoding 编码格式，默认 UTF-8[可选]
   * @param append 是否追加模式，默认false[可选] 1060+
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface WriteTextOBJECT {
    uri: String;
    text: String;
    encoding?: String;
    append?: Boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface DeleteOBJECT {
    uri: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param uri 文件的 uri，不能是应用资源路径
   * @param recursive 是否递归获取子目录文件列表。默认false[可选] 1060+
   * @param success 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetOBJECT {
    uri: String;
    recursive?: Boolean;
    success?: GetOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
   */
  type GetOBJECTSuccessCB = (successArg: GetSuccessSuccessArg) => any;

  /**
   * 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
   * @param uri 文件的 uri，该 uri 可以被其他组件或 Feature 访问[可选]
   * @param length 文件大小，单位 B[可选]
   * @param lastModifiedTime 文件的保存是的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数[可选]
   * @param type 文件类型，dir：目录；file：文件[可选] 1060+
   * @param subFiles 文件列表，recursive为true且type为dir时递归返回子目录文件细信息，否则不返回[可选] 1060+
   */
  interface GetSuccessSuccessArg {
    uri?: String;
    length?: Number;
    lastModifiedTime?: Number;
    type?: String;
    subFiles?: Array<any>;
  }

  /**
   *
   * @param uri 目录 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface ListOBJECT {
    uri: String;
    success?: ListOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}
   */
  type ListOBJECTSuccessCB = (successArg: ListSuccessSuccessArg) => any;

  /**
   * 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}
   * @param fileList 文件列表，每个文件的格式为{uri:'file1',lastModifiedTime:1234456, length:123456}[可选]
   */
  interface ListSuccessSuccessArg {
    fileList?: Array<any>;
  }

  /**
   *
   * @param srcUri 源文件的 uri
   * @param dstUri 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回目标文件的 uri[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface CopyOBJECT {
    srcUri: String;
    dstUri: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   *
   * @param srcUri 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param dstUri 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回目标文件的 uri[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface MoveOBJECT {
    srcUri: String;
    dstUri: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 文件存储 file
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/file.html
   */
  const file: File;
  export default file;
}
