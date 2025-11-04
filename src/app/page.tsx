import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CapabilitiesOverview from '@/components/CapabilitiesOverview';
import ProductionRoadmap from '@/components/ProductionRoadmap';
import ValueProposition from '@/components/ValueProposition';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CapabilitiesOverview />
      <ProductionRoadmap />
      <ValueProposition />
    </>
  );
}
