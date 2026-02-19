import { Layout } from './components/Layout';
import { ModelVisualization } from './components/Section1_Model/ModelVisualization';
import { PuertoRicoSection } from './components/Section2_PuertoRico/PuertoRicoSection';
import { TourCitiesSection } from './components/Section3_TourCities/TourCitiesSection';
import { CustomCalculator } from './components/Section4_Calculator/CustomCalculator';
import { BeyondEconomicsSection } from './components/Section5_Beyond/BeyondEconomicsSection';

export default function App() {
  return (
    <Layout>
      <PuertoRicoSection />
      <ModelVisualization />
      <TourCitiesSection />
      <CustomCalculator />
      <BeyondEconomicsSection />
    </Layout>
  );
}
