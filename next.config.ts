import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        domains: ['topsoftwarecompanies.co', 'images.unsplash.com', 'cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
        search: "",
      },
    ],
  },
  // devIndicators : {
  //   appIsrStatus : true,
  //   buildActivity : true,
  //   buildActivityPosition : 'bottom-right',
  // }
};

export default nextConfig;
