
/**
 * 统计 stats
 * 无限制。 后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/service/stats.html
 */
declare module '@service.stats' {
  interface Stats {
    
    /**
     * 获取服务提供商。
     * @example console.log(stats.getProvider())
     * 
     */
    getProvider(): void;

    /**
     * 计数类型事件。通常用来描述⼀个事件累积发⽣的次数，适用的场景如按钮点击、界面进入、用户输入等。
     * @example stats.recordCountEvent({
     *   category: 'Button_Click',
     *   key: 'Button_OK_click',
     *   map: {
     *     param1: 'value1'
     *   }
     * })
     * 
     */
    recordCountEvent(OBJECT: RecordCountEventOBJECT): void;

    /**
     * 计算类型事件。用通常用来描述⼀个带数值的事件的发⽣，适用的场景如用户消费事件，附带的数值是每次消费的⾦额；下载⽂件事件，附带的数值是每次下载消耗的时间等。
     * @example stats.recordCalculateEvent({
     *   category: 'user_pay',
     *   key: 'buy_ebook',
     *   value: 20,
     *   map: {
     *     param1: 'value1'
     *   }
     * })
     * 
     */
    recordCalculateEvent(OBJECT: RecordCalculateEventOBJECT): void;
  }


  /**
   * 
   * @param category 定义事件的类别.开发者可使用该参数对⾃定义打点做整理归类
   * @param key 定义事件的主键，作为该事件的唯⼀标识
   * @param value 定义事件的值。　　　　　　　　　　　　　　
   * @param map 定义事件的属性和取值（Key-Value 键值对）
   */
  interface RecordCalculateEventOBJECT {
   category: String;
   key: String;
   value: Number;
   map: Object;
  }

  /**
   * 
   * @param category 定义事件的类别.开发者可使用该参数对⾃定义打点做整理归类
   * @param key 定义事件的主键，作为该事件的唯⼀标识
   * @param map 定义事件的属性和取值（Key-Value 键值对）
   */
  interface RecordCountEventOBJECT {
   category: String;
   key: String;
   map: Object;
  }

  const stats: Stats;
  export default stats;
}