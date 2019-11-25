/// <reference path="./types.d.ts"/>

/**
 * 密码算法 cipher
 * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/cipher.html
 */
declare module '@system.cipher' {
  interface Cipher {
    /**
     * RSA 加解密。不支持分段加密，内容超长会出错
     * @example
     * ```js
     * //加密
     * cipher.rsa({
     *   action: 'encrypt',
     *   //待加密的文本内容
     *   text: 'hello',
     *   //base64编码后的加密公钥
     *   key:
     *     'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDc7GR2MrfAoefES+wrs1ns2afT\n' +
     *     'eJXSfIkEHfPXG9fVFjaws1ho4KcZfsxlA0+SXvc83f2SVGCuzULmM2lxxRCtcUN/\n' +
     *     'h7SoaYEeluhqFimL2AEjfSwINHCLqObJkcjCfoZpE1JCehPiDOJsyT50Auc08h/4\n' +
     *     'jHQfanyC1nc62LqUCQIDAQAB',
     *   success: function(data) {
     *     console.log(`handling success: ${data.text}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
     *   }
     * })
     *
     * //解密：
     * cipher.rsa({
     *   action: 'decrypt',
     *   //待解密的内容，是base64编码后的一段二进制值，解密后是文本内容“hello”
     *   text:
     *     'CUg3tTxTIdpCfreIxIBdws3uhd5qXLwcrVl3XDnQzZFVHyjVVCDHS16rjopaZ4C5xU2Tc8mSDzt7\n' +
     *     'gp9vBfSwi7bMtSUvXG18DlncsKJFDkJpS5t0PkpS9YrJXrY80Gpe+ME6+6dN9bjgqMljbitDdBRf\n' +
     *     'S/ZWNI4Q8Q0suNjNkGU=',
     *   //base64编码后的解密私钥
     *   key:
     *     'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANzsZHYyt8Ch58RL\n' +
     *     '7CuzWezZp9N4ldJ8iQQd89cb19UWNrCzWGjgpxl+zGUDT5Je9zzd/ZJUYK7NQuYz\n' +
     *     'aXHFEK1xQ3+HtKhpgR6W6GoWKYvYASN9LAg0cIuo5smRyMJ+hmkTUkJ6E+IM4mzJ\n' +
     *     'PnQC5zTyH/iMdB9qfILWdzrYupQJAgMBAAECgYEAkibhH0DWR13U0gvYJeD08Lfd\n' +
     *     'Sw1PMHyquEqIcho9Yv7bF3LOXjOg2EEGPx09mvuwXFgP1Kp1e67XPytr6pQQPzK7\n' +
     *     'XAPcLPx80R/ZjZs8vNFndDOd1HgD3vSVmYQarNzmKi72tOUWMPevsaFXPHo6Xx3X\n' +
     *     '8x0wYb7XuBsQguRctTECQQD7GWX3JUiyo562iVrpTDPOXsrUxmzCrgz2OZildxMd\n' +
     *     'Pp/PkyDrx7mEXTpk4K/XnQJ3GpJNi2iDSxDuPSAeJ/aPAkEA4Tw4+1Z43S/xH3C3\n' +
     *     'nfulYBNyB4si6KEUuC0krcC1pDJ21Gd12efKo5VF8SaJI1ZUQOzguV+dqNsB/JUY\n' +
     *     'OFfX5wJAB1dKv9r7MR3Peg6x9bggm5vx2h6i914XSuuMJupASM6X5X2rrLj+F3yS\n' +
     *     'RHi9K1SPyeOg+1tkBtKfABgRZFBOyQJAbuTivUSe73AqTKuHjB4ZF0ubqgEkJ9sf\n' +
     *     'Q2rekzm9dOFvxjZGPQo1qALX09qATMi1ZN376ukby8ZAnSafLSZ64wJBAM2V37go\n' +
     *     'Sj44HF76ksRow8gecuQm48NCTGAGTicXg8riKog2GC9y8pMNHAezoR9wXJF7kk+k\n' +
     *     'lz5cHyoMZ9mcd30=',
     *   success: function(data) {
     *     console.log(`handling success: ${data.text}`)
     *   },
     *   fail: function(data, code) {
     *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
     *   }
     * })
     * ```
     */
    rsa(OBJECT: RsaOBJECT): any;

    /**
     * AES 加解密。支持分段加密
     * @since 1060
     * @example
     * ```js
     * //加密
     * cipher.aes({
     *   action: 'encrypt',
     *   //待加密的文本内容
     *   text: 'hello',
     *   //base64编码后的密钥
     *   key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
     *   transformation: 'AES/CBC/PKCS5Padding',
     *   ivOffset: 0,
     *   ivLen: 16,
     *   success: (data) => {
     *     console.log(`handling success: ${data.text}`)
     *   },
     *   fail: (data, code) => {
     *     console.log(`### cipher.aes fail ### ${code}: ${data}`)
     *   }
     * })
     *
     * //解密：
     * cipher.aes({
     *   action: 'decrypt',
     *   //待解密的内容，是base64编码后的一段二进制值
     *   text: 'CUg3tTxTIdpCfreIxIBdws3uhd5qXLwcrVl3XDnQzZFVHyjVVCDHS16rjopaZ4C5xU2Tc8mSDzt7\n' +
     *     'gp9vBfSwi7bMtSUvXG18DlncsKJFDkJpS5t0PkpS9YrJXrY80Gpe+ME6+6dN9bjgqMljbitDdBRf\n' +
     *     'S/ZWNI4Q8Q0suNjNkGU=',
     *   //base64编码后的密钥
     *   key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
     *   transformation: 'AES/CBC/PKCS5Padding',
     *   ivOffset: 0,
     *   ivLen: 16,
     *   success: (data) => {
     *     this.dealTxt = data.text
     *   },
     *   fail: (data, code) => {
     *     prompt.showToast({
     *       message: ("解密失败, code=" + code + ":" + data)
     *     })
     *   }
     * })
     * ```
     */
    aes(OBJECT: AesOBJECT): any;
  }

  /**
   *
   * @param action 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
   * @param text 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同
   * @param key 加密或解密使用到的密钥，经过 base64 编码后生成的字符串。
   * @param transformation AES 算法的加密模式和填充项，默认为"AES/CBC/PKCS5Padding"[可选]
   * @param iv AES加解密的初始向量，经过base64编码后的字符串，默认值为key值[可选]
   * @param ivOffset AES加解密的初始向量偏移，默认值为0[可选]
   * @param ivLen AES加解密的初始向量字节长度，默认值为16[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface AesOBJECT {
    action: String;
    text: String;
    key: String;
    transformation?: String;
    iv?: String;
    ivOffset?: Int;
    ivLen?: Int;
    success?: AesOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type AesOBJECTSuccessCB = (successArg: AesSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param text 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错（CODE：200）[可选]
   */
  interface AesSuccessSuccessArg {
    text?: String;
  }

  /**
   *
   * @param action 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
   * @param text 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同
   * @param key 加密或解密使用到的 RSA 密钥，经过 base64 编码后生成的字符串。加密时 key 为公钥，解密时 key 为私钥
   * @param transformation RSA 算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"[可选]
   * @param success 成功回调[可选]
   * @param fail 失败回调[可选]
   * @param complete 执行结束后的回调[可选]
   */
  interface RsaOBJECT {
    action: String;
    text: String;
    key: String;
    transformation?: String;
    success?: RsaOBJECTSuccessCB;
    fail?: Function;
    complete?: Function;
  }

  /**
   * 成功回调
   */
  type RsaOBJECTSuccessCB = (successArg: RsaSuccessSuccessArg) => any;

  /**
   * 成功回调
   * @param text 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错[可选]
   */
  interface RsaSuccessSuccessArg {
    text?: String;
  }

  /**
   * 密码算法 cipher
   * @后台运行限制 无限制。后台运行详细用法参见后台运行 脚本。
   * @see https://doc.quickapp.cn/features/system/cipher.html
   */
  const cipher: Cipher;
  export default cipher;
}
