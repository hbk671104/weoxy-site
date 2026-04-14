import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  route("products/poc", "routes/products-poc.tsx"),
  route("products/parts", "routes/products-parts.tsx"),
  route("contact", "routes/contact.tsx"),
  route("shipping", "routes/shipping.tsx"),
  route("support", "routes/support.tsx"),
] satisfies RouteConfig;
