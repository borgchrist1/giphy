import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/scripts/index.js',
  dest: 'public/assets/scripts/giphy.js',
  format: 'iife',
  sourceMap: true,
  "plugins":[
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve({
      jsnext: true,
      browser: true
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
};
