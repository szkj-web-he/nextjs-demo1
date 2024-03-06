const envData = () => {
  const cmd = process.env.npm_lifecycle_event;

  switch (cmd) {
    case "buildV2":
      return {
        ENV: "v2_dev",
        BASENAME: "/v2/dev",
      };
    case "testV2":
      return {
        ENV: "v2_test",
        BASENAME: "/v2/test",
      };
    case "releases":
      return {
        ENV: "production",
        BASENAME: "/v2/stable",
      };
    default:
      return {
        ENV: "development",
        BASENAME: "/",
      };
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  sassOptions: {
    additionalData: `
    @use "@/constant/breakPoint.scss" as *;
    @use "@/constant/font.scss" as *;
    @use "@/constant/color.scss" as *;
    `,
  },
  env: envData(),
};

export default nextConfig;
