import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SectionHeader } from "./SectionHeader";
import { AnimatedCard } from "./AnimatedCard";
import { getStaggerDelay, ANIMATION_DELAYS } from "../utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../schemas/contactSchema";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "mgvroqjo";
      const response = await fetch(`https://formspree.io/${formspreeId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success(
          t("contact:success") || "Wiadomość wysłana! Odezwę się wkrótce 🚀"
        );
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Form send error:", error);
      }
      toast.error(
        t("contact:error") || "Błąd wysyłki. Spróbuj ponownie lub napisz bezpośrednio na kas.elzbieciak@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("contact:email"),
      value: "kas.elzbieciak@gmail.com",
      colorClass: "text--vs-blue",
      bgClass: "bg--primary-light",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("contact:phone"),
      value: "+48 888 435 618",
      colorClass: "text--vs-cyan",
      bgClass: "bg--primary-light",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("contact:location"),
      value: t("hero:location"),
      colorClass: "text--vs-orange",
      bgClass: "bg--primary-light",
    },
  ];

  return (
    <section id="contact" className="section section--full-height">
      <Toaster position="top-right" />
      <div className="container w-full">
        <SectionHeader title={t("contact:title")} />
        <div className="mb-8 text-center">
          <p className="text--muted">
            {t("contact:subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={index} delay={getStaggerDelay(index)}>
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${info.bgClass}`}>
                      <div className={info.colorClass}>{info.icon}</div>
                    </div>
                    <div>
                      <p className="text--muted mb-1">{info.label}</p>
                      <p className="text">{info.value}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={ANIMATION_DELAYS.NORMAL} hover={false}>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                  <label className="block mb-2 text">{t("contact:name")}</label>
                  <Input
                    {...register("name")}
                    placeholder={t("contact:placeholder.name")}
                    className="bg--input border--default focus:border--focus text--vs-light"
                    aria-invalid={touchedFields.name && !!errors.name}
                  />
                  {errors.name && (
                    <span className="text--error text-sm mt-1 block">
                      {errors.name.message ? t(`contact:${errors.name.message}`) : t('contact:validation.nameRequired')}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact:email")}</label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder={t("contact:placeholder.email")}
                    className="bg--input border--default focus:border--focus text--vs-light"
                    aria-invalid={touchedFields.email && !!errors.email}
                  />
                  {errors.email && (
                    <span className="text--error text-sm mt-1 block">
                      {errors.email.message ? t(`contact:${errors.email.message}`) : t('contact:validation.emailRequired')}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text">{t("contact:message")}</label>
                  <Textarea
                    {...register("message")}
                    placeholder={t("contact:placeholder.message")}
                    rows={5}
                    className="bg--input border--default focus:border--focus text--vs-light resize-none"
                    aria-invalid={touchedFields.message && !!errors.message}
                  />
                  {errors.message && (
                    <span className="text--error text-sm mt-1 block">
                      {errors.message.message ? t(`contact:${errors.message.message}`) : t('contact:validation.messageRequired')}
                    </span>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="btn--primary w-full" 
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Wysyłanie..." : t("contact:send")}
                </Button>
              </form>
            </AnimatedCard>
          </div>
      </div>
    </section>
  );
}
