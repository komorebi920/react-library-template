# react-library-template

react + ant-design + styled-components + vite + father

- 开发环境：[vite](https://github.com/vitejs/vite)
- 打包工具：[father](https://github.com/umijs/father)
- 支持 IE11（UMD 格式）
    - Header 样式依然有问题：Menu 使用了 `::before` 和 `::after`，
    - `@ant-design/icons^5.0.0` 使用了 `ShadowRoot`
    - `@ant-design/icons^4.0.0` 会导致编译报错，原因暂不清楚：
        ```bash
        Error: Failed to read cache value at: node_modules/.cache/father/bundless-loader/b466b74c9ea3b5d590b63a9b31129762. node_modules/.cache/father/bundless-loader/b466b74c9ea3b5d590b63a9b31129762: Unexpected end of JSON input
        ```
