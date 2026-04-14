import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { ProductTabs, ProductGrid } from "~/routes/products";

export function meta() {
  return [
    { title: "Portable Oxygen Concentrators — WeOxy" },
    {
      name: "description",
      content:
        "Browse WeOxy portable oxygen concentrators: Q5, Q6, and Q7 with up to 10 hours battery, USB-C charging, and FAA approval.",
    },
  ];
}

export default function ProductsPoc() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Portable Oxygen Concentrators"
            title="WeOxy Q5, Q6, and Q7"
            description="Choose from 3 models with 5, 6, or 7 pulse flow settings — all at 3.97 lbs"
          />
        </AnimatedSection>

        <div className="mt-12">
          <ProductTabs />
          <ProductGrid filter="poc" />
        </div>
      </div>
    </section>
  );
}
