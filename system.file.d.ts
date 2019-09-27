
/**
 * 文件存储 file
 * 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/file.html
 */
declare module '@system.file' {
  interface File {
    
    /**
     * 将源文件移动到指定位置，接口中使用的 URI 描述请参考文件组织
     * @example file.move({
     *   srcUri: 'internal://cache/path/to/file',
     *   dstUri: 'internal://files/path/to/file',
     *   success: function(uri) {
     *     console.log(`move success: ${uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    move(OBJECT: MoveOBJECT): void;

    /**
     * 将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考文件组织
     * @example file.copy({
     *   srcUri: 'internal://cache/path/to/file',
     *   dstUri: 'internal://files/path/to/file',
     *   success: function(uri) {
     *     console.log(`copy success: ${uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    copy(OBJECT: CopyOBJECT): void;

    /**
     * 获取指定目录下的文件列表，接口中使用的 URI 描述请参考文件组织
     * @example file.list({
     *   uri: 'internal://files/movies/',
     *   success: function(data) {
     *     console.log(data.fileList)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    list(OBJECT: ListOBJECT): void;

    /**
     * 获取本地文件的文件信息，接口中使用的 URI 描述请参考文件组织
     * @example file.get({
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
     * 
     */
    get(OBJECT: GetOBJECT): void;

    /**
     * 删除本地存储的文件，接口中使用的 URI 描述请参考文件组织
     * @example file.delete({
     *   uri: 'internal://files/path/to/file',
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    delete(OBJECT: DeleteOBJECT): void;

    /**
     * 写文本到文件
     * @example file.writeText({
     *   uri: 'internal://files/work/demo.txt',
     *   text: 'test',
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    writeText(OBJECT: WriteTextOBJECT): void;

    /**
     * 写 Buffer 到文件
     * @example file.writeArrayBuffer({
     *   uri: 'internal://files/work/demo',
     *   buffer: buffer,
     *   success: function() {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    writeArrayBuffer(OBJECT: WriteArrayBufferOBJECT): void;

    /**
     * 从文件中读取文本
     * @example file.readText({
     *   uri: 'internal://files/work/demo.txt',
     *   success: function(data) {
     *     console.log('text: ' + data.text)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    readText(OBJECT: ReadTextOBJECT): void;

    /**
     * 从文件中读取 Buffer
     * @example file.readArrayBuffer({
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
     * 
     */
    readArrayBuffer(OBJECT: ReadArrayBufferOBJECT): void;
  }


  /**
   * 
   * @param uri 本地文件路径
   * @param position 读取的起始位置，默认值为文件的起始位置
   * @param length 读取的长度，不填写则读取到文件结尾
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface ReadArrayBufferOBJECT {
   uri: String;
   position: Number;
   length: Number;
   success: ReadArrayBufferOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type ReadArrayBufferOBJECTSuccessCB = (successArg: ReadArrayBufferSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param buffer 读取的文件内容
   */
  interface ReadArrayBufferSuccessSuccessArg {
   buffer: Uint8array;
  }

  /**
   * 
   * @param uri 本地文件路径
   * @param encoding 编码格式，默认 UTF-8
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface ReadTextOBJECT {
   uri: String;
   encoding: String;
   success: ReadTextOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type ReadTextOBJECTSuccessCB = (successArg: ReadTextSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param text 读取的文本
   */
  interface ReadTextSuccessSuccessArg {
   text: String;
  }

  /**
   * 
   * @param uri 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
   * @param buffer 需要写入的 Buffer
   * @param position 指向文件开始写入数据的位置的偏移量，默认 0
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface WriteArrayBufferOBJECT {
   uri: String;
   buffer: Uint8array;
   position: Number;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param uri 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
   * @param text 需要写入的字符串
   * @param encoding 编码格式，默认 UTF-8
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface WriteTextOBJECT {
   uri: String;
   text: String;
   encoding: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param uri 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface DeleteOBJECT {
   uri: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param uri 文件的 uri，不能是应用资源路径
   * @param success 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetOBJECT {
   uri: String;
   success: GetOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
   */
  type GetOBJECTSuccessCB = (successArg: GetSuccessSuccessArg) => any;

  /**
   * 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
   * @param uri 文件的 uri，该 uri 可以被其他组件或 Feature 访问
   * @param length 文件大小，单位 B
   * @param lastModifiedTime 文件的保存是的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数
   */
  interface GetSuccessSuccessArg {
   uri: String;
   length: Number;
   lastModifiedTime: Number;
  }

  /**
   * 
   * @param uri 目录 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface ListOBJECT {
   uri: String;
   success: ListOBJECTSuccessCB;
   fail: Function;
   complete: Function;
  }

  /**
   * 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}
   */
  type ListOBJECTSuccessCB = (successArg: ListSuccessSuccessArg) => any;

  /**
   * 成功回调，返回{fileList:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]}
   * @param fileList 文件列表，每个文件的格式为{uri:'file1',lastModifiedTime:1234456, length:123456}
   */
  interface ListSuccessSuccessArg {
   fileList: Array<any>;
  }

  /**
   * 
   * @param srcUri 源文件的 uri
   * @param dstUri 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回目标文件的 uri
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface CopyOBJECT {
   srcUri: String;
   dstUri: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param srcUri 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param dstUri 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
   * @param success 成功回调，返回目标文件的 uri
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface MoveOBJECT {
   srcUri: String;
   dstUri: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  const file: File;
  export default file;
}