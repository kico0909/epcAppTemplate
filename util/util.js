/*
 * @Author: ChunkDing
 * @Date: 2022-06-20 12:44:54
 * @Description: ...
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
import { resolve } from 'path'

const fs = require('fs') // 引入fs模块

function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}

function deleteall(path) {
  let files = []

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(function (file) {
      const curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteall(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

export { pathResolve, deleteall }
