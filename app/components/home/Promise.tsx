import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { RefreshCw, Wrench, Clock } from "lucide-react";

const promises = [
  {
    icon: RefreshCw,
    title: "Replacement First",
    description:
      "We ship a replacement device before you return the original. Your patients never go without oxygen therapy.",
  },
  {
    icon: Wrench,
    title: "No Repair Delays",
    description:
      "We don't make you wait for repairs. Our advance replacement program means zero downtime for your practice.",
  },
  {
    icon: Clock,
    title: "48-Hour Advance Replacement",
    description:
      "Contact us about a device issue and receive a replacement within 48 hours — guaranteed.",
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
