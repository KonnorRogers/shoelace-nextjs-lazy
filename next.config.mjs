import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: "loose" },
  webpack: (config, options) => {
    config.plugins.push(
        new CopyPlugin({
            patterns: [
                {
                    from: resolve(
                        __dirname,
                        "node_modules/@shoelace-style/shoelace/dist/assets/"
                    ),
                    to: resolve(__dirname, "public/shoelace-assets/assets/"),
                },
            ],
        })
    );
    return config;
  }
};

export default nextConfig;
