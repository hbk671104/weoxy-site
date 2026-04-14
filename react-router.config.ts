import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
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
