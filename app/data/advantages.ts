import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Activity, Battery, Feather } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  benefits: { label: string; detail: string }[];
  takeaway: string;
  gradient: string;
}

export const advantages: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "Lower service cost, built in",
    subtitle: "3-Year Sieve Bed · 5-Year Device Warranty",
    benefits: [
      {
        label: "Fewer replacements",
        detail: "Lower lifetime cost per device",
      },
      {
        label: "Longer service life",
        detail: "5-year device coverage, not just parts",
      },
    ],
    takeaway: "More margin per unit. Less overhead per patient.",
    gradient: "from-navy-900 to-navy-800",
  },
  {
    icon: Activity,
    title: "Works for more patients",
    subtitle: "Ultra-Sensitive Breath Detection",
    benefits: [
      {
        label: "Fewer device swaps",
        detail: "Works for patients who may not trigger other systems",
      },
      {
        label: "Fewer complaints",
        detail: "More consistent performance in daily use",
      },
      {
        label: "Less service burden",
        detail: "Reduce troubleshooting and follow-ups",
      },
    ],
    takeaway:
      "Better patient compatibility leads to fewer service issues and more predictable operations.",
    gradient: "from-teal-700 to-teal-600",
  },
  {
    icon: Battery,
    title: "Longer battery life. Fewer support calls",
    subtitle: "Up to 10-Hour Battery Life",
    benefits: [
      {
        label: "Designed for all-day use",
        detail: "Patients stay powered through their routine",
      },
      {
        label: "Reduces battery-related complaints",
        detail: "Fewer interruptions, fewer calls to your team",
      },
    ],
    takeaway: "Reliable for daily use. Patients worry less — you hear less.",
    gradient: "from-navy-800 to-teal-700",
  },
  {
    icon: Feather,
    title: "Higher patient adoption",
    subtitle: "Only 3.97 lbs · Ultra-Lightweight",
    benefits: [
      {
        label: "Easy to carry, easy to accept",
        detail: "Patients are more willing to use it every day",
      },
      {
        label: "Higher retention",
        detail: "Fewer returns and device refusals",
      },
    ],
    takeaway: "Patients keep using it. You keep the account.",
    gradient: "from-teal-600 to-navy-800",
  },
];
