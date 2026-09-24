import React from 'react';
import SnapContainer from '../components/layout/SnapContainer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import IntelligenceSection from '../components/sections/IntelligenceSection';
import HoldingsGatewaySection from '../components/sections/HoldingsGatewaySection';
import GlobalMapSection from '../components/sections/GlobalMapSection';

const Home: React.FC = () => {
  return (
    <SnapContainer>
      <HeroSection />
      <ProblemSection />
      <InfrastructureSection />
      <IntelligenceSection />
      <HoldingsGatewaySection />
      <GlobalMapSection />
    </SnapContainer>
  );
};

export default Home;
