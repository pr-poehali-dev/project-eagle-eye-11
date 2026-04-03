import { Hero } from "@/components/Hero";
import { CatalogSection } from "@/components/CatalogSection";
import { HowSection } from "@/components/HowSection";
import { PricesSection } from "@/components/PricesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Index() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <HowSection />
      <PricesSection />
      <ContactSection />
    </>
  );
}
