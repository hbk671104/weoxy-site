import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { Button } from "~/components/ui/Button";
import { Usb, RefreshCw, ArrowRight } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Product Showcase"
            title="The ultimate portable oxygen for a better life"
            description="Breathe freely, spend wisely. Our lineup covers every need from standard to professional use."
          />
        </AnimatedSection>

        {/* Product Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Q5",
              pulse: "5 Pulse Settings",
              battery: "Up to 7 hours",
              color: "from-teal-500 to-teal-700",
            },
            {
              name: "Q6",
              pulse: "6 Pulse Settings",
              battery: "Up to 9 hours",
              color: "from-navy-700 to-navy-900",
            },
            {
              name: "Q7",
              pulse: "7 Pulse Settings",
              battery: "Up to 10 hours",
              color: "from-teal-600 to-navy-800",
              featured: true,
            },
          ].map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 0.1}>
              <div
                className={`relative group rounded-2xl overflow-hidden ${
                  product.featured ? "md:-translate-y-4" : ""
                }`}
              >
                {product.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`aspect-[4/5] bg-gradient-to-br ${product.color} flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <span className="text-7xl font-bold block mb-2">
                      {product.name}
                    </span>
                    <p className="text-white/80 text-sm">{product.pulse}</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-gray-100 border-t-0 rounded-b-2xl">
                  <h3 className="text-lg font-bold text-navy-900">
                    WeOxy {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.pulse} · {product.battery}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Log in to see price
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Features Row */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                <Usb className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-1">
                  Universal USB-C Charging
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Charge with any USB-C cable. Full charge in just 2 hours —
                  the fastest in the industry. No proprietary chargers needed.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-1">
                  Advance Replacement Service
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If your device needs service, we ship a replacement first —
                  within 48 hours. No repair delays, no downtime for patients.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <Button to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
