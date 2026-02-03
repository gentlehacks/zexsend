import type { Metadata } from "next";
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
  title: "ZexSend - Share to Love Ones",
  description:
    "ZexSend is Nigeria’s super app for gifting airtime & mobile data with heartfelt messages. The thoughtful way to give financial gifts.",
  keywords: [
    "ZexSend",
    "ZexSend app",
    "ZexSend Nigeria",
    "airtime gifting",
    "data gifting",
    "financial gifts",
    "gift sharing platform",
    "thoughtful gifting",
    "mobile gifting",
    "digital gifts",
    "gift intent",
    "heartfelt messages",
    "Nigerian gifting app",
    "gift friends",
    "gift love ones",
    "ZexSend features",
    "ZexSend download",
    "ZexSend startup",
    "ZexSend founder",
    "Salihu Adamu",
  ],
  authors: [{ name: "Salihu Adamu", url: "https://zexsend.com/about" }],
  creator: "ZexSend",
  publisher: "ZexSend",
  openGraph: {
    type: "website",
    url: "https://zexsend.com",
    title: "ZexSend - Nigeria's Gift Sharing Platform.",
    description:
      "Nigeria’s super app for gifting and add intent with heartfelt messages. The thoughtful way to give financial gifts.",
    siteName: "ZexSend",
    images: [
      {
        url: "https://zexsend.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "ZexSend Preview",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZexSend - Nigeria's Gift Sharing Platform.",
    description:
      "Nigeria’s super app for gifting and add intent with heartfelt messages. The thoughtful way to give financial gifts.",
    images: ["https://zexsend.com/zexsend-twitter-card-2.png"],
    creator: "@zexsend",
  },
  manifest: "/site.webmanifest",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ZexSend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZexSend is Nigeria’s super app for gifting airtime & mobile data with heartfelt messages. The thoughtful way to give financial gifts.",
      },
    },
    {
      "@type": "Question",
      name: "Is ZexSend a Nigerian startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ZexSend is a Nigerian startup focused on providing innovative gifting solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I join the ZexSend waitlist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can join the waitlist by visiting our website and submitting your name and email in the waitlist form.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact ZexSend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us through the contact form on our website or via our official email.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Founder of ZexSend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZexSend is founded by Salihu Adamu, a 20 years old nigerian software developer passionate about solving problem in a digital way.",
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
