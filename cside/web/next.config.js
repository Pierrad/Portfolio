module.exports = {
    future: {
        webpack5: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    module: {
        rules: [
          {
            test: /\.(woff2|woff|eot|ttf|otf)$/,
            use: ["file-loader"],
          },
        ],
    },
}
