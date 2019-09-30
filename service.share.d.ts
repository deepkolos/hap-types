/**
 * 第三方分享 share
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/share.html
 */
declare module '@service.share' {
  interface Share {
    /**
     * 获取服务提供商。
     * @since 1000
     * @example
     * ```js
     * console.log(share.getProvider())
     * ```
     */
    getProvider(): any;

    /**
     * 分享内容
     * @example
     * ```js
     * share.share({
     *   shareType: 0,
     *   title: '标题',
     *   summary: '摘要',
     *   imagePath: 'xxx/xxx/xxx/share.jpg',
     *   targetUrl: 'http://www.example.com',
     *   platforms: ['WEIBO'],
     *   success: function(data) {
     *     console.log('handling success')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, failMess=${data},code=${code}`)
     *   }
     * })
     * ```
     */
    share(OBJECT: ShareOBJECT): any;

    /**
     * 获取当前可用的支持分享的平台列表
     * @since 1010
     * @example
     * ```js
     * share.getAvailablePlatforms({
     *   success: function(data) {
     *     for (const i in data.platforms) {
     *       console.log("platforms: " + data.platforms[i]);
     *     }
     *   },
     *   fail: funciton(data, code) {
     *     console.log("handling fail, code=" + code);
     *   }
     * })
     * ```
     */
    getAvailablePlatforms(OBJECT: GetAvailablePlatformsOBJECT): any;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetAvailablePlatformsOBJECT {
    success: GetAvailablePlatformsOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetAvailablePlatformsOBJECTSuccessCB = (
    successArg: GetAvailablePlatformsSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param platforms 当前可用的支持分享的平台列表，可用值包括：WEIBO(新浪微博)、QQ、WEIXIN、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享)
   */
  interface GetAvailablePlatformsSuccessSuccessArg {
    platforms: Array<any>;
  }

  /**
   *
   * @param shareType 分享类型。0：默认图文，1：纯文字，2：纯图片，3：音乐，4：视频。
   * @param title 分享的标题。
   * @param summary 分享的摘要。
   * @param targetUrl 点击后的跳转 URL
   * @param imagePath 分享图片/缩略图的本地地址; 另外可支持分享在线图片的 url 1040+
   * @param mediaUrl 分享的音乐/视频数据 URL
   * @param platforms 分享到的平台，不填则默认分享所有平台。可用值包括：WEIBO(新浪微博)、QQ、WEIXIN(微信好友)、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享) 1010+
   * @param success 成功回调(暂不支持)
   * @param fail 失败回调，返回值为错误信息和错误码（错误码可见通用错误码）
   * @param cancel 取消回调
   */
  interface ShareOBJECT {
    shareType: Int;
    title: String;
    summary: String;
    targetUrl: String;
    imagePath: String;
    mediaUrl: String;
    platforms: Array<any>;
    success: Function;
    fail: Function;
    cancel: Function;
  }

  /**
   * 第三方分享 share
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/service/share.html
   */
  const share: Share;
  export default share;
}
