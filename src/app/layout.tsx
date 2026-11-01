import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import ConditionalHeader from "@/components/ConditionalHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon-black.png",
  },
  title: "Owolink - Event Hosting & Seamless Contribution Links",
  description:
    "Owolink is the premier platform for hosting celebrations, creating custom contribution links, collecting funds securely via Paystack, and managing everyday mobile utilities.",
  keywords: [
    "Owolink",
    "Owolink app",
    "owolink.com",
    "event hosting Nigeria",
    "contribution links",
    "event funding platform",
    "Paystack event payments",
    "wedding contribution links",
    "birthday fundraise app",
    "airtime and data wallet",
    "Nigerian fintech startup",
  ],
  authors: [{ name: "Salihu Adamu", url: "https://owolink.com/about" }],
  creator: "Owolink",
  publisher: "Owolink",
  openGraph: {
    type: "website",
    url: "https://owolink.com",
    title: "Owolink - Event Hosting & Seamless Contribution Links",
    description:
      "Create custom celebration pages, collect contributions via Paystack, and manage everyday mobile utilities from a single wallet.",
    siteName: "Owolink",
    images: [
      {
        url: "https://owolink.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "Owolink Preview",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owolink - Event Hosting & Seamless Contribution Links",
    description:
      "Create custom celebration pages, collect contributions via Paystack, and manage everyday mobile utilities from a single wallet.",
    images: ["https://owolink.com/owolink-twitter-card.png"],
    creator: "@owolink",
  },
  manifest: "/site.webmanifest",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Owolink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Owolink (owolink.com) is a platform for event organizers to create custom celebration pages, collect contributions securely via Paystack, and manage everyday mobile utilities.",
      },
    },
    {
      "@type": "Question",
      name: "How do event contribution links work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You create a custom event link for weddings, birthdays, or fundraisers and share it with friends and family. Contributors can pay securely using card, USSD, or bank transfer.",
      },
    },
    {
      "@type": "Question",
      name: "Are payments on Owolink secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all contributions are securely processed through Paystack with bank-grade encryption and PCI-DSS compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Owolink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Owolink is founded by Salihu Adamu, a Nigerian software developer and startup founder.",
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
    <html lang="en" className="flex-1 relative min-h-screen bg-gray-50">
      <body className={`${poppins.variable} antialiased`}>
        <PlausibleProvider
          domain="owolink.com"
          trackOutboundLinks={true}
          enabled={process.env.NODE_ENV === "production"}
        >
          {/* Automatically hides header on /e/... routes */}
          <ConditionalHeader />
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