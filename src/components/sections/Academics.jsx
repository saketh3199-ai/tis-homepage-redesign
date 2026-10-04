import {motion} from "framer-motion"
import {ArrowUpRight} from "lucide-react"

const programs =
[
    {
        number: "01",
        title: "Academic Excellence",
        description:
            "A strong academic foundation designed to develop curiosity, critical thinking and a lifelong love for learning.",
        accent: "bg-[#dfe9d8]"
    },
    {
        number: "02",
        title: "Holistic Development",
        description:
            "Students grow beyond the classroom through experiences that build confidence, creativity, communication and character.",
        accent: "bg-[#e9e3d3]"
    },
    {
        number: "03",
        title: "Global Outlook",
        description:
            "An environment that encourages students to understand the world around them and develop the skills to participate in it.",
        accent: "bg-[#dce4e5]"
    }
]

const Academics =() =>
{
    return (
        <section
            id="academics"
            className="bg-[#111] text-white py-24 md:py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7d66b]">
                            Academics
                        </p>

                        <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                            Learning that goes
                            <span className="block text-white/45">
                                beyond the classroom.
                            </span>
                        </h2>

                    </div>

                    <a
                        href="#admissions"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold border-b border-white/25 pb-2 hover:border-[#b7d66b] transition-colors"
                    >
                        Explore Academics

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />

                    </a>

                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-4">

                    {programs.map((program, index) =>
                    (
                        <motion.article
                            key={program.number}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="group min-h-[380px] rounded-[1.75rem] bg-white/[0.06] border border-white/10 p-7 md:p-8 flex flex-col justify-between hover:bg-white/[0.1] hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="flex items-start justify-between">

                                <span className="text-sm text-white/35">
                                    {program.number}
                                </span>

                                <div
                                    className={`h-3 w-3 rounded-full ${program.accent}`}
                                />

                            </div>

                            <div>

                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                    {program.title}
                                </h3>

                                <p className="mt-5 text-sm md:text-base text-white/50 leading-relaxed">
                                    {program.description}
                                </p>

                                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">

                                    Learn more

                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </div>

                        </motion.article>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Academics