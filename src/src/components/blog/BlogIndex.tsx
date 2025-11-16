import { CalendarDays, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { AnimatedSection } from "../AnimatedSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { meta as meta1 } from "../../content/blog/start-rekrutacji-nowe-projekty.mdx";

export function BlogIndex() {
  const { t } = useLanguage();

  const posts = [
    {
      slug: meta1.slug,
      title: meta1.title,
      date: meta1.date,
      intro: meta1.excerpt,
    },
  ];

  return (
    <section className="section section--with-bg">
      <div className="container--large">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text--muted">{"<"}</span>
              <span className="text--secondary">{t("blog.title")}</span>
              <span className="text--muted">{" />"}</span>
            </h2>
            <p className="text--muted">{t("blog.subtitle")}</p>
            <div className="divider"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <AnimatedSection key={post.slug} delay={idx * 0.1}>
              <Card className="card card--hover h-full flex flex-col">
                <div className="flex items-center gap-2 text--muted mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text--tertiary mb-2">{post.title}</h3>
                <p className="text flex-1">{post.intro}</p>
                <div className="mt-4">
                  <Button asChild variant="ghost" className="hover:text-[#007acc]">
                    <Link to={`/blog/${post.slug}`}>
                      <span>{t("blog.readMore")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
