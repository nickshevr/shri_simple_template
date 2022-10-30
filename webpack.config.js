const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
module.exports = ({env})=>{
    console.log(env)
    const envConfig = require(`./webpack.${env || 'development'}.js`);
return merge(commonConfig, envConfig);

};