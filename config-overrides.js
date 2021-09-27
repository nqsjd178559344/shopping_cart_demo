/* config-overrides.js */
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin // 输出dist每个文件的大小的树形图
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
}

// module.exports = {
//     //do stuff with the webpack config...
//     plugins: [
//         new BundleAnalyzer()
//     ]
// }