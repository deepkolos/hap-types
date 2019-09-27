
/**
 * 数据存储 storage
 * 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/storage.html
 */
declare module '@system.storage' {
  interface Storage {
    
    /**
     * 读取存储内容
     * @example storage.get({
     *   key: 'A1',
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    get(OBJECT: GetOBJECT): void;

    /**
     * 修改存储内容
     * @example storage.set({
     *   key: 'A1',
     *   value: 'V1',
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    set(OBJECT: SetOBJECT): void;

    /**
     * 清空存储内容
     * @example storage.clear({
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    clear(OBJECT: ClearOBJECT): void;

    /**
     * 删除存储内容
     * @example storage.delete({
     *   key: 'A1',
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
     * 返回存储中某个 index 的键名
     * @example let length = storage.length
     * 
     */
    key(OBJECT: KeyOBJECT): void;
  }


  /**
   * 
   * @param index 要查询的键名对应的索引
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface KeyOBJECT {
   index: Number;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param key 索引
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface DeleteOBJECT {
   key: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface ClearOBJECT {
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param key 索引
   * @param value 新值。如果新值是长度为 0 的空字符串，会删除以 key 为索引的数据项
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface SetOBJECT {
   key: String;
   value: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  /**
   * 
   * @param key 索引
   * @param default 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetOBJECT {
   key: String;
   default: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  const storage: Storage;
  export default storage;
}