import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { Button } from "~/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";

export function ProviderCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 mb-3">
            For Healthcare Providers
          </p>
          <h2 className="font-display text-display-section font-bold mb-6">
            Become a WeOxy dealer
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get exclusive dealer pricing, priority allocation, and 48-hour
            advance replacement on every device. Apply for a dealer account
            to access the full product catalog.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-50 shadow-lg"
            >
              Request Dealer Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="#"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Spec Sheet
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
