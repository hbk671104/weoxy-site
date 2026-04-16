export interface Spec {
  label: string;
  value: string;
  unit?: string;
}

export const engineeredSpecs: Spec[] = [
  { label: "O₂ Concentration", value: "95.5", unit: "%" },
  { label: "Device Weight", value: "3.97", unit: "lbs" },
  { label: "Battery Life", value: "10", unit: "hrs" },
  { label: "Charge Time", value: "2", unit: "hrs" },
  { label: "Trigger Sensitivity", value: "<0.12", unit: "cm H₂O" },
  { label: "Service Plan", value: "5yr / 3yr", unit: "" },
];

export interface ComparisonRow {
  feature: string;
  weoxy: string;
  competitor: string;
  weoxyWins: boolean;
}

export const comparisonData: ComparisonRow[] = [
  {
    feature: "O₂ Concentration",
    weoxy: "Up to 95.5%",
    competitor: "87-93%",
    weoxyWins: true,
  },
  {
    feature: "Weight",
    weoxy: "3.97 lbs",
    competitor: "4.7 lbs avg",
    weoxyWins: true,
  },
  {
    feature: "Charging",
    weoxy: "USB-C, 2 hrs",
    competitor: "Proprietary, 3-4 hrs",
    weoxyWins: true,
  },
  {
    feature: "Noise Level",
    weoxy: "≤38 dBA",
    competitor: "≤43 dBA avg",
    weoxyWins: true,
  },
  {
    feature: "Max Altitude",
    weoxy: "26,781 ft",
    competitor: "10,000 ft avg",
    weoxyWins: true,
  },
  {
    feature: "O₂ Output / kg",
    weoxy: "Highest in class",
    competitor: "Standard",
    weoxyWins: true,
  },
  {
    feature: "Breathing Rate Display",
    weoxy: "Yes",
    competitor: "Rare",
    weoxyWins: true,
  },
  {
    feature: "Service Life",
    weoxy: "5 years",
    competitor: "3 years avg",
    weoxyWins: true,
  },
  {
    feature: "USB-C",
    weoxy: "Standard",
    competitor: "Not available",
    weoxyWins: true,
  },
  {
    feature: "Trigger Sensitivity",
    weoxy: "<0.12 cm H₂O",
    competitor: "0.5+ cm H₂O",
    weoxyWins: true,
  },
];
