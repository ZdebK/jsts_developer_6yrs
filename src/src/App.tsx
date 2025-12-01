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
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FlashcardsIndex } from "./components/flashcards/FlashcardsIndex";

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
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <LanguageProvider>
          <div className="min-h-screen bg--dark text--light">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/learn" element={<FlashcardsIndex />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </LanguageProvider>
    </BrowserRouter>
    </ErrorBoundary>
  );
}
