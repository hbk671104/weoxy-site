import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { Button } from "~/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export function meta() {
  return [
    { title: "Contact Us — WeOxy" },
    {
      name: "description",
      content:
        "Get in touch with the WeOxy team. Call 1-(617)-963-8999 or email sales@weoxy.com. Located in Wellesley, MA.",
    },
  ];
}

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Contact Us"
            title="Let's connect"
            description="Our team is ready to answer your questions, provide product information, and help you get started with WeOxy."
          />
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <a
                  href="tel:1-617-963-8999"
                  className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <p className="text-gray-600">1-(617)-963-8999</p>
                  </div>
                </a>

                <a
                  href="mailto:sales@weoxy.com"
                  className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <p className="text-gray-600">sales@weoxy.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Address</p>
                    <p className="text-gray-600">
                      110 Cedar St, Suite 105
                      <br />
                      Wellesley, MA 02481
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Business Hours</p>
                    <p className="text-gray-600">
                      Monday – Friday, 8 AM – 6 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.2}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-2 bg-gray-100 hover:bg-teal-50 hover:text-teal-600 text-sm font-medium text-gray-700 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Mission Statement + CTA */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  At WeOxy, we believe everyone deserves access to reliable,
                  high-quality portable oxygen therapy. Our mission is to
                  empower healthcare providers with the best tools to improve
                  their patients' quality of life — through innovative
                  engineering, exceptional service, and unwavering reliability.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We're committed to pushing the boundaries of what's possible
                  in portable oxygen concentrator technology while maintaining
                  the highest standards of medical-grade manufacturing.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  to="/products"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
