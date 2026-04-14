import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: process.env.NODE_ENV === "production" ? "/weoxy-site" : "/",
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
