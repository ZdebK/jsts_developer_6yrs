import { Navigation } from "./client/components/Navigation";
import { Hero } from "./client/components/Hero";
import { Experience } from "./client/components/Experience";
import { Education } from "./client/components/Education";
import { Skills } from "./client/components/Skills";
import { Projects } from "./client/components/Projects";
import { Contact } from "./client/components/Contact";
import { Footer } from "./client/components/Footer";
import { ChatBot } from "./client/components/ChatBot";
import { LanguageProvider } from "./client/contexts/LanguageContext";
import { ThemeProvider } from "./client/contexts/ThemeContext";
import { ErrorBoundary } from "./client/components/ErrorBoundary";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FlashcardsIndex } from "./client/components/flashcards/FlashcardsIndex";
import { FlashcardDetails } from "./client/components/flashcards/FlashcardDetails";

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
  function Layout() {
    const location = useLocation();
    const isLearn = location.pathname.includes('/learn');
    return (
      <div className="min-h-screen bg--dark text--light transition-colors">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<FlashcardsIndex />} />
            <Route path="/learn/card/:id" element={<FlashcardDetails />} />
          </Routes>
        </main>
        <Footer />
        {!isLearn && <ChatBot />}
      </div>
    );
  }
  return (
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <LanguageProvider>
          <ThemeProvider>
            <Layout />
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
