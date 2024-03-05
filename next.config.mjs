/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `
    @use "@/constant/breakPoint.scss" as *;
    @use "@/constant/font.scss" as *;
    @use "@/constant/color.scss" as *;
    `,
  },
};

export default nextConfig;
