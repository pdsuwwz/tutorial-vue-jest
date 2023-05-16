## 第一步

* 安装 Jest

```bash
pnpm add -D jest
```

创建 sum.js 和 sum.test.js 文件

分别编写 sum 函数 和对应的测试用例

执行 `pnpm test` 得到打印结果： `PASS  ./sum.test.js` 即代表测试用例编写成功

## 第二步

支持 ES6 语法

* 安装 Babel
`pnpm add -D babel-jest @babel/core @babel/preset-env`

* 配置 babel.config.js 文件
```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```





