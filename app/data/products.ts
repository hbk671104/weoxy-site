export interface Product {
  id: string;
  name: string;
  category: "poc" | "parts";
  tagline: string;
  image: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "q5",
    name: "WeOxy Q5",
    category: "poc",
    tagline: "5 Pulse Flow Settings · Up to 7 Hours Battery",
    image: "/images/q5.webp",
    specs: ["5 pulse flow", "Up to 7 hours", "3.97 lbs", "USB-C charging"],
  },
  {
    id: "q6",
    name: "WeOxy Q6",
    category: "poc",
    tagline: "6 Pulse Flow Settings · Up to 9 Hours Battery",
    image: "/images/q6.webp",
    specs: ["6 pulse flow", "Up to 9 hours", "3.97 lbs", "USB-C charging"],
  },
  {
    id: "q7",
    name: "WeOxy Q7",
    category: "poc",
    tagline: "7 Pulse Flow Settings · Up to 10 Hours Battery",
    image: "/images/q7.webp",
    specs: ["7 pulse flow", "Up to 10 hours", "3.97 lbs", "USB-C charging"],
  },
  {
    id: "ba-408",
    name: "Performance Battery BA-408",
    category: "parts",
    tagline: "Standard replacement battery for all WeOxy models",
    image: "/images/ba-408.webp",
    specs: ["Standard capacity", "USB-C charging", "2 hour charge time"],
  },
  {
    id: "ba-704",
    name: "Power Battery BA-704",
    category: "parts",
    tagline: "Extended capacity battery for maximum runtime",
    image: "/images/ba-704.webp",
    specs: ["Extended capacity", "USB-C charging", "2 hour charge time"],
  },
];
