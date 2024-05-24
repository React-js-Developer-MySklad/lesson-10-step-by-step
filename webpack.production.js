const { merge } = require("webpack-merge");
const config = require('./webpack.config')
module.exports = merge(config, {
    // Установка режима сборки для использовани встроеных в webpack отпимизаций результирующего bundle.
    // https://webpack.js.org/configuration/mode/
    mode: 'production',
})