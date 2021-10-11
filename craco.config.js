const CracoLessPlugin = require('craco-less')

module.exports = {
    webpack: {

    },
    babel: {
        plugins: [
            ['@babel/plugin-proposal-decorators', {
                legacy: true,
            }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ]
}