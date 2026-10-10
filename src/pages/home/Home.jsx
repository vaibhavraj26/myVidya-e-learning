import './Home.css'
import Navbar from "@components/Navbar";
import StatsSection from "./HomeStats";
import Footer from '@components/Footer';
import FAQSection from './HomeFAQs'
import HeroSection from './HomeHero'
import MainSection from './HomeMain'
import RoleSection from './HomeRoleSection';
import PartnerSection from './HomePartner';
import TestimonialsSection from './HomeTestimonials';


function Home() {
  return (
    <div className="home">
      <Navbar />

      <HeroSection />

      <MainSection />

      <RoleSection />

      <StatsSection />

      <PartnerSection />

      <TestimonialsSection />

      <FAQSection />

      <Footer />
    </div>
  );
}
export default Home;