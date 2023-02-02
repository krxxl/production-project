import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader"  : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            // проверка на путь файла и если содержит модуль то тогда применять модули
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // имена обычных файлов не модульных
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          },
        }
      },      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const typescriptLoader = {
      test: /\.tsx?$/, // обрабатывает tsx ts файлы
      use: 'ts-loader',
      exclude: /node_modules/,
    };

  return [
    typescriptLoader,
    cssLoader,
  ]
}