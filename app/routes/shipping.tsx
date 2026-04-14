import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { Accordion } from "~/components/ui/Accordion";
import { shippingFaqs } from "~/data/faqs";
import { warehouses } from "~/data/warehouses";
import { MapPin, Truck, Clock, Package } from "lucide-react";

export function meta() {
  return [
    { title: "Shipping & Delivery — WeOxy" },
    {
      name: "description",
      content:
        "WeOxy ships from 8 US warehouses with 2-5 day delivery. Same-day processing for orders before 2 PM EST.",
    },
  ];
}

export default function Shipping() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Shipping & Delivery"
            title="Fast, reliable nationwide delivery"
            description="8 strategically located warehouses ensure your orders arrive quickly"
          />
        </AnimatedSection>

        {/* Shipping Stats */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-teal-50 border border-teal-100">
              <Truck className="h-8 w-8 text-teal-600 shrink-0" />
              <div>
                <p className="text-2xl font-bold text-navy-900">2-5 Days</p>
                <p className="text-sm text-gray-600">Standard delivery nationwide</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-teal-50 border border-teal-100">
              <Clock className="h-8 w-8 text-teal-600 shrink-0" />
              <div>
                <p className="text-2xl font-bold text-navy-900">2 PM EST</p>
                <p className="text-sm text-gray-600">Same-day processing cutoff</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-teal-50 border border-teal-100">
              <Package className="h-8 w-8 text-teal-600 shrink-0" />
              <div>
                <p className="text-2xl font-bold text-navy-900">Bulk Freight</p>
                <p className="text-sm text-gray-600">Available for large orders</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Warehouse Locations */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              Our Warehouse Locations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {warehouses.map((wh) => (
                <div
                  key={`${wh.city}-${wh.state}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <MapPin className="h-4 w-4 text-teal-600 shrink-0" />
                  <span className="text-sm text-gray-700">
                    {wh.city}, {wh.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Shipping Policies */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-navy-900 mb-4">
                Standard Shipping
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Orders placed before 2:00 PM EST ship same day
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Delivery within 2-5 business days
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Tracking number provided via email
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Orders may ship from multiple warehouses
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-navy-900 mb-4">
                Expedited Shipping
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  1-2 business day delivery available
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Priority processing and handling
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Expedited options available at checkout
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 shrink-0" />
                  Physical address required (no P.O. boxes)
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h3>
            <Accordion items={shippingFaqs} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
