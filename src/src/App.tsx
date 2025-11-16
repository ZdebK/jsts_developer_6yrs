import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogIndex } from "./components/blog/BlogIndex";
import { BlogPost } from "./components/blog/BlogPost";

function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4]">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
