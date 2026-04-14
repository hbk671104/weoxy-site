import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { comparisonData } from "~/data/specs";
import { Check } from "lucide-react";

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Head-to-Head"
            title="WeOxy vs. the competition"
            description="WeOxy vs. industry average across 10 key metrics"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 relative overflow-x-auto after:pointer-events-none after:absolute after:right-0 after:inset-y-0 after:w-8 after:bg-linear-to-l after:from-gray-50 after:to-transparent md:after:hidden">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-bold">
                      WeOxy
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Competitor Avg
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-50/50 transition-colors`}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-navy-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-semibold text-navy-900" style={{ fontVariantNumeric: 'tabular-nums' }}>
                          {row.weoxy}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-gray-500">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
