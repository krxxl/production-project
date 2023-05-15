import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      }
    }],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);

  // const typescriptLoader = {
  //   test: /\.tsx?$/, // обрабатывает tsx ts файлы
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [
    svgLoader,
    fileLoader,
    babelLoader,
    tsxBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
}
