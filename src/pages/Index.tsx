import { lazy, Suspense } from "react";
import { SectionIndicator } from "@/components/SectionIndicator";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy load секций для оптимизации начальной загрузки
const DepressionIntroSection = lazy(() => import("@/components/sections/DepressionIntroSection").then(m => ({ default: m.DepressionIntroSection })));
const CausesSection = lazy(() => import("@/components/sections/CausesSection").then(m => ({ default: m.CausesSection })));
const CrashSection = lazy(() => import("@/components/sections/CrashSection").then(m => ({ default: m.CrashSection })));
const ConsequencesSection = lazy(() => import("@/components/sections/ConsequencesSection").then(m => ({ default: m.ConsequencesSection })));
const RooseveltSection = lazy(() => import("@/components/sections/RooseveltSection").then(m => ({ default: m.RooseveltSection })));
const NewDealSection = lazy(() => import("@/components/sections/NewDealSection").then(m => ({ default: m.NewDealSection })));
const ReformsSection = lazy(() => import("@/components/sections/ReformsSection").then(m => ({ default: m.ReformsSection })));
const EconomySection = lazy(() => import("@/components/sections/EconomySection").then(m => ({ default: m.EconomySection })));
const ForeignPolicySection = lazy(() => import("@/components/sections/ForeignPolicySection").then(m => ({ default: m.ForeignPolicySection })));
const SocietySection = lazy(() => import("@/components/sections/SocietySection").then(m => ({ default: m.SocietySection })));
const CultureSection = lazy(() => import("@/components/sections/CultureSection").then(m => ({ default: m.CultureSection })));
const TechnologySection = lazy(() => import("@/components/sections/TechnologySection").then(m => ({ default: m.TechnologySection })));
const LegacySection = lazy(() => import("@/components/sections/LegacySection").then(m => ({ default: m.LegacySection })));
const ConclusionSection = lazy(() => import("@/components/sections/ConclusionSection").then(m => ({ default: m.ConclusionSection })));

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <ScrollProgress />
      <SectionIndicator />
      
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={null}>
          <DepressionIntroSection />
          <CausesSection />
          <CrashSection />
          <ConsequencesSection />
          <RooseveltSection />
          <NewDealSection />
          <ReformsSection />
          <EconomySection />
          <ForeignPolicySection />
          <SocietySection />
          <CultureSection />
          <TechnologySection />
          <LegacySection />
          <ConclusionSection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
