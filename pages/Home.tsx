import React from 'react';
import SnapContainer from '../components/layout/SnapContainer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import IntelligenceSection from '../components/sections/IntelligenceSection';
import HoldingsEcosystemSection from '../components/sections/HoldingsEcosystemSection';
import GlobalMapSection from '../components/sections/GlobalMapSection';

const Home: React.FC = () => {
  return (
    <SnapContainer>
      <HeroSection />
      <ProblemSection />
      <InfrastructureSection />
      <IntelligenceSection />
      <HoldingsEcosystemSection />
      <GlobalMapSection />
    </SnapContainer>
  );
};

export default Home;
