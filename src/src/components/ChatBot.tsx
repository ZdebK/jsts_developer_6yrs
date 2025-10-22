import { useState, useEffect } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenGreeting, setHasSeenGreeting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const seen = localStorage.getItem("chatGreetingSeen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenGreeting(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (!hasSeenGreeting) {
      localStorage.setItem("chatGreetingSeen", "true");
      setHasSeenGreeting(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  const quickLinks = [
    { id: "about", label: t("nav.about"), icon: "👤" },
    { id: "experience", label: t("nav.experience"), icon: "💼" },
    { id: "skills", label: t("nav.skills"), icon: "⚡" },
    { id: "projects", label: t("nav.projects"), icon: "🚀" },
    { id: "contact", label: t("nav.contact"), icon: "📧" },
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#007acc] hover:bg-[#005a9e] shadow-lg hover:shadow-xl transition-all"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Notification Badge */}
        {!hasSeenGreeting && !isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-[#f48771] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="bg-[#252526] border-[#007acc] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#007acc] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white">VS Code Assistant</p>
                    <p className="text-xs text-white/80">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Message */}
              <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-[#007acc]/10 border border-[#007acc]/30 rounded-lg p-4">
                    <p className="text-[#dcdcaa] mb-2">{t("chat.greeting")}</p>
                    <p className="text-[#d4d4d4] mb-3">{t("chat.message")}</p>
                    <div className="flex items-center gap-2 text-[#4ec9b0]">
                      <span className="animate-pulse">●</span>
                      <span>{t("chat.question")}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      onClick={() => scrollToSection(link.id)}
                      className="w-full flex items-center justify-between p-3 bg-[#2d2d30] hover:bg-[#3e3e42] rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{link.icon}</span>
                        <span className="text-[#d4d4d4]">{link.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#858585] group-hover:text-[#007acc] group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </div>

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-[#858585] pt-2"
                >
                  <p>
                    <span className="text-[#569cd6]">{"// "}</span>
                    Click to navigate
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
