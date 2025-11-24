import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZexSend - Coming Soon",
  description: "Join the waitlist for Early Access",
  keywords: [
    'airtime Nigeria',
    'MTN data',
    'MTN airtime',
    'Nigeria Communication'
  ]
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default Layout