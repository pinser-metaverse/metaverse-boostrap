const { terser } = require('rollup-plugin-terser');
const tsconfig = require('../../tsconfig.base.json');
const alias = require('@rollup/plugin-alias');

function getRollupOptions(options) {
  const extraGlobals = {};
  const externals = [
    '@pinser-metaverse/camrender',
    '@pinser-metaverse/core',
    '@pinser-metaverse/mesh',
    '@pinser-metaverse/player',
    '@pinser-metaverse/scene',
    '@pinser-metaverse/exporter',
    '@pinser-metaverse/info',
    '@pinser-metaverse/observe',
    '@pinser-metaverse/teleport',
    '@pinser-metaverse/ready-player-me',
    '@pinser-metaverse/design-system',
    '@pinser-metaverse/screen-shared',
    '@pinser-metaverse/router',
    '@pinser-metaverse/spline',
    '@pinser-metaverse/mesh',
  ];

  const value = {
    ...options,
    external: (name) => {
      if (externals.includes(name)) {
        return true;
      }

      return false;
    },
    plugins: [
      ...options.plugins,
      alias({
        entries: Object.getOwnPropertyNames(tsconfig.compilerOptions.paths).map(
          (property) => ({
            find: property,
            replacement: tsconfig.compilerOptions.paths[property][0],
          })
        ),
      }),
    ],
    output: {
      ...options.output,
      globals: extraGlobals,
      plugins: [terser()],
    },
  };

  return value;
}

module.exports = getRollupOptions;
