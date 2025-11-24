import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZexSend, our mission, values, and how we’re redefining gift sharing in Nigeria.",
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout