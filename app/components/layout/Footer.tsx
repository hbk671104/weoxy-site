import { Link } from "react-router";
import { Phone, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Dealer Access", to: "#" },
    { label: "Contact", to: "/contact" },
  ],
  Products: [
    { label: "All Products", to: "/products" },
    { label: "Portable Oxygen", to: "/products/poc" },
    { label: "Parts & Accessories", to: "/products/parts" },
  ],
  Ordering: [{ label: "Shipping & Delivery", to: "/shipping" }],
  Support: [
    { label: "Documents & Downloads", to: "/support" },
    { label: "FAQs", to: "/support#faqs" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold font-display">WeOxy</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Portable oxygen concentrators for healthcare providers.
              ISO 13485 certified. FAA approved.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="tel:1-617-963-8999"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                1-(617)-963-8999
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  110 Cedar St, Suite 105
                  <br />
                  Wellesley, MA 02481
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-teal-600/20 rounded flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold">ISO</span>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">ISO 13485</p>
                <p className="text-gray-500">Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-teal-600/20 rounded flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold">FAA</span>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">FAA Approved</p>
                <p className="text-gray-500">Air Travel</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WeOxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
