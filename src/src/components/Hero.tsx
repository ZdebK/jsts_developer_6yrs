import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[#858585]">const</span>{" "}
          <span className="text-[#4ec9b0]">developer</span>{" "}
          <span className="text-[#858585]">=</span>{" "}
          <span className="text-[#ce9178]">{"{"}</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl mb-4"
        >
          <span className="text-[#dcdcaa]">{t("hero.name").split(" ")[0]}</span>{" "}
          <span className="text-[#569cd6]">{t("hero.name").split(" ")[1]}</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-6 text-[#4ec9b0]"
        >
          {t("hero.title")}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-8 text-[#858585]"
        >
          <MapPin className="w-4 h-4" />
          <span>{t("hero.location")}</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mb-8 max-w-2xl mx-auto text-[#d4d4d4]"
        >
          {t("hero.description")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button 
            className="bg-[#007acc] hover:bg-[#005a9e] text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2" />
            {t("hero.contact")}
          </Button>
          <Button 
            variant="outline" 
            className="border-[#3e3e42] hover:bg-[#2d2d30]"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-[#3e3e42] hover:bg-[#2d2d30]"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-[#ce9178]"
        >
          {"}"}
        </motion.div>
      </div>
    </section>
  );
}
