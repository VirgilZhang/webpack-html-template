// main.js

import './css/common.css'
import './css/common.less'
import 'babel-polyfill'

// 获取环境变量
console.log('NODE_EN', process.env.NODE_ENV)

// document.documentElement.addEventListener('click', event => {
//     // 异步加载模块
//     import('./sum').then(result => {
//         console.log(result.default(1,2), result.c)
//     })
// })
