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

## 第三步

在 Vue3 组件中使用 Jest

安装 @vue/vue3-jest
https://www.npmjs.com/package/@vue/vue3-jest

创建 Vue 组件和对应单测文件

* ./src/HelloWorld.vue
* hello.test.js


```bash
pnpm add vue
pnpm add -D @vue/vue3-jest
```

```bash
pnpm add -D @vue/test-utils
```

由于 jest 不识别 vue 语法，所以需要配置 jest.config.js

```js
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
  }
}
```

编写 Vue 测试用例，执行 `pnpm test` 发现报错： 

```bash
Test Vue Running
  The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
  Consider using the "jsdom" test environment.
```

提示我们需要一个 `jsdom` 的测试环境

继续更改 jest.config.js 配置：

```js
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  ...
}
```
再次执行 `pnpm test` 

依旧报错：

```bash
Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.
```

安装 `jest-environment-jsdom` 依赖包

```bash
pnpm add -D jest-environment-jsdom
```

安装完毕后再次执行 `pnpm test` 


依旧报错：

```bash
● Test suite failed to run

  ReferenceError: Vue is not defined
```

关联 issues ：https://github.com/vuejs/vue-jest/issues/479

在 `jest.config.js` 中添加如下配置：

```
testEnvironmentOptions: {
  customExportConditions: [
    'node',
    'node-addons'
  ]
},
```


接着再次执行 `pnpm test` ，测试通过！




