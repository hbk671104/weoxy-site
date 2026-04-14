import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { ProductTabs, ProductGrid } from "~/routes/products";

export function meta() {
  return [
    { title: "Parts & Accessories — WeOxy" },
    {
      name: "description",
      content:
        "WeOxy replacement batteries and accessories. Performance and Power batteries with USB-C charging.",
    },
  ];
}

export default function ProductsParts() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Parts & Accessories"
            title="Replacement batteries & accessories"
            description="Keep your WeOxy running at peak performance with genuine parts"
          />
        </AnimatedSection>

        <div className="mt-12">
          <ProductTabs />
          <ProductGrid filter="parts" />
        </div>
      </div>
    </section>
  );
}
