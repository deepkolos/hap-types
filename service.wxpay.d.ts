
/**
 * 微信支付 wxpay
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/wxpay.html
 */
declare module '@service.wxpay' {
  interface Wxpay {
    
    /**
     * 获取当前可用的微信支付调用方式

     */
    getType(): void;

    /**
     * 发起微信支付

     */
    pay(OBJECT: PayOBJECT): void;

    /**
     * 1040 开始，微信网页支付支持直接设置 referer 方式：

     */
    getType(): void;
  }


  /**
   * 
   * @param prepayid 微信支付服务器生成的预支付订单 id，参考微信 app 支付和微信网页支付
   * @param referer 在微信支付后台配置的域名。从 1040 版本开始，在使用微信网页方式调用时，若该参数不为空，将通过直接设置 referer 的方式拉起微信客户端。
   * @param extra 当前支付方式下，需要填入的额外订单信息，具体见下文的 extra 参数说明
   * @param success 成功后的回调函数，App 方式下，回调发生在用户支付完成之后，网页方式下，回调发生在订单提交给微信 app 之后
   * @param fail 失败回调
   * @param cancel 取消回调
   */
  interface PayOBJECT {
   prepayid: String;
   referer: String;
   extra: Object;
   success: PayOBJECTSuccessCB;
   fail: Function;
   cancel: Function;
  }

  /**
   * 成功后的回调函数，App 方式下，回调发生在用户支付完成之后，网页方式下，回调发生在订单提交给微信 app 之后
   */
  type PayOBJECTSuccessCB = (successArg: PaySuccessSuccessArg) => any;

  /**
   * 成功后的回调函数，App 方式下，回调发生在用户支付完成之后，网页方式下，回调发生在订单提交给微信 app 之后
   * @param prepayid 只在 App 支付方式下会出现，微信支付订单的 prepayId.
   * @param final_url 只在网页方式下会出现，拼接参数之后，最终用于打开网页的 url.
   */
  interface PaySuccessSuccessArg {
   prepayid: String;
   final_url: String;
  }

  const wxpay: Wxpay;
  export default wxpay;
}