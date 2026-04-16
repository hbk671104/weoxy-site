import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { advantages } from "~/data/advantages";

export function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Advantage"
            title="Optimized for DME efficiency"
            description="Every feature is designed to reduce your cost of ownership and increase patient retention"
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {advantages.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/5 transition-[border-color,box-shadow] duration-300 h-full flex flex-col">
                {/* Visual area — placeholder for future photography */}
                <div
                  className={`relative bg-linear-to-br ${card.gradient} p-8 flex items-center justify-center min-h-[160px]`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-8 right-8">
                    <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    {card.title}
                  </h3>

                  <div className="space-y-3 flex-1">
                    {card.benefits.map((benefit) => (
                      <div key={benefit.label} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <div>
                          <p className="font-semibold text-navy-900 text-sm">
                            {benefit.label}
                          </p>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {benefit.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 pt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {card.takeaway}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
