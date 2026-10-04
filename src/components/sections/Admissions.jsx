import {ArrowUpRight} from "lucide-react"
import {motion} from "framer-motion"

const Admissions =() =>
{
    return (
        <section
            id="admissions"
            className="bg-[#111] text-white py-24 md:py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative overflow-hidden rounded-[2rem] bg-[#3b7d3c] px-7 py-14 md:px-14 md:py-20"
                >

                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.25}}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="relative z-10 max-w-3xl"
                    >

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                            Admissions
                        </p>

                        <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                            Give your child
                            <span className="block text-white/55">
                                a place to grow.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
                            Take the next step towards discovering the TIS
                            experience. Explore admissions, campus life and
                            opportunities available to your child.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="https://admission.tis.edu.in/"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111] hover:bg-white/85 transition-colors"
                            >
                                Begin Your Enquiry
                                <ArrowUpRight size={17}/>
                            </a>

                            <a
                                href="https://tis.edu.in/contact-us/"
                                className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                            >
                                Visit TIS
                            </a>

                        </div>

                    </motion.div>

                    <div className="absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-white/10"/>

                    <div className="absolute right-20 -top-32 h-64 w-64 rounded-full bg-white/5"/>

                </motion.div>

            </div>

        </section>
    )
}

export default Admissions