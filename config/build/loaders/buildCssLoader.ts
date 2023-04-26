import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          // проверка на путь файла и если содержит модуль то тогда применять модули
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          // имена обычных файлов не модульных
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:8]'
            : '[hash:base64:8]',
        },
      },
    }, // Compiles Sass to CSS
    'sass-loader',
  ],
});
