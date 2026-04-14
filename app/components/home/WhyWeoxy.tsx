import { AnimatedSection } from "~/components/ui/AnimatedSection";

export function WhyWeoxy() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Why WeOxy
            </p>
            <h2 className="font-display text-display-section font-bold text-navy-900 mb-6">
              Why providers choose WeOxy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              WeOxy portable oxygen concentrators deliver more oxygen per pound
              than any competitor — at 3.97 lbs with up to 95.5% concentration.
              ISO 13485 certified manufacturing, 8 US warehouses for fast
              delivery, and the only POC with USB-C charging and a 5-year
              warranty.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Medical-Grade Precision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ISO 13485 certified manufacturing with rigorous quality control
                at every stage. Each device is individually tested to ensure
                consistent oxygen delivery.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-900 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Award-Winning Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recognized by 6 international design awards including iF Design,
                Red Dot, and IDEA. Compact, lightweight, and built for everyday
                life.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Unmatched Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                5-year warranty with advance replacement in 48 hours. 8
                warehouses across the US for 2-5 day delivery. We stand behind
                every device.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
