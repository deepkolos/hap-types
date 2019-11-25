/// <reference path="./types.d.ts"/>

/**
 * 图片编辑 image
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/image.html
 */
declare module '@system.image' {
  interface Image {
    /**
     * 获取图片信息
     * @example
     * ```js
     * image.getImageInfo({
     *   uri: 'internal://tmp/abc.jpg',
     *   success: function(data) {
     *     console.log(`handling success: size = ${data.size}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getImageInfo(OBJECT: GetImageInfoOBJECT): any;

    /**
     * 压缩图片
     * @example
     * ```js
     * image.compressImage({
     *   uri: 'internal://tmp/abc.jpg',
     *   quality: 80,
     *   radio: 2, // 变为原图的1/2大小
     *   format: 'JPEG',
     *   success: function(data) {
     *     console.log(data.uri)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    compressImage(OBJECT: CompressImageOBJECT): any;

    /**
     * 对图片按顺序执行编辑操作。
     * @since 1000
     * @example
     * ```js
     * image.applyOperations({
     *   uri: 'internal://cache/123.png',
     *   operations: [
     *     {
     *       action: 'scale',
     *       scaleX: 0.5,
     *       scaleY: 0.5
     *     },
     *     {
     *       action: 'crop',
     *       width: 200,
     *       height: 200
     *     },
     *     {
     *       action: 'rotate',
     *       degree: 90
     *     }
     *   ],
     *   quality: 90,
     *   format: 'webp',
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    applyOperations(OBJECT: ApplyOperationsOBJECT): any;

    /**
     * 打开编辑器来编辑图片。目前支持选择图片范围并裁剪。
     * @example
     * ```js
     * image.editImage({
     *   uri: 'internal://cache/123.png',
     *   success: function(data) {
     *     console.log(`handling success: ${data.uri}`)
     *   },
     *   cancel: function() {
     *     console.log('handling cancel')
     *   },
     *   fail: function(data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    editImage(OBJECT: EditImageOBJECT): any;

    /**
     * 获取图片的exif信息。支持的格式：JPEG,DNG,CR2,NEF,NRW,ARW,RW2,ORF,PEF,SRW,RAF,HEIF。
     * @since 1040
     * @example
     * ```js
     * image.getExifAttributes({
     *   uri: 'internal://cache/123.png',
     *   success: function (data) {
     *     console.log(`handling success: ${JSON.stringify(data.attributes)}`)
     *   },
     *   fail: function (data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    getExifAttributes(OBJECT: GetExifAttributesOBJECT): any;

    /**
     * 设置图片的exif信息。设置操作会直接在所给图片上进行，不会生成新的图片。支持的格式：JPEG。
     * @since 1040
     * @example
     * ```js
     * image.setExifAttributes({
     *   uri: 'internal://cache/123.jpg',
     *   attributes:{
     *      Orientation:'1',
     *      Make:'quick app'
     *   },
     *   success: function (data) {
     *     console.log(`handling success`)
     *   },
     *   fail: function (data, code) {
     *     console.log(`handling fail, code = ${code}`)
     *   }
     * })
     * ```
     */
    setExifAttributes(OBJECT: SetExifAttributesOBJECT): any;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param attributes 要设置的exif属性列表
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface SetExifAttributesOBJECT {
    uri: String;
    attributes: Object;
    success?: SetExifAttributesOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type SetExifAttributesOBJECTSuccessCB = (
    successArg: SetExifAttributesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 图片地址[可选]
   */
  interface SetExifAttributesSuccessSuccessArg {
    uri?: String;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetExifAttributesOBJECT {
    uri: String;
    success?: GetExifAttributesOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetExifAttributesOBJECTSuccessCB = (
    successArg: GetExifAttributesSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 图片地址[可选]
   * @param attributes 图片的exif信息[可选]
   */
  interface GetExifAttributesSuccessSuccessArg {
    uri?: String;
    attributes?: Object;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param aspectRatioX 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图[可选] 1050+
   * @param aspectRatioY 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图[可选] 1050+
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param cancel 取消回调　　　[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface EditImageOBJECT {
    uri: String;
    aspectRatioX?: Integer;
    aspectRatioY?: Integer;
    success?: EditImageOBJECTSuccessCB;
    fail?: Function;
    cancel?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type EditImageOBJECTSuccessCB = (
    successArg: EditImageSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 生成的图片的地址[可选]
   */
  interface EditImageSuccessSuccessArg {
    uri?: String;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param operations 编辑操作列表，按照先后顺序执行。如果未提供，则不会执行编辑操作，仅重新保存图片[可选]
   * @param quality 图片的压缩质量，0-100 之间，默认是 75[可选]
   * @param format 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface ApplyOperationsOBJECT {
    uri: String;
    operations?: Objectarray;
    quality?: Integer;
    format?: String;
    success?: ApplyOperationsOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type ApplyOperationsOBJECTSuccessCB = (
    successArg: ApplyOperationsSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 生成的图片的地址[可选]
   */
  interface ApplyOperationsSuccessSuccessArg {
    uri?: String;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param quality 图片的压缩质量，0-100 之间，默认是 75[可选]
   * @param ratio 尺寸压缩倍数，必须大于 0，尺寸会变为原图的 1/ratio 大小[可选]
   * @param format 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface CompressImageOBJECT {
    uri: String;
    quality?: Integer;
    ratio?: Number;
    format?: String;
    success?: CompressImageOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type CompressImageOBJECTSuccessCB = (
    successArg: CompressImageSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 压缩后的图片地址[可选]
   */
  interface CompressImageSuccessSuccessArg {
    uri?: String;
  }

  /**
   *
   * @param uri 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface GetImageInfoOBJECT {
    uri: String;
    success?: GetImageInfoOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type GetImageInfoOBJECTSuccessCB = (
    successArg: GetImageInfoSuccessSuccessArg
  ) => any;

  /**
   * 成功回调
   * @param uri 图片地址[可选]
   * @param width 图片的宽度，单位为 px[可选]
   * @param height 图片的高度，单位为 px[可选]
   * @param size 图片的大小，单位为 Byte[可选]
   */
  interface GetImageInfoSuccessSuccessArg {
    uri?: String;
    width?: Integer;
    height?: Integer;
    size?: Long;
  }

  /**
   * 图片编辑 image
   * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/image.html
   */
  const image: Image;
  export default image;
}
