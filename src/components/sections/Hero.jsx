import {motion} from "framer-motion"
import {ArrowUpRight} from "lucide-react"

const Hero =() =>
{
    return (
        <section className="min-h-screen bg-[#f5f4ef] text-[#111] flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6 pt-32 pb-16">

                <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3b7d3c] mb-7">
                            Tulas International School · Dehradun
                        </p>

                        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.05em] leading-[0.9]">
                            Education
                            <span className="block text-[#3b7d3c]">
                                that shapes
                            </span>
                            tomorrow.
                        </h1>

                        <p className="mt-8 max-w-xl text-base md:text-lg text-black/60 leading-relaxed">
                            A leading boarding and day school in Dehradun,
                            combining academic excellence, holistic development
                            and opportunities that prepare students to become
                            confident global citizens.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="#about"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-7 py-4 text-sm font-semibold text-white hover:bg-[#3b7d3c] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Explore TIS
                                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
                            </a>

                            <a
                                href="#admissions"
                                className="inline-flex items-center rounded-full border border-black/15 px-7 py-4 text-sm font-semibold hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Admissions Open
                            </a>

                        </div>

                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.2, delay: 0.15}}
                        className="relative"
                    >

                        <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#d9ddd4]">

                            <img
                                src="https://tis.edu.in/_next/static/media/image1.6d2eabaf.webp"
                                alt="Students at Tulas International School"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                        </div>

                        <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white px-6 py-5 shadow-xl">

                            <p className="text-3xl font-semibold tracking-tight">
                                22
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-wider text-black/50">
                                Acre Campus
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default Hero