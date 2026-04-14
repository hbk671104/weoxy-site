import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { Accordion } from "~/components/ui/Accordion";
import { Button } from "~/components/ui/Button";
import { supportFaqs } from "~/data/faqs";
import { FileText, Download, Phone } from "lucide-react";

export function meta() {
  return [
    { title: "Support — WeOxy" },
    {
      name: "description",
      content:
        "WeOxy support resources: quick start guide, specifications, user manual, and FAQs. Contact us at 1-(617)-963-8999.",
    },
  ];
}

const documents = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with your WeOxy device",
    size: "1.4 MB",
    icon: FileText,
  },
  {
    title: "Specifications",
    description: "Detailed technical specifications for all models",
    size: "97 KB",
    icon: FileText,
  },
  {
    title: "User Manual",
    description: "Complete operation and maintenance guide",
    size: "7.5 MB",
    icon: FileText,
  },
];

export default function Support() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Support"
            title="Support & documentation"
            description="Download product documentation, browse FAQs, or contact our support team directly"
          />
        </AnimatedSection>

        {/* Documents */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12">
            <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-6">
              Documents & Downloads
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href="#"
                  className="group p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/5 active:border-teal-300 active:shadow-none transition-[border-color,box-shadow] duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <doc.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {doc.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-teal-600 font-medium">
                    <Download className="h-4 w-4" />
                    <span>Download ({doc.size})</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16" id="faqs">
            <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h3>
            <Accordion items={supportFaqs} />
          </div>
        </AnimatedSection>

        {/* Contact Fallback */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-100">
            <Phone className="h-10 w-10 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our support team is available Monday through Friday, 8 AM to 6 PM
              EST. We're happy to assist with any questions.
            </p>
            <Button to="/contact">Contact Support</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
