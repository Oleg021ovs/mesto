const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: { main: './src/script/index.js' },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
            publicPath: ''
      },
      mode: 'development', // добавили режим разработчика

      devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    
        open: true // сайт будет открываться сам при запуске npm run dev
      },

      
      module: {
        rules: [
            {
                test:/\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    
                } 
            },
            
{
    test: /\.css$/,
    use: [
        miniCssPlugin.loader,
        {
            loader:'css-loader',
            options: {
                importLoaders: 1
            }
        },
             
            'postcss-loader'
    ]
},
{
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    type: 'asset/resource',
    generator: {
        filename: 'images/[name].[hash][ext]'
    }
},

{
    test: /\.(woff|woff2|ttf|eot|otf)$/,
    type: 'asset/resource',
    generator: {
        filename: 'fonts/[name].[hash][ext]'
    }
}
        ]
      },
       
       plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssPlugin(),
        new CleanWebpackPlugin()
       ]
   }
   
   
   

