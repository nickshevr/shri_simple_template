const path = require('path')
module.exports = {
    mode: 'development',
    devServer:{ 
        static: {
            publicPath: path.join(__dirname, 'dist')
        },
        open:true,
        compress: true,
        port: 3000
        }
}