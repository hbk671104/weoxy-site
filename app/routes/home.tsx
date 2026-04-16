import { Hero } from "~/components/home/Hero";
import { Advantages } from "~/components/home/Advantages";
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
        "WeOxy portable oxygen concentrators — optimized for DME efficiency. 3.97 lbs, up to 10-hour battery, ultra-sensitive breath detection, 5-year device / 3-year sieve bed warranty. Lower service cost, fewer calls, higher margins.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
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
