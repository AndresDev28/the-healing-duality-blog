import type { NextConfig } from "next";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  (async () => {
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  })();
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
