/// <reference path="./types.d.ts"/>

/**
 * 联系人 contact
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/contact.html
 */
declare module '@system.contact' {
  interface Contact {
    /**
     * 选择联系人
     * @example
     * ```js
     * contact.pick({
     *   success: function(data) {
     *     console.log('contact: name=' + data.displayName + ', number=' + data.number)
     *   },
     *   fail: function(data, code) {
     *     console.log('handling fail, code=' + code)
     *   }
     * })
     * ```
     */
    pick(OBJECT: PickOBJECT): any;

    /**
     * 获取通讯录所有联系人列表，每次获取都需要用户授权
     * @since 1050
     * @example
     * ```js
     * contact.list({
     *   success: function(data) {
     *     for (const i in data.contactList) {
     *       console.log(
     *         `name: ${data.contactList[i].displayName},number:${
     *           data.contactList[i].number
     *         }`
     *       )
     *     }
     *   },
     *   fail: function(data, code) {
     *     console.log('handling fail, code=' + code)
     *   }
     * })
     * ```
     */
    list(OBJECT: ListOBJECT): any;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   * @param displayName 联系人名称
   * @param number 电话号码
   */
  interface ListOBJECT {
    success: ListOBJECTSuccessCB;
    fail: Function;
    complete: Function;
    displayName: String;
    number: String;
  }

  /**
   * 成功回调
   */
  type ListOBJECTSuccessCB = (successArg: ListSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param contactList 联系人列表
   */
  interface ListSuccessSuccessArg {
    contactList: Array<any>;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface PickOBJECT {
    success: PickOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickOBJECTSuccessCB = (successArg: PickSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param displayName 联系人名称
   * @param number 电话号码
   */
  interface PickSuccessSuccessArg {
    displayName: String;
    number: String;
  }

  /**
   * 联系人 contact
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/contact.html
   */
  const contact: Contact;
  export default contact;
}
