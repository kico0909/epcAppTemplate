/*
 * @Author: ChunkDing
 * @Date: 2022-06-19 07:10:04
 * @Description:
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
window.taskTypes = {
  collection: {title: '采集任务', actions: {new: 'TasksNew', edit: 'TasksEdit'}},
  // collection: {title: '采集任务', actions: {new: 'CollectionTaskNew', edit: 'CollectionTaskEdit'}},
  calc: {title: '计算任务', actions: {new: 'TasksNew', edit: 'TasksEdit'}},
  // calc: {title: '计算任务', actions: {new: 'CalcTaskNew', edit: 'CalcTaskEdit'}},
  quality: {title: '质量任务', actions: {new: 'TasksNew', edit: 'TasksEdit'}},
  // quality: {title: '质量任务', actions: {new: 'QulityTaskNew', edit: 'QulityTaskEdit'}},
  script: {title: '脚本任务', actions: {new: 'TasksNew', edit: 'TasksEdit'}},
  // script: {title: '脚本任务', actions: {new: 'ScriptTaskNew', edit: 'ScriptTaskEdit'}},
  jar: {title: 'JAR任务', actions: {new: 'TasksNew', edit: 'TasksEdit'}},
  // jar: {title: 'JAR任务', actions: {new: 'JarTaskNew', edit: 'JarTaskEdit'}},
};

window.assetsRequestMode = [
  { label: "GET", value: "get" },
  { label: "POST", value: "post" },
  { label: "PUT", value: "put" },
  { label: "DELETE", value: "delete" },
  { label: "HEAD", value: "head" },
  { label: "OPTIONS", value: "options" },
  { label: "PATCH", value: "patch" }
];

window.assetsProtocol = [
  { label: "HTTP", value: "http" },
  { label: "HTTPS", value: "https" },
];

window.assetsResponseFormat = [
  { label: "JSON", value: "json" },
];

window.taskCollectionType = [
  {value: "all-insert", label: "全量插入"},
  {value: "all-update", label: "全量更新"},
  {value: "all-replace", label: "全量替换"},
  {value: "incremental-insert", label: "增量插入"},
  {value: "incremental-update", label: "增量更新"},
  {value: "incremental-replace", label: "增量替换"}
]

window.os = {
  cpuArch: {title: 'cpu 架构', unit: ''},
  cpuCores: {title: 'cpu 核数', unit: ''},
  memory: {title: '内存', unit: ''},
  os: {title: '操作系统', unit: ''},
  storageTotal: {title: '存储总数', unit: 'Gb'},
  storageFree: {title: '空闲存储', unit: 'Gb'},
  storageUsed: {title: '已用存储', unit: ''},
}

window.qualityRules = [
  {label: "全部", value: "all"},
  {label: "准确性", value: "accuracy"},
  {label: "唯一性", value: "unique"},
  {label: "完整性", value: "integrity"},
  {label: "一致性", value: "consistency"},
  {label: "有效性", value: "validity"},
  {label: "及时性", value: "timeliness"},
]