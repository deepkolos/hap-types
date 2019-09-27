/**
 * 多媒体 media
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/media.html
 */
declare module '@system.media' {
  interface Media {
    /**
     * 拍摄照片
     * @example media.takePhoto({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    takePhoto(OBJECT: TakePhotoOBJECT): any;

    /**
     * 拍摄视频
     * @example media.takeVideo({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    takeVideo(OBJECT: TakeVideoOBJECT): any;

    /**
     * 选择图片
     * @example media.pickImage({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    pickImage(OBJECT: PickImageOBJECT): any;

    /**
     * 选择多张图片
     * @since 1040
     * @example media.pickImages({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uris}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    pickImages(OBJECT: PickImagesOBJECT): any;

    /**
     * 选择视频
     * @example media.pickVideo({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    pickVideo(OBJECT: PickVideoOBJECT): any;

    /**
     * 选择多个视频
     * @since 1040
     * @example media.pickVideos({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uris}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    pickVideos(OBJECT: PickVideosOBJECT): any;

    /**
     * 选择文件
     * @since 1010
     * @example media.pickFile({
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    pickFile(OBJECT: PickFileOBJECT): any;

    /**
     * 将图片/视频保存到相册中
     * @since 1010
     * @example media.saveToPhotosAlbum({
     *   uri: 'internal://tmp/abc.jpg',
     *   success: function() {
     *     console.log(`save success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    saveToPhotosAlbum(OBJECT: SaveToPhotosAlbumOBJECT): any;

    /**
     * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以左右滑动浏览，可以通过双指缩放图片，可以保存图片到相册。
     * @since 1040
     * @example media.previewImage({
     *   current: 'http://www.xxx.com/a.jpg',
     *   uris: [
     *     'http://www.xxx.com/a.jpg',
     *     'http://www.xxx.com/b.jpg',
     *     'http://www.xxx.com/c.jpg'
     *   ],
     *   success: function() {
     *     console.log('preview success')
     *   },
     *   fail: function(data, code) {
     *     console.log('preview fail, code = ${code}')
     *   }
     * })
     */
    previewImage(OBJECT: PreviewImageOBJECT): any;

    /**
     * 获取系统铃声。如果是获取来电铃声，双卡情况下，获取的是卡 1 对应的铃声。
     * @since 1040
     * @example media.getRingtone({
     *   type: 'ringtone',
     *   success: function(data) {
     *     console.log(`get ringtone success title: ${data.title}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    getRingtone(OBJECT: GetRingtoneOBJECT): any;

    /**
     * 设置系统铃声，目前只支持本地文件。如果是设置来电铃声，双卡情况下，卡 1 卡 2 对应的铃声都会设置。
     * @since 1040
     * @example media.setRingtone({
     *   type: 'ringtone',
     *   uri: 'internal://mass/test/test.mp3',
     *   title: 'test',
     *   success: function() {
     *     console.log(`set ringtone success`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     */
    setRingtone(OBJECT: SetRingtoneOBJECT): any;
  }

  /**
   *
   * @param uri 铃声文件路径，只支持本地文件
   * @param type 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
   * @param title 铃声名称，没有设置默认取文件名
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface SetRingtoneOBJECT {
    uri: String;
    type: String;
    title: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param type 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface GetRingtoneOBJECT {
    type: String;
    success: GetRingtoneOBJECTSuccessCB;
    fail: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type GetRingtoneOBJECTSuccessCB = (
    successArg: GetRingtoneSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param title 铃声名称，若铃声被删除，返回空字符串。
   */
  interface GetRingtoneSuccessSuccessArg {
    title: String;
  }

  /**
   *
   * @param current 数据类型可选择 Number 或者 String：Number：当前显示的图片的下标，默认 0；String：当前显示的图片链接，默认为 uris 中的第一张的地址
   * @param uris 需要预览的图片链接列表，同时支持网络和本地地址
   * @param success 接口调用成功的回调函数
   * @param fail 接口调用失败的回调函数
   * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  interface PreviewImageOBJECT {
    current: Number | string;
    uris: Array<any>;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param uri 源文件的 uri，文件的扩展名必须是图片或视频的扩展名
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调
   */
  interface SaveToPhotosAlbumOBJECT {
    uri: String;
    success: Function;
    fail: Function;
    complete: Function;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface PickFileOBJECT {
    success: PickFileOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickFileOBJECTSuccessCB = (successArg: PickFileSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param uri 选取的文件路径
   */
  interface PickFileSuccessSuccessArg {
    uri: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface PickVideosOBJECT {
    success: PickVideosOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickVideosOBJECTSuccessCB = (
    successArg: PickVideosSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uris 选取的文件路径列表
   */
  interface PickVideosSuccessSuccessArg {
    uris: Array<any>;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface PickVideoOBJECT {
    success: PickVideoOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickVideoOBJECTSuccessCB = (
    successArg: PickVideoSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 选取的文件路径
   */
  interface PickVideoSuccessSuccessArg {
    uri: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface PickImagesOBJECT {
    success: PickImagesOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickImagesOBJECTSuccessCB = (
    successArg: PickImagesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uris 选取的文件路径列表
   */
  interface PickImagesSuccessSuccessArg {
    uris: Array<any>;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface PickImageOBJECT {
    success: PickImageOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type PickImageOBJECTSuccessCB = (
    successArg: PickImageSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 选取的文件路径
   */
  interface PickImageSuccessSuccessArg {
    uri: String;
  }

  /**
   *
   * @param success 成功回调，参数为 {uri: 'file:///video.avi'}
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface TakeVideoOBJECT {
    success: TakeVideoOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调，参数为 {uri: 'file:///video.avi'}
   */
  type TakeVideoOBJECTSuccessCB = (
    successArg: TakeVideoSuccessSuccessArg
  ) => any;

  /**
   * 成功回调，参数为 {uri: 'file:///video.avi'}
   * @param uri 选取的文件路径
   */
  interface TakeVideoSuccessSuccessArg {
    uri: String;
  }

  /**
   *
   * @param success 成功回调
   * @param fail 失败回调
   * @param cancel 取消回调
   * @param complete 执行结束后的回调
   */
  interface TakePhotoOBJECT {
    success: TakePhotoOBJECTSuccessCB;
    fail: Function;
    cancel: Function;
    complete: Function;
  }

  /**
   * 成功回调
   */
  type TakePhotoOBJECTSuccessCB = (
    successArg: TakePhotoSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 选取的文件路径
   */
  interface TakePhotoSuccessSuccessArg {
    uri: String;
  }

  const media: Media;
  export default media;
}
