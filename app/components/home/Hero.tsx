import { motion } from "motion/react";
import { Button } from "~/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-teal-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-teal-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Now with Q5, Q6, and Q7
            </div>

            <h1 className="font-display text-display-hero font-bold mb-6">
              Portable oxygen,{" "}
              <span className="text-teal-400">
                purpose-built for providers
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              The lightest, longest-lasting portable oxygen concentrator with
              industry-leading trigger sensitivity and USB-C fast charging.
              Backed by a 5-year warranty and 48-hour advance replacement.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/products" variant="primary" size="lg">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Contact Sales
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600/20 rounded flex items-center justify-center">
                  <span className="text-teal-400 text-[10px] font-bold">ISO</span>
                </div>
                <span>ISO 13485 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600/20 rounded flex items-center justify-center">
                  <span className="text-teal-400 text-[10px] font-bold">FAA</span>
                </div>
                <span>FAA Approved</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-3xl" />
              <div className="absolute inset-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-teal-500/30 to-navy-700 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-bold font-display text-white/80">Q7</span>
                  </div>
                  <p className="text-white/70 text-sm">WeOxy Q7 Portable Oxygen Concentrator</p>
                  <p className="text-teal-400 text-xs mt-1">10 hours · 3.97 lbs · 7 pulse settings</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
