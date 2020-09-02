# xc-search

## 项目考察点：

- 从 0 搭建基于 React+Typescript 全家桶的单页面应用环境；
- 需求理解能力；
- 代码规范；
- React 的熟练程度
- Typescript 的熟练程度；
- GraphQL 的熟练程度；
- 社区关注度（通过选择的库来判断）；
- CI/CD；

## 已完成

- 使用 webpack、babel 等工具完成环境搭建；
- 使用 eslint、stylelint、prettier 等工具制定代码规范；
- 需求解析：构建一款类似 Github 搜索功能的单页面应用，使用 React+Typescript+GraphQL；

## 关于未完成

- 引入 React-Router，构建主页、401 页面以及 404 页面
- 使用 Apollo+GraphQL 构建 Query，查询 Repositories、Code、Commits、Issues、Packages 等模块信息；
- 使用 Antd 组件库编写搜索框以及展示列表（包括分页、排序等）；
- 编写 CI/CD 配置文件；

## 遇到的问题

1. 编译时，node_modules 中的 ES6 语法无法被正确编译；

   - node 版本过低，升级到 v12.8.3 后重新安装；

2. 编译时 HashSource 大量报错，导致编译速度缓慢；

   - 先禁用 HardSourceWebpackPlugin，提升编译速度完成后续工作；

3. 编译偶尔会导致 bundle 包无法被#root 节点正确引入，需重新启动项目；

   - 暂时还未找到问题根源。
