import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChoseUs from "@/components/WhyChoseUs";
import MusicTestimonials from "@/components/TestimonialCards";
import Image from "next/image";
import UpcomingWebinars from "@/components/Webinars";
import OurInstructors from "@/components/Instructor";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
      <MusicTestimonials />
      <UpcomingWebinars />
      <OurInstructors />
      <Footer />
    </main>
  );
}
