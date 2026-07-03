import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PrintHandler } from "@/components/print-handler";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { getContent } from "@/content";
import { SITE_URL } from "@/lib/site";
import { ACTIVE_LOCALES, OG_LOCALE, isActiveLocale, localeAlternates, localePath, localeUrl } from "@/lib/locales";
import "../globals.css";
import "../print.css";

// Only locales from generateStaticParams are served; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return ACTIVE_LOCALES.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isActiveLocale(locale)) notFound();
  const { profile } = getContent(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: profile.seo.title,
      template: `%s — ${profile.name}`,
    },
    description: profile.seo.description,
    keywords: profile.seo.keywords,
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: profile.name,
    alternates: {
      canonical: localePath(locale),
      languages: localeAlternates(),
    },
    openGraph: {
      // og:image / twitter:image come from the [locale]/opengraph-image.tsx
      // file convention (served at /{locale}/opengraph-image), not from here.
      type: "profile",
      locale: OG_LOCALE[locale],
      url: localePath(locale),
      siteName: profile.name,
      title: profile.seo.title,
      description: profile.seo.description,
      firstName: "Yuri",
      lastName: "Semenenko",
    },
    twitter: {
      card: "summary_large_image",
      title: profile.seo.title,
      description: profile.seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) notFound();
  const { profile, contacts } = getContent(locale);

  const sameAs = contacts.items.filter((c) => c.external && c.visible && c.href).map((c) => c.href as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: localeUrl(locale),
    jobTitle: profile.jobTitle,
    description: profile.seo.description,
    image: `${SITE_URL}/${locale}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Krakow",
      addressCountry: "PL",
    },
    sameAs,
    knowsAbout: profile.seo.keywords,
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <PrintHandler />
          <ScrollProgress />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
