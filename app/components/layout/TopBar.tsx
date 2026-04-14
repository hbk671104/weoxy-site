import { Phone, Mail, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-navy-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a
            href="tel:1-888-123-4567"
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>1-(617)-963-8999</span>
          </a>
          <a
            href="mailto:sales@weoxy.com"
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>sales@weoxy.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Clock className="h-3.5 w-3.5" />
          <span>Mon – Fri, 8 AM – 6 PM EST</span>
        </div>
      </div>
    </div>
  );
}
