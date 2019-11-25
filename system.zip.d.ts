/// <reference path="./types.d.ts"/>

/**
 * 解压缩 zip
 * @后台运行限制
 * @see https://doc.quickapp.cn/features/system/zip.html
 */
declare module '@system.zip' {
  interface Zip {
    /**
     * 解压文件
     * @example
     * ```js
     * zip.decompress({
     *   srcUri: 'internal://cache/test.zip',
     *   dstUri: 'internal://files/unzip/',
     *   success: function() {
     *     console.log(`handling success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    decompress(OBJECT: DecompressOBJECT): any;
  }

  /**
   *
   * @param srcUri 源文件的uri，不能是tmp类型的uri
   * @param dstUri 目标目录的uri，不能是应用资源路径和tmp类型的uri
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface DecompressOBJECT {
    srcUri: String;
    dstUri: String;
    success?: Function;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 解压缩 zip
   * @后台运行限制
   * @see https://doc.quickapp.cn/features/system/zip.html
   */
  const zip: Zip;
  export default zip;
}
