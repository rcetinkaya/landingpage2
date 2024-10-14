/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    experimental: {
        optimizeCss: false,  // CSS optimizasyonunu kapatıyoruz
      },
      reactStrictMode: true, // Geliştirme sırasında hata tespiti için
      swcMinify: true,
};

export default config;
