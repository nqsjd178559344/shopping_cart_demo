/* config-overrides.js */
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin // 输出dist每个文件的大小的树形图
// 方法1
const rewireLess = require('@joiner/react-app-rewire-less-modules');
// 方法2
// const rewireLess = require('@joiner/react-app-rewire-less');// todo 找不到包
// ? 1/2使用方法相同 => 均需要加入less-loader@^4.1.0

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireLess(config, env);
    // let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
    // loaders.unshift({ // todo 报错与less-loader高版本一样
    //     test: /\.less$/,
    //     use: [
    //         require.resolve('style-loader'),
    //         {
    //             loader: require.resolve('css-loader')
    //         },
    //         // {
    //         //     loader: 'postcss-loader',
    //         //     options: { //! autoprefixer 需要配置浏览器版本 => postcss.config.js文件
    //         //         // plugins: [require("autoprefixer")],
    //         //         // config:{
    //         //         //     path:'postcss.config.js'
    //         //         // }
    //         //         // plugins: ()=>[require("autoprefixer")]
    //         //         // postcssOptions: {
    //         //         //     plugins: [
    //         //         //       [
    //         //         //         "autoprefixer",
    //         //         //         {
    //         //         //           // Options
    //         //         //         },
    //         //         //       ],
    //         //         //     ],
    //         //         //   },
    //         //     }
    //         // },
    //         {
    //             loader: require.resolve('less-loader')
    //         }
    //     ]
    // })
    if (config.plugins) {
        config.plugins.push(new BundleAnalyzer())
    }
    return config;
}