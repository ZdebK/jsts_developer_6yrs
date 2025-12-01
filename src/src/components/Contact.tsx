import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SectionHeader } from "./SectionHeader";
import { AnimatedCard } from "./AnimatedCard";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/mgvroqjo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success(
          t("contact.success") || "Wiadomość wysłana! Odezwę się wkrótce 🚀"
        );
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form send error:", error);
      toast.error(
        t("contact.error") || "Błąd wysyłki. Spróbuj ponownie lub napisz bezpośrednio na kas.elzbieciak@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
      <Toaster position="top-right" />
      <div className="container w-full">
        <SectionHeader title={t("contact.title")} />
        <div className="mb-8 text-center">
          <p className="text--muted">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
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
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={0.2} hover={false}>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text">{t("contact.name")}</label>
                  <Input
                    name="name"
                    required
                    placeholder={t("contact.placeholder.name")}
                    className="bg--input border--default focus:border--focus text--vs-light"
                  />
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact.email")}</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.placeholder.email")}
                    className="bg--input border--default focus:border--focus text--vs-light"
                  />
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact.message")}</label>
                  <Textarea
                    name="message"
                    required
                    placeholder={t("contact.placeholder.message")}
                    rows={5}
                    className="bg--input border--default focus:border--focus text--vs-light resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="btn--primary w-full" 
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Wysyłanie..." : t("contact.send")}
                </Button>
              </form>
            </AnimatedCard>
          </div>
      </div>
    </section>
  );
}
