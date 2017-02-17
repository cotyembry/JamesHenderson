module.exports = {
  // entry: './js/indexToCreateHome.js',
  // entry: './js/indexToCreateContact.js',
  entry: './js/index.js',
  // entry: './js/indexToCreateHistory.js',
  // entry: './js/indexToCreateBeliefs.js',
  // entry: './js/indexToCreateApplication.js',
  output: {
    path: __dirname,
    // filename: './dist/bundle.js'
    // filename: './dist/contact.js'
    filename: './dist/bundle.js'
    // filename: './dist/history.js'
    // filename: './dist/beliefs.js'
    // filename: './dist/application.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    }]
  }
}
// {
//       loader: "babel-loader",

//       // Skip any files outside of your project's `src` directory
//       include: [
//         path.resolve(__dirname, "src"),
//       ],

//       // Only run `.js` and `.jsx` files through Babel
//       test: /\.jsx?$/,

//       // Options to configure babel with
//       query: {
//         plugins: ['transform-runtime'],
//         presets: ['es2015', 'stage-0', 'react'],
//       }
//     },


// module.exports = {
//   entry: './ts/index.ts',
//   output: {
//     filename: 'bundle.js'
//   },
//   resolve: {
//     // Add `.ts` and `.tsx` as a resolvable extension.
//     extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
//   },
//   module: {
//     loaders: [
//       // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
//       { test: /\.tsx?$/, loader: 'ts-loader' }
//     ]
//   }
// }