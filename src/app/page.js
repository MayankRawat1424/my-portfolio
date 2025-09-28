import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
