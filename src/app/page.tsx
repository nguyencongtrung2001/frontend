import FloatingActionButton from "@/components/common/FloatingActionButton";
import BenefitCar from "@/components/home/BenefitCar";
import CarDelivery from "@/components/home/CarDelivery";
import HeroSection from "@/components/home/HeroSection";
import ListCard from "@/components/home/ListCard";
import MobileAppSection from "@/components/home/MobileAppSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import RentalStep from "@/components/home/RentalStep";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
     <div className="min-h-screen relative">
      <HeroSection />
      <RentalStep/>
      <BenefitCar/>
      <ListCard/>
      <PopularDestinations/>
      <CarDelivery/>
      <TestimonialsSection/>
      <MobileAppSection/>
      <Footer/>
      <div className="fixed bottom-1 right-8 z-50">
        <FloatingActionButton/>
      </div>
    </div>
  );
}
