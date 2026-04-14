import { Link, useLocation } from "react-router";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { products } from "~/data/products";
import type { Product } from "~/data/products";

export function meta() {
  return [
    { title: "Products — WeOxy Portable Oxygen Concentrators" },
    {
      name: "description",
      content:
        "Browse WeOxy portable oxygen concentrators and accessories. Q5, Q6, Q7 models with up to 10 hours battery life and USB-C charging.",
    },
  ];
}

const tabs = [
  { label: "All Products", to: "/products" },
  { label: "Portable Oxygen", to: "/products/poc" },
  { label: "Parts & Accessories", to: "/products/parts" },
];

function ProductCard({ product }: { product: Product }) {
  const gradient =
    product.category === "poc"
      ? "from-teal-500/10 to-navy-900/10"
      : "from-gray-100 to-gray-200";

  return (
    <div className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/5 transition-all duration-300">
      <div
        className={`aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <div className="text-center">
          <span className="text-5xl font-bold text-navy-900/80">
            {product.name.replace("WeOxy ", "").replace("Performance Battery ", "").replace("Power Battery ", "")}
          </span>
          {product.category === "poc" && (
            <p className="text-sm text-gray-500 mt-2">Portable Oxygen Concentrator</p>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="inline-flex px-2.5 py-1 text-xs bg-gray-50 text-gray-600 rounded-md border border-gray-100"
            >
              {spec}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-400 italic">
          Log in to see price
        </p>
      </div>
    </div>
  );
}

export function ProductGrid({ filter }: { filter?: "poc" | "parts" }) {
  const filtered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((product, index) => (
        <AnimatedSection key={product.id} delay={index * 0.08}>
          <ProductCard product={product} />
        </AnimatedSection>
      ))}
    </div>
  );
}

export function ProductTabs() {
  const location = useLocation();

  return (
    <div className="flex items-center gap-2 mb-10 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.to;
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Products() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Products"
            title="Portable oxygen concentrators & accessories"
            description="Industry-leading devices designed for maximum oxygen output in a lightweight package"
          />
        </AnimatedSection>

        <div className="mt-12">
          <ProductTabs />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
