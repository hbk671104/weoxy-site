import type { LucideIcon } from "lucide-react";
import {
  Wind,
  Battery,
  Gauge,
  ShieldCheck,
  Zap,
  Mountain,
  Award,
} from "lucide-react";

export interface Highlight {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    icon: Wind,
    title: "More Oxygen",
    value: "40%",
    description: "More oxygen per pound at just 3.97 lbs",
  },
  {
    icon: Battery,
    title: "Longest Battery",
    value: "10 hrs",
    description: "Industry-leading battery life on a single charge",
  },
  {
    icon: Gauge,
    title: "Ultra Sensitivity",
    value: "<0.12",
    description: "cm H₂O trigger sensitivity for effortless breathing",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    value: "5 yrs",
    description: "Comprehensive warranty with advance replacement",
  },
  {
    icon: Zap,
    title: "Fast USB-C Charge",
    value: "2 hrs",
    description: "Full charge in just 2 hours via USB-C",
  },
  {
    icon: Mountain,
    title: "High Altitude",
    value: "26,781 ft",
    description: "FAA approved for use at extreme altitudes (Q7)",
  },
  {
    icon: Award,
    title: "Design Awards",
    value: "6",
    description: "iF, Red Dot, IDEA, A' Design, IDPA, K-Design",
  },
];
