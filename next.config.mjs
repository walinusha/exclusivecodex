// Hostinger (and similar) Linux images ship glibc older than Next 16's
// native SWC binary requires (GLIBC 2.29). Force the WASM compiler there
// so `next build` does not depend on the native .node file.
if (process.platform === "linux") {
  process.env.NEXT_TEST_WASM = "1";
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
