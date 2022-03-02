module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', 'svg'],
        alias: {
          root: ['./src'],
          _: './src',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _images: './src/assets/images',
          _icons: './src/assets/icons',
          _constants: './src/constants',
          _screens: './src/screens',
          _contexts: './src/contexts',
          _themes: './src/themes',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
