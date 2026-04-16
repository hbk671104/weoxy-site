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
          {/* US Map */}
          <AnimatedSection delay={0.1}>
            <div className="aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 relative overflow-hidden">
              <svg
                viewBox="30 20 840 540"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Map of the United States showing 8 warehouse locations in California, Texas, Georgia, and New Jersey"
              >
                {/* Continental US outline */}
                <path
                  d="M122,100 C140,97 170,93 200,90 L260,86 L320,82 L380,78 L430,76 L470,78
                    C485,76 498,72 510,78 L525,72 L538,82 L548,70 C558,74 568,80 575,88
                    L585,78 C592,72 600,80 608,92 L615,110 C612,125 608,135 612,145
                    L625,142 C638,136 652,138 665,140 L695,138 L720,140 C735,136 748,132 758,130
                    L775,138 C782,134 790,126 798,115 L808,102 C815,95 820,105 818,115
                    L812,130 L805,148 L798,165 C795,172 794,180 798,188 L808,185
                    C815,182 818,190 812,198 L800,208 L790,220 L782,235 L775,250
                    L768,265 L760,282 L752,298 L742,318 L732,335 L722,350 L715,365
                    L710,380 L712,395 L718,412 C722,425 728,442 734,460 L740,482
                    C742,495 738,508 732,515 C728,520 722,515 718,508 L712,495
                    L705,475 L698,458 C688,448 675,445 660,448 L635,455 L608,460
                    L580,464 L555,466 C545,468 538,465 532,460 L540,470
                    C542,475 535,478 528,476 L515,478 L498,480 L482,484
                    C475,486 468,480 462,476 L452,470 C445,475 440,482 432,492
                    L420,505 C412,515 402,512 392,505 L378,492 L362,478 L345,466
                    L325,458 L300,448 L272,438 L242,425 L215,412 L188,398
                    L165,388 C155,384 145,378 138,372 L128,362 C120,352 114,340 110,325
                    L102,298 L94,268 L88,240 C84,220 82,200 80,185
                    C78,170 80,155 84,140 L90,118 C95,105 105,95 118,100 Z"
                  fill="#f0fdf4"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* Warehouse location markers */}
                {[
                  { cx: 132, cy: 358, label: "CA" },
                  { cx: 448, cy: 468, label: "TX" },
                  { cx: 685, cy: 372, label: "GA" },
                  { cx: 792, cy: 212, label: "NJ" },
                ].map((loc) => (
                  <g key={loc.label}>
                    {/* Pulse ring */}
                    <circle cx={loc.cx} cy={loc.cy} r="8" fill="#0d9488" opacity="0.15">
                      <animate attributeName="r" from="8" to="30" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.25" to="0" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Outer glow */}
                    <circle cx={loc.cx} cy={loc.cy} r="14" fill="#ccfbf1" stroke="#99f6e4" strokeWidth="1" />
                    {/* Inner dot */}
                    <circle cx={loc.cx} cy={loc.cy} r="6" fill="#0d9488" />
                    {/* Label */}
                    <text
                      x={loc.cx}
                      y={loc.cy - 22}
                      textAnchor="middle"
                      fill="#0f766e"
                      fontSize="13"
                      fontWeight="600"
                    >
                      {loc.label}
                    </text>
                  </g>
                ))}
              </svg>
              <p className="absolute bottom-3 left-0 right-0 text-center text-sm text-gray-500">
                8 locations across the United States
              </p>
            </div>
          </AnimatedSection>

          {/* Warehouse List + Stats */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
