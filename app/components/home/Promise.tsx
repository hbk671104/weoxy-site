import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "5-Year Device Warranty",
    description:
      "Full device coverage for 5 years plus a 3-year sieve bed warranty. Covers manufacturing defects, component failures, and sieve bed degradation under normal use.",
  },
  {
    icon: RefreshCw,
    title: "48-Hour Advance Replacement",
    description:
      "Report a device issue and receive a replacement within 48 hours. We ship before you return the original — zero patient downtime.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Support",
    description:
      "Direct access to your account representative by phone or email. No call centers, no ticket queues. Mon–Fri, 8 AM – 6 PM EST.",
  },
];

export function Promise() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Promise"
            title="We stand behind every device"
            description="Our 5-year warranty and advance replacement program set the standard for customer care in oxygen therapy"
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {promises.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-teal-600/20 flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
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
