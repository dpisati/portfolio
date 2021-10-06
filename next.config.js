module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: '/'
                }
            }
        ]
    })

    return config
  }
}
