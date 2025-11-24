import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ZexSend. We’re here to answer your questions, feedback, or partnership requests.",
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout