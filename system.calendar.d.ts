/**
 * 日历事件 calendar
 * @后台运行限制 禁止使用。后台运行详细用法参见后台运行 脚本。
 * @see https://doc.quickapp.cn/features/system/calendar.html
 */
declare module '@system.calendar' {
  interface Calendar {
    /**
     * 插入日历事件
     * @example
     * ```js
     * calendar.insert({
     *   title: '事件Ａ',
     *   startDate: '1490770543000',
     *   endDate: '1490880543000',
     *   remindMinutes: [5, 15, 30],
     *   duration: 'PT1H',
     *   rrule: 'FREQ=WEEKLY;COUNT=２',
     *   success: function(data) {
     *     console.log('handling success')
     *   }
     * })
     * ```
     */
    insert(OBJECT: InsertOBJECT): any;
  }

  /**
   *
   * @param title 事件的标题
   * @param description 事件的描述
   * @param startDate 事件开始时间，以从公元纪年开始计算的协调世界时毫秒数表示
   * @param endDate 事件结束时间，以从公元纪年开始计算的协调世界时毫秒数表示
   * @param timezone 事件的时区
   * @param allDay true 表示此事件占用一整天（按照本地时区的定义）。 false 表示它是常规事件，可在一天内的任何时间开始和结束
   * @param rrule 事件的重复发生规则格式。例如，"FREQ=WEEKLY;COUNT=10;WKST=SU"。 您可以在此处找到更多示例
   * @param remindMinutes 在事件开始前几分钟进行提醒。例如：[5,15,30]
   * @param organizer 事件组织者（所有者）的电子邮件
   * @param success 成功回调，值为插入成功的 id
   * @param fail 失败回调
   * @param cancel 取消回调
   */
  interface InsertOBJECT {
    title: String;
    description: String;
    startDate: Long;
    endDate: Long;
    timezone: String;
    allDay: Boolean;
    rrule: String;
    remindMinutes: Array<any>;
    organizer: String;
    success: Function;
    fail: Function;
    cancel: Function;
  }

  const calendar: Calendar;
  export default calendar;
}
