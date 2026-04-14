import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { engineeredSpecs } from "~/data/specs";

export function EngineeredExcellence() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Specifications"
            title="Engineered for excellence"
            description="Every specification optimized for the best possible oxygen therapy experience"
            light
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {engineeredSpecs.map((spec, index) => (
            <AnimatedSection key={spec.label} delay={index * 0.08}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors">
                <p className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">
                  {spec.value}
                  {spec.unit && (
                    <span className="text-lg text-teal-400/70 ml-1">
                      {spec.unit}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-400">{spec.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
