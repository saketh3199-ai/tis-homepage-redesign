import {motion} from "framer-motion"
import {ArrowUpRight} from "lucide-react"

const highlights =
[
    "Residential life",
    "Sports & activities",
    "Leadership",
    "Student wellbeing"
]

const CampusLife =() =>
{
    return (
        <section
            id="campus"
            className="bg-[#f5f4ef] text-[#111] py-24 md:py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.25}}
                        transition={{
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                        className="relative"
                    >

                        <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#d9ddd4]">

                            <img
                                src="https://tis.edu.in/_next/static/media/image1.6d2eabaf.webp"
                                alt="Students at Tulas International School"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                        </div>

                        <div className="absolute -right-4 md:-right-8 top-8 rounded-2xl bg-[#173b2a] text-white px-6 py-5 shadow-xl">

                            <p className="text-2xl font-medium">
                                24×7
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                                Student Support
                            </p>

                        </div>

                   </motion.div>
                    
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.25}}
                        transition={{
                                    duration: 0.9,
                                    delay: 0.12,
                                    ease: [0.22, 1, 0.36, 1]
                                    }}
                    >

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3b7d3c]">
                            Campus Life
                        </p>

                        <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                            A place to
                            <span className="block text-black/40">
                                live & learn.
                            </span>
                        </h2>

                        <p className="mt-8 text-base md:text-lg text-black/60 leading-relaxed">
                            Life at TIS extends far beyond the classroom.
                            Students experience a supportive environment where
                            learning, friendship, sport and personal growth
                            come together.
                        </p>

                        <div className="mt-10 border-t border-black/10">

                            {highlights.map((highlight, index) =>
                            (
                                <div
                                    key={highlight}
                                    className="flex items-center justify-between py-5 border-b border-black/10"
                                >

                                    <div className="flex items-center gap-5">

                                        <span className="text-xs text-black/30">
                                            0{index + 1}
                                        </span>

                                        <span className="text-sm md:text-base font-medium">
                                            {highlight}
                                        </span>

                                    </div>

                                    <ArrowUpRight
                                        size={16}
                                        className="text-black/30"
                                    />

                                </div>
                            ))}

                        </div>

                        <a
                            href="#admissions"
                            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#111] px-7 py-4 text-sm font-semibold text-white hover:bg-[#3b7d3c] transition-colors"
                        >
                            Discover Campus Life
                            <ArrowUpRight size={17}/>
                        </a>

                     </motion.div>
                    

                </div>

            </div>

        </section>
    )
}

export default CampusLife