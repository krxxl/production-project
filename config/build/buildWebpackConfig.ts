import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
 const {mode, paths, isDev} = options
 return {
  mode,
  entry: paths.entry,
  output: {
   filename: '[name].[contenthash].js',
   path: paths.build,
   clean: true
  },
  plugins: buildPlugins(options),
  module: {
   // для лоудеров, которые будут обрабатывать css png jpg etc  все что не js
   rules: buildLoaders(options),
  },
  // для того чтоб не указывать разширения при инпорте ./component[.без]
  resolve: buildResolves(options),
  // для того чтоб понимать где ошибка
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(options) : undefined,
 }
}