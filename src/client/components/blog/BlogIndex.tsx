import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { meta as meta1 } from "../../content/blog/start-rekrutacji-nowe-projekty.mdx";
import { SectionHeader } from "../SectionHeader";
import { AnimatedCard } from "../AnimatedCard";
import { getStaggerDelay } from "../../utils/constants";

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
        <SectionHeader title={t("blog:title")} />
        <div className="mb-8">
          <p className="text--muted">{t("blog:subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <AnimatedCard key={post.slug} delay={getStaggerDelay(idx)} className="h-full flex flex-col">
              <div className="flex items-center gap-2 text--muted mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text--tertiary mb-2">{post.title}</h3>
                <p className="text flex-1">{post.intro}</p>
                <div className="mt-4">
                  <Button asChild variant="ghost" className="link--hover">
                    <Link to={`/blog/${post.slug}`}>
                      <span>{t("blog:readMore")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
