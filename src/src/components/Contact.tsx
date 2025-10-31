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
    <section id="contact" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text-[#858585]">{"<"}</span>
              <span className="text-[#569cd6]">{t("contact.title")}</span>
              <span className="text-[#858585]">{" />"}</span>
            </h2>
            <div className="h-1 w-20 bg-[#007acc] rounded mx-auto mb-4"></div>
            <p className="text-[#858585]">
              {t("contact.subtitle")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card
                  className="p-6 bg-[#252526] border-[#3e3e42] hover:border-[#007acc] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <div style={{ color: info.color }}>{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-[#858585] mb-1">{info.label}</p>
                      <p className="text-[#d4d4d4]">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3}>
              <Card className="p-6 bg-[#252526] border-[#3e3e42]">
                <div className="text-[#858585]">
                  <span className="text-[#569cd6]">const</span>{" "}
                  <span className="text-[#4ec9b0]">availability</span>{" "}
                  <span className="text-[#858585]">=</span>{" "}
                  <span className="text-[#ce9178]">{"{"}</span>
                  <br />
                  <span className="ml-4">
                    <span className="text-[#9cdcfe]">status</span>:{" "}
                    <span className="text-[#ce9178]">"Otwarty na oferty"</span>,
                  </span>
                  <br />
                  <span className="ml-4">
                    <span className="text-[#9cdcfe]">type</span>:{" "}
                    <span className="text-[#ce9178]">"Remote/Hybrid"</span>
                  </span>
                  <br />
                  <span className="text-[#ce9178]">{"}"}</span>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <Card className="p-6 bg-[#252526] border-[#3e3e42]">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-[#d4d4d4]">{t("contact.name")}</label>
                  <Input
                    placeholder={t("contact.placeholder.name")}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#d4d4d4]">{t("contact.email")}</label>
                  <Input
                    type="email"
                    placeholder={t("contact.placeholder.email")}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#d4d4d4]">{t("contact.message")}</label>
                  <Textarea
                    placeholder={t("contact.placeholder.message")}
                    rows={5}
                    className="bg-[#3c3c3c] border-[#3e3e42] focus:border-[#007acc] text-[#d4d4d4] resize-none"
                  />
                </div>
                <Button className="w-full bg-[#007acc] hover:bg-[#005a9e] text-white">
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
