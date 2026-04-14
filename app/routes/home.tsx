import { Hero } from "~/components/home/Hero";
import { Highlights } from "~/components/home/Highlights";
import { WhyWeoxy } from "~/components/home/WhyWeoxy";
import { ProductShowcase } from "~/components/home/ProductShowcase";
import { EngineeredExcellence } from "~/components/home/EngineeredExcellence";
import { ComparisonTable } from "~/components/home/ComparisonTable";
import { NationwideCoverage } from "~/components/home/NationwideCoverage";
import { Journey } from "~/components/home/Journey";
import { Promise } from "~/components/home/Promise";
import { ProviderCTA } from "~/components/home/ProviderCTA";

export function meta() {
  return [
    { title: "WeOxy — The Ultimate Portable Oxygen Concentrator" },
    {
      name: "description",
      content:
        "Experience the lightest, longest-lasting portable oxygen concentrator with industry-leading sensitivity, USB-C fast charging, and a 5-year warranty. Trusted by healthcare providers nationwide.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <WhyWeoxy />
      <ProductShowcase />
      <EngineeredExcellence />
      <ComparisonTable />
      <NationwideCoverage />
      <Journey />
      <Promise />
      <ProviderCTA />
    </>
  );
}
