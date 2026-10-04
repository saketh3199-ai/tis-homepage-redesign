import {ArrowUpRight} from "lucide-react"
import {motion} from "framer-motion"

const reasons =
[
    "Strong academic foundation",
    "Holistic student development",
    "Residential and day school experience",
    "Sports and extracurricular opportunities",
    "Supportive learning environment"
]

const WhyTIS =() =>
{
    return (
        <section className="bg-[#f5f4ef] text-[#111] py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3b7d3c]">
                            Why TIS
                        </p>

                        <p className="mt-8 text-sm text-black/40 leading-relaxed max-w-xs">
                            An environment designed to help students discover
                            their strengths, build confidence and prepare for
                            the world ahead.
                        </p>

                    </div>

                    <div>

                        <motion.h2
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] leading-[1.05]"
                        >
                            Preparing students
                            <span className="text-black/40">
                                {" "}for more than exams.
                            </span>
                        </motion.h2>

                        <div className="mt-8 flex items-center gap-3">

                            <div className="h-px w-10 bg-black/20"/>

                            <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                                The TIS approach
                            </p>

                        </div>

                        <div className="mt-14 border-t border-black/10">

                            {reasons.map((reason, index) =>
                            (
                                <motion.div
                                    key={reason}
                                    initial={{opacity: 0, x: 25}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true, amount: 0.2}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="flex items-center justify-between gap-6 py-5 border-b border-black/10"
                                >

                                    <div className="flex items-center gap-5">

                                        <span className="text-xs text-black/30">
                                            0{index + 1}
                                        </span>

                                        <span className="text-sm md:text-base font-medium">
                                            {reason}
                                        </span>

                                    </div>

                                    <ArrowUpRight
                                        size={16}
                                        className="text-black/30"
                                    />

                                </motion.div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default WhyTIS