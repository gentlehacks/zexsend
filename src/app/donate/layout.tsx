import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support ZexSend",
  description:
    "Support ZexSend and help us continue building a platform that makes gifting meaningful and secure.",
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout