/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();
module.exports = removeImports({
  reactStrictMode: true,
  swcMinify: true,
});
/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}



module.exports = nextConfig*/
