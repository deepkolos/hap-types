
/**
 * 弹窗 prompt
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/prompt.html
 */
declare module '@system.prompt' {
  interface Prompt {
    
    /**
     * 显示 Toast
     * @example prompt.showToast({
     *   message: 'message'
     * })
     * 
     */
    showToast(OBJECT: ShowToastOBJECT): void;

    /**
     * 显示对话框
     * @example prompt.showDialog({
     *   title: 'title',
     *   message: 'message',
     *   buttons: [
     *     {
     *       text: 'btn',
     *       color: '#33dd44'
     *     }
     *   ],
     *   success: function(data) {
     *     console.log('handling callback')
     *   },
     *   cancel: function() {
     *     console.log('handling cancel')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    showDialog(OBJECT: ShowDialogOBJECT): void;

    /**
     * 显示上下文菜单
     * @example prompt.showContextMenu({
     *   itemList: ['item1', 'item2'],
     *   itemColor: '#ff33ff',
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   cancel: function() {
     *     console.log('handling cancel')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * 
     */
    showContextMenu(OBJECT: ShowContextMenuOBJECT): void;
  }


  /**
   * 
   * @param itemList 按钮的文字数组
   * @param itemColor 按钮颜色
   * @param success 成功回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface ShowContextMenuOBJECT {
   itemList: Array<any>;
   itemColor: Hexcolor;
   success: ShowContextMenuOBJECTSuccessCB;
   cancel: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type ShowContextMenuOBJECTSuccessCB = (successArg: ShowContextMenuSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param index 选中按钮在 itemList 数组中的序号
   */
  interface ShowContextMenuSuccessSuccessArg {
   index: Integer;
  }

  /**
   * 
   * @param title 标题
   * @param message 内容
   * @param buttons 按钮的数组，按钮结构：{text:'text',color:'#333333'}，color 可选：buttons 的第 1 项为 positive button；buttons 的第 2 项（如果有）为 negative button；buttons 的第 3 项（如果有）为 neutral button。最多支持 3 个 button
   * @param success 成功回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface ShowDialogOBJECT {
   title: String;
   message: String;
   buttons: Array<any>;
   success: ShowDialogOBJECTSuccessCB;
   cancel: Function;
   complete: Function;
  }

  /**
   * 成功回调
   */
  type ShowDialogOBJECTSuccessCB = (successArg: ShowDialogSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param index 选中按钮在 buttons 数组中的序号
   */
  interface ShowDialogSuccessSuccessArg {
   index: Integer;
  }

  /**
   * 
   * @param message 要显示的文本
   * @param duration 0 为短时，1 为长时，默认 0
   */
  interface ShowToastOBJECT {
   message: String;
   duration: Number;
  }

  const prompt: Prompt;
  export default prompt;
}