import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("contact.email"),
      value: "kas.elzbieciak@gmail.com",
      color: "#569cd6",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("contact.phone"),
      value: "+48 888 435 618",
      color: "#4ec9b0",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("contact.location"),
      value: t("hero.location"),
      color: "#ce9178",
    },
  ];

  return (
    <section id="contact" className="section section--full-height">
      <div className="container w-full">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text--muted">{"<"}</span>
              <span className="text--secondary">{t("contact.title")}</span>
              <span className="text--muted">{" />"}</span>
            </h2>
            <div className="divider mx-auto mb-4"></div>
            <p className="text--muted">
              {t("contact.subtitle")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card
                  className="card card--hover"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <div style={{ color: info.color }}>{info.icon}</div>
                    </div>
                    <div>
                      <p className="text--muted mb-1">{info.label}</p>
                      <p className="text">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <Card className="card">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text">{t("contact.name")}</label>
                  <Input
                    placeholder={t("contact.placeholder.name")}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact.email")}</label>
                  <Input
                    type="email"
                    placeholder={t("contact.placeholder.email")}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact.message")}</label>
                  <Textarea
                    placeholder={t("contact.placeholder.message")}
                    rows={5}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4] resize-none"
                  />
                </div>
                <Button className="btn--primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
