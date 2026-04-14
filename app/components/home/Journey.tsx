import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { journeySteps } from "~/data/journey";

export function Journey() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How It Works"
            title="Getting started is simple"
            description="From registration to delivery in 6 steps"
          />
        </AnimatedSection>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {journeySteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.08}>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full border-2 border-teal-600 flex items-center justify-center relative z-10 shadow-sm">
                    <span className="text-xl font-bold text-teal-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
