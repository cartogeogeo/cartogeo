import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import ProductSpotlight from "./components/ProductSpotlight";
import ProjectSpotlight from "./components/ProjectSpotlight"
import Partners from "./components/Partners";
import Team from "./components/Team";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TeamPage from "./components/TeamPage";
import ServicesPage from "./components/ServicesPage";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./components/BlogPage";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <ProjectSpotlight />
      <Partners />
      <Team />
      <Blog />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time" element={<TeamPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
