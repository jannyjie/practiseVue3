const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./", // 相对路径
  assetsPublicPath: "./",
  transpileDependencies: true,
  // 在專案開發中如果呼叫 API 時會 pass 給這個 proxy 網址
  // 這邊就用前面以 Valet 建立的網站網址
  // devServer: {
  //   proxy: 'https://project.test'
  // },

  // // 建置前端靜態檔案時要擺放的目錄
  // // 在 package.json 也要調整 "build" 這個 script
  // outputDir: '../public',

  // // 開發階段修改 index.html 來讓 js/css 可以作用
  // // 上線階段則會修改 Laravel 的樣版
  // indexPath: process.env.NODE_ENV === 'production'
  //   ? '../resources/views/index.blade.php'
  //   : 'index.html'
  // 如果配置超負荷需要添加這個
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      console.log(args);
      args[0].title = "title标题";
      args[0].keywords = "keywords内容";
      args[0].description = "description内容";
      return args;
    });
  },
});
