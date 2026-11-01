"use client"
import { motion } from "framer-motion"
import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"
import { Sparkles } from "lucide-react"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-20 mb-10 lg:my-28 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.7 }}
                className="relative h-full w-full z-10 mx-auto"
            >
                <div className="h-full w-full">
                    {/* Background Container with Deep Blue Fintech Glow */}
                    <div className="rounded-[2.5rem] overflow-hidden absolute inset-0 -z-10 h-full w-full bg-[#050B14] bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] bg-[size:4rem_4rem] shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_400px,rgba(37,99,235,0.35),transparent)]"></div>
                    </div>

                    {/* Content Box */}
                    <div className="h-full flex flex-col items-center justify-center text-white text-center py-20 px-6 md:px-12 relative z-10">

                        {/* Pill Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                            Launch Your First Event in Seconds
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-tight">
                            Ready to Transform How You <span className="text-blue-500">Host & Contribute?</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="mx-auto max-w-xl text-gray-300 text-base md:text-xl font-normal leading-relaxed mb-10">
                            Join thousands of event organizers using Owolink to collect seamless contributions via Paystack and manage everyday mobile utilities on owolink.com.
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <AppStoreButton theme="light" />
                            <PlayStoreButton theme="light" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default CTA