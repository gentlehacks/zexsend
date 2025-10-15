import type { Metadata } from "next";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "PexelXus - Buy Airtime, Data & Share",
  description:
    "PexelXus is a Nigerian startup redefining gifting, airtime/data purchases, and social sharing with trust and simplicity.",
  keywords: [
    "PexelXus",
    "Nigeria",
    "airtime",
    "data",
    "gift friends",
    "startup",
    "donate",
    "startup Nigeria",
    "gift platform",
    "social gifting app",
    "Nigeria super app",
    "airtime app",
    "buy data Nigeria",
    "VTU Nigeria",
    "wallet app",
    "fintech Nigeria",
    "Salihu Adamu",
  ],
  authors: [{ name: "Salihu Adamu", url: "https://pexelxus.com/about" }],
  creator: "PexelXus",
  publisher: "PexelXus",
  openGraph: {
    type: "website",
    url: "https://pexelxus.com",
    title: "Pexelxus - Nigeria’s Super App for Airtime, Data & More",
    description:
      "The trusted Nigerian super app for airtime, data, and seamless wallet payments. Built for Nigerians, by Nigerians.",
    siteName: "PexelXus",
    images: [
      {
        url: "https://pexelxus.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "PexelXus Preview",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pexelxus - Nigeria's Super App for Airtime, Data & More",
    description:
      "Fund your wallet, buy airtime & data, and gift services easily. The Nigerian super app",
    images: ["https://pexelxus.com/pexelxus-twitter-card-2.png"],
    creator: "@pexelxus",
  },
  manifest: "/site.webmanifest",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Pexelxus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pexelxus is a Nigerian startup building a platform that will allow you to buy airtime and gift to friends or family.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pexelxus a Nigerian startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes Pexelxus is based on Nigerian startup building a platform that will allow you to buy airtime and gift to friends or family.",
      },
    },
    {
      "@type": "Question",
      name: "How can I join the Pexelxus waitlist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can join the waitlist by visiting our website and submitting your name and email in the waitlist form.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Pexelxus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us through the contact form on our website or via our official email.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Founder of Pexelxus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pexelxus is founded by Salihu Adamu, a 20 years old nigerian software developer passionate about solving problem in a digital way.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative min-h-screen bg-[rgba(0, 0, 0, 0)]">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pexelxus",
          "url": "https://pexelxus.com",
          "logo": "https://pexelxus.com/favicon.png",
          "sameAs": [
            "https://twitter.com/pexelxus",
            "https://linkedin.com/company/pexelxus",
            "https://instagram.com/pexelxus"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@pexelxus.com",
            "telephone": "+2349131165467",
            "areaServed": "NG",
            "availableLanguage": ["English"]
          }
        }
        `}
        </script>
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        <PlausibleProvider
          domain="pexelxus.com"
          trackOutboundLinks={true}
          enabled={process.env.NODE_ENV === "production"}
        >
          <Header />
          {children}
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </PlausibleProvider>
      </body>
    </html>
  );
}
