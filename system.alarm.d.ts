
/**
 * 闹钟 alarm
 * 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/alarm.html
 */
declare module '@system.alarm' {
  interface Alarm {
    
    /**
     * 设置闹钟，每次添加弹出提示框，同意后调用接口添加。

     */
    setAlarm(OBJECT: SetAlarmOBJECT): void;

    /**
     * 获取服务提供商

     */
    getProvider(): void;
  }


  /**
   * 
   * @param hour 设置起闹小时[0，23]
   * @param minute 设置起闹分钟[0，59]
   * @param message 闹钟名,建议长度不超过 10 字符,以保证最佳显示效果
   * @param vibrate 是否震动，默认 true
   * @param days 重复周期默认是一次性闹钟[0,1,2,3,4,5,6] 每天[0,1,2,3,4]周一到周五[0,6]（0 表示周一 6 表示周日）
   * @param ringtone 默认铃声随系统，文件路径为数据文件或应用内的资源
   * @param success 成功回调
   * @param fail 失败回调
   * @param complete 执行结束后的回调（调用成功、失败都会执行）
   */
  interface SetAlarmOBJECT {
   hour: Number;
   minute: Number;
   message: String;
   vibrate: Boolean;
   days: Array<any>;
   ringtone: String;
   success: Function;
   fail: Function;
   complete: Function;
  }

  const alarm: Alarm;
  export default alarm;
}