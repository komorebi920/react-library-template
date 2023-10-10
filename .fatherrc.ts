import { defineConfig } from "father";

export default defineConfig({
  esm: {},
  umd: {
    name: "MyLibrary",
    chainWebpack: (memo) => {
      memo.output.libraryExport("default");
      return memo;
    },
    extractCSS: false,
    output: {
      filename: "index.js",
    },
    theme: {
      "@primary-color": "#e63740",
    },
  },
  sourcemap: true,
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
  prebundle: {
    deps: {},
  },
});
