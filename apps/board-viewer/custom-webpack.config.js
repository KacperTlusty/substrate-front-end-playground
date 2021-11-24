const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.

module.exports = (config, context) => {
  console.log({ config });

  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,

  console.log({ config });
  // then override your config.
  return {
    ...config,
    plugins: [...config.plugins],
    resolve: {
      ...config.resolve,
      fallback: {
        ...(config.resolve.fallback || {}),
        crypto: require.resolve('crypto-browserify'),
        os: require.resolve('os-browserify'),
        process: require.resolve('process'),
        stream: require.resolve('stream-http'),
        vm: require.resolve('vm-browserify'),
      },
    },
  };
};
