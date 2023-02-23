/*
 * @Author: ChunkDing
 * @Date: 2022-06-19 07:10:04
 * @Description:
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
window.ScriptDescriptions = {
    target: [
      { title: `replace`, func: `replace({},x)`, detail: `字符串替换`},
      { title: `MOD`, func: `MOD({}, 1)`, detail: `余数, MOD(3,2)  3除以2的余数=1.仅当numeric1为负时结果为负`},
      { title: `ABS`, func: `ABS({})`, detail: `绝对值, ABS(-1); 返回绝对值1`},
      { title: `CEIL`, func: `CEIL({})`, detail: `向上取整,  CEIL(2.3); 返回3.000000`},
      { title: `FLOOR`, func: `FLOOR({})`, detail: `向下取整,  FLOOR(2.3); 返回2.000000`},
      { title: `CHAR_LENGTH`, func: `CHAR_LENGTH({})`, detail: `字符个数, CHAR_LENGTH('abcdef'); 返回 6`},
      { title: `UPPER`, func: `UPPER({})`, detail: `转大写,  UPPER('aBc'); 返回 ABC`},
      { title: `LOWER`, func: `LOWER({})`, detail: `转小写,  LOWER('aBc'); 返回abc`},
      { title: `TRIM`, func: `TRIM({})`, detail: `去空格,  去除所有空侧`},
      { title: `LTRIM`, func: `LTRIM({})`, detail: `左去空格,  去除左边的空格`},
      { title: `RTRIM`, func: `RTRIM({})`, detail: `右去空格,  去除右边的空格`},
      { title: `REPEAT`, func: `REPEAT({}, 1)`, detail: `重复字符串整数次,  REPEAT('ab',3); 返回 ababab`},
      { title: `REGEXP_REPLACE`, func: `REGEXP_REPLACE({}, 'a|c', 'b')`, detail: `将string1中符合正则表达式的 替换为 string3, REGEXP_REPLACE('foobar', 'oo|ar', ''); 返回 fb`},
      { title: `SUBSTR`, func: `SUBSTR({}, 1, 2)`, detail: `从指定位置截取指定长度的子串, substr('abc',1,2); 返回ab`},
      { title: `REPLACE`, func: `REPLACE({}, 'a', 'b')`, detail: `字符串替换替换, REPLACE('ababab', 'abab', 'z');  用z替换abab 返回zab`},
      { title: `REVERSE`, func: `REVERSE({})`, detail: `反转, REVERSE('abc'); 返回cba`},
      { title: `TO_DATE`, func: `TO_DATE({})`, detail: `转为日期类型,  TO_DATE('2021-09-08 08:45:17'); 返回 2021-09-08`},
      { title: `TIMESTAMP`, func: `TIMESTAMP {}`, detail: `转为TIMESTAMP类型,  TIMESTAMP '2021-09-08 08:45:17'; 返回 2021-09-08T08:45:17`},
      { title: `TO_TIMESTAMP`, func: `TO_TIMESTAMP({})`, detail: `将 ‘UTC+0’ 时区下格式为 string2（默认为：‘yyyy-MM-dd HH:mm:ss’）的字符串 string1 转换为时间戳`},
      { title: `YEAR`, func: `YEAR({})`, detail: `年份, YEAR(TO_DATE('2021-10-08 08:45:17'));  返回2021`},
      { title: `QUARTER`, func: `QUARTER({})`, detail: `季度, QUARTER(TO_DATE('2021-10-08 08:45:17'));  返回4`},
      { title: `MONTH`, func: `MONTH({})`, detail: `月份, MONTH(TO_DATE('2021-10-08 08:45:17'));  返回 10`},
      { title: `WEEK`, func: `WEEK({})`, detail: `周, WEEK(TO_DATE('2021-10-08 08:45:17'));  返回 40`},
      { title: `HOUR`, func: `HOUR({})`, detail: `小时, select HOUR(TIMESTAMP '2021-09-08 08:45:17'); 返回 8`},
      { title: `MINUTE`, func: `MINUTE({})`, detail: `分钟, MINUTE(TIMESTAMP '2021-09-08 08:45:17'); 返回  45`},
      { title: `SECOND`, func: `SECOND({})`, detail: `秒, SECOND(TIMESTAMP '2021-09-08 08:45:17'); 返回 17`},
    ],
    source: [
      { title: `CURRENT_DATE`, func: `func@CURRENT_DATE()`, detail: `系统日期", " UTC 时区 系统日期  返回 2021-10-08`},
      { title: `CURRENT_TIME`, func: `func@CURRENT_TIME()`, detail: `系统时间", " UTC 时区 系统时间   返回 09:25:28.137`},
      { title: `CURRENT_TIMESTAMP`, func: `func@CURRENT_TIMESTAMP()`, detail: `系统时间搓", " UTC 时区 系统时间搓，TIMESTAMP 类型  返回 2021-10-08T09:23:15.180`},
      { title: `LOCALTIMESTAMP`, func: `func@LOCALTIMESTAMP()`, detail: `系统日期", "本地时区系统时间，  返回 2021-10-08T17:19:47.787`},
      { title: `LOCALTIME`, func: `func@LOCALTIME()`, detail: `系统日期", "系统时间字符串（HH:mm:ss） 返回 17:22:16.212`},
      { title: `NOW`, func: `func@NOW()`, detail: `系统时间", "系统时间字符串（HH:mm:ss）   返回  2021-10-08T08:50:01.486`},
      { title: `UNIX_TIMESTAMP()`, func: `func@UNIX_TIMESTAMP`, detail: `系统时间搓", "系统时间搓，返回整数  返回 1633680986`},
      { title: `UUID`, func: `func@UUID()`, detail: `通用唯一标识符", "例如，3d3c68f7-f608-473f-b60c-b0c44ad4cc4e`},
      { title: `ROUND`, func: `func@ROUND()`, detail: `随机数", "--介于 0.0（含）和 1.0（不含）之间的伪随机双精度值`},
    ],
};