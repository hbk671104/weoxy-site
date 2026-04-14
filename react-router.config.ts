import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: "/weoxy-site",
  prerender: [
    "/",
    "/products",
    "/products/poc",
    "/products/parts",
    "/contact",
    "/shipping",
    "/support",
  ],
} satisfies Config;
