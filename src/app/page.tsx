import BackgroundBlob from "@/components/layout/BackgroundBlob";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/sections/about/AboutSection";
import ContactSection from "@/sections/contact/ContactSection";
import HomeSection from "@/sections/home/HomeSection";
import ProjectsSection from "@/sections/projects/ProjectsSection";

export default function Page() {
  return (
    <>
      <BackgroundBlob />
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
