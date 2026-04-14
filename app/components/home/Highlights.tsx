import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { highlights } from "~/data/highlights";

export function Highlights() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Get the Highlights"
            title="Designed to outperform"
            description="Every detail engineered for oxygen therapy excellence"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <div className="group relative p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <item.icon className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-3xl font-bold text-navy-900 mb-1">
                  {item.value}
                </p>
                <p className="font-semibold text-navy-900 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
