ar path = require('path');
module.exports={
    entry:'./src/lib/app.js',
    output:{
        path: path.join(__dirname, 'dist/'),
        filename:'vue-toast-demo.js',
        libraryTarget:'umd',
        library:'VueToastDemo'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude:/node_modules/,
                options:{
                    loaders:{
                        'scss':'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/
            }
        ]
    }
   
}
