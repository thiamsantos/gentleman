import babel from 'rollup-plugin-babel'

export default {
  entry: 'index.esnext.js',
  format: 'cjs',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['es2015', {modules: false}]
      ],
      plugins: ['external-helpers']
    })
  ],
  dest: 'index.js'
}
