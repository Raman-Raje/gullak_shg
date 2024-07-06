const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/UI'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@db': path.resolve(__dirname, 'src/db'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@fonts': path.resolve(__dirname, 'src/fonts'),
            '@forms': path.resolve(__dirname, 'src/forms'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@validation': path.resolve(__dirname, 'src/validation'),
            '@screens': path.resolve(__dirname, 'src/screens'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@hoc': path.resolve(__dirname, 'src/hoc'),
            '@socket': path.resolve(__dirname, 'src/socket'),
            '@client': path.resolve(__dirname, 'src/client'),
        },
        configure: (webpackConfig, { env }) => {
            // Add the ImageMinimizerPlugin configuration
            webpackConfig.optimization.minimizer.push(
                new ImageMinimizerPlugin({
                    generator: [
                        {
                            preset: "webp",
                            implementation: ImageMinimizerPlugin.imageminGenerate,
                            options: {
                                plugins: ["imagemin-webp"],
                            },
                        },
                    ],
                })
            );

            if (env === 'production') {
                // Filter out the CompressionPlugin
                webpackConfig.plugins = webpackConfig.plugins.filter(
                    (plugin) => plugin.constructor.name !== 'CompressionPlugin'
                );
            }

            return webpackConfig;
        },
    },
};
