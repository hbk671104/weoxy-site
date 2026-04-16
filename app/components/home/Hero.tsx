import { motion } from "motion/react";
import { Button } from "~/components/ui/Button";
import { ArrowRight, ShieldCheck, Activity, Battery, Feather } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "5-year device · 3-year sieve bed warranty" },
  { icon: Feather, label: "3.97 lbs ultra-lightweight" },
  { icon: Battery, label: "Up to 10 hours battery life" },
  { icon: Activity, label: "Ultra-sensitive breath detection" },
];

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
              Award-winning design · FAA approved
            </div>

            <h1 className="font-display text-display-hero font-bold mb-4">
              Optimized for{" "}
              <span className="text-teal-400">
                DME efficiency
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 max-w-xl">
              Lower service cost. Fewer service calls. Higher margins.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              3.97 lbs with up to 10-hour battery life, ultra-sensitive breath
              detection, and USB-C fast charging. Backed by a 5-year device
              warranty, 3-year sieve bed warranty, and 48-hour advance replacement.
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

            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-gray-400">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>{stat.label}</span>
                </div>
              ))}
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
