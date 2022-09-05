## 小码王 c++社区

### 建议使用 yarn !!!

## 本地运行

```
yarn dev
```

```
yarn dev:test
```

## 从 yapi 生成 typescript 类型文件

```
yarn ytt
```

配置文件 ytt.config.ts

#### 环境配置文件

env.config.js

#### 注意事项

1. 若要使用 yarn server:\*\* ，需本地安装[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)
2. ytt 生成的类型文件，不要手动修改。先修改 yapi 内的接口, 再跑一遍命令 yarn ytt

#### 资料

1. [next.js 文档](https://nextjs.org/docs)
2. [小码王 scratch 社区](http://gitlab.xiaomawang.com/fe/community)
3. [yapi-to-typescript](https://fjc0k.github.io/yapi-to-typescript/handbook/usage.html)
