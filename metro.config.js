const { getDefaultConfig } = require('metro-config');
const jsoMetroPlugin = require('obfuscator-io-metro-plugin')(
  {
    compact: false,
    sourceMap: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 1,
  },
  {
    runInDev: false,
    logObfuscatedFiles: true,
    sourceMapLocation: './index.android.bundle.map',
  },
);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    ...jsoMetroPlugin,
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'jsx', 'js', 'json', 'ts', 'tsx', 'svg'],
    },
  };
})();
