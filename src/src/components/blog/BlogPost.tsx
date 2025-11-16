import React, { useEffect, useState } from "react";
import { CalendarDays, ArrowLeft, Share2, Copy, Check, Linkedin, Twitter, Facebook } from "lucide-react";
import { Card } from "../ui/card";
import { AnimatedSection } from "../AnimatedSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link, useParams } from "react-router-dom";
import Post1, { meta as meta1 } from "../../content/blog/start-rekrutacji-nowe-projekty.mdx";

export function BlogPost() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const posts: Record<string, { Component: React.ComponentType; meta: any }> = {
    [meta1.slug]: { Component: Post1 as unknown as React.ComponentType, meta: meta1 },
  };

  if (!slug || !posts[slug]) {
    return (
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <p className="text--muted">{t("blog.notFound")}</p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  const { Component, meta } = posts[slug];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = meta?.title ?? "";
  const readingTime = meta?.readingTime ?? 3;

  const formattedDate = (() => {
    try {
      const d = new Date(meta.date);
      return new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(d);
    } catch {
      return meta.date;
    }
  })();

  useEffect(() => {
    if (!meta) return;
    const prevTitle = document.title;
    document.title = `${meta.title} | Blog`;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.excerpt || meta.title });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.excerpt || meta.title });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    if (shareUrl) upsertMeta('meta[property="og:url"]', { property: 'og:url', content: shareUrl });

    return () => {
      document.title = prevTitle;
    };
  }, [meta, shareUrl]);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url: shareUrl });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {}
    }
  };

  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-[#007acc] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>{t("blog.back")}</span>
            </Link>

            <h1 className="text-3xl md:text-4xl text--secondary mb-2">{meta.title}</h1>
            <div className="flex items-center gap-3 text--muted">
              <CalendarDays className="w-4 h-4" />
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readingTime} min</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="card">
            {/* Share bar */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <button
                onClick={handleNativeShare}
                className="px-3 py-1.5 rounded border border-[#3e3e42] hover:bg-[#2d2d30] inline-flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Udostępnij</span>
              </button>
              <a
                className="px-3 py-1.5 rounded border border-[#3e3e42] hover:bg-[#2d2d30] inline-flex items-center gap-2"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                className="px-3 py-1.5 rounded border border-[#3e3e42] hover:bg-[#2d2d30] inline-flex items-center gap-2"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank" rel="noreferrer"
              >
                <Twitter className="w-4 h-4" />
                <span>X</span>
              </a>
              <a
                className="px-3 py-1.5 rounded border border-[#3e3e42] hover:bg-[#2d2d30] inline-flex items-center gap-2"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noreferrer"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(shareUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  } catch {}
                }}
                className="px-3 py-1.5 rounded border border-[#3e3e42] hover:bg-[#2d2d30] inline-flex items-center gap-2"
                title={shareUrl}
              >
                {copied ? <Check className="w-4 h-4 text-[#4ec9b0]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Skopiowano" : "Kopiuj link"}</span>
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              <Component />
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
