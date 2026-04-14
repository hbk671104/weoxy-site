import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { warehouses } from "~/data/warehouses";
import { MapPin, Truck, Clock } from "lucide-react";

export function NationwideCoverage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Nationwide Coverage"
            title="Delivered fast from 8 US warehouses"
            description="Our distributed warehouse network ensures 2-5 day delivery to most US addresses"
          />
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-40 mx-auto mb-4 relative">
                    {/* Simplified US map shape */}
                    <div className="absolute inset-0 bg-navy-900/5 rounded-xl" />
                    {/* Warehouse dots */}
                    {[
                      { top: "30%", left: "15%", label: "CA" },
                      { top: "45%", left: "35%", label: "TX" },
                      { top: "55%", left: "70%", label: "GA" },
                      { top: "25%", left: "80%", label: "NJ" },
                    ].map((dot) => (
                      <div
                        key={dot.label}
                        className="absolute"
                        style={{ top: dot.top, left: dot.left }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping absolute" />
                          <div className="w-3 h-3 bg-teal-600 rounded-full relative" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    8 locations across the United States
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Warehouse List + Stats */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {warehouses.map((wh) => (
                  <div
                    key={`${wh.city}-${wh.state}`}
                    className="flex items-center gap-2 text-sm"
                  >
                    <MapPin className="h-4 w-4 text-teal-600 shrink-0" />
                    <span className="text-gray-700">
                      {wh.city}, {wh.state}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
                  <Truck className="h-6 w-6 text-teal-600 mb-2" />
                  <p className="text-2xl font-bold font-display text-navy-900" style={{ fontVariantNumeric: 'tabular-nums' }}>2-5 days</p>
                  <p className="text-sm text-gray-600">Standard delivery</p>
                </div>
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
                  <Clock className="h-6 w-6 text-teal-600 mb-2" />
                  <p className="text-2xl font-bold font-display text-navy-900" style={{ fontVariantNumeric: 'tabular-nums' }}>2 PM EST</p>
                  <p className="text-sm text-gray-600">Same-day cutoff</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
