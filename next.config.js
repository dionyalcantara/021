/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.blz-contentstack.com', 'cdn.oneesports.gg'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

module.exports = nextConfig
