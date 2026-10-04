import {ArrowUpRight} from "lucide-react"
import {motion} from "framer-motion"

const activities =
[
    {
        number: "01",
        title: "Sports",
        description: "Developing discipline, teamwork and confidence through sport.",
        size: "md:col-span-2"
    },
    {
        number: "02",
        title: "Leadership",
        description: "Helping students take initiative and lead with purpose.",
        size: ""
    },
    {
        number: "03",
        title: "Creativity",
        description: "Making space for imagination, expression and new ideas.",
        size: ""
    },
    {
        number: "04",
        title: "Community",
        description: "Building empathy, responsibility and meaningful connections.",
        size: "md:col-span-2"
    }
]

const BeyondAcademics =() =>
{
    return (
        <section
            className="bg-[#173b2a] text-white py-24 md:py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7d66b]">
                        Beyond Academics
                    </p>

                    <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                        Discover what
                        <span className="block text-white/45">
                            you're capable of.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
                        Education is not limited to textbooks. Students are
                        encouraged to explore interests, develop new skills and
                        discover the confidence to step outside their comfort zone.
                    </p>

                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-4">

                    {activities.map((activity, index) =>
(
    <motion.article
        key={activity.number}
        initial={{opacity: 0, y: 45}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
        }}
        className={`
        ${activity.size}
        group min-h-[280px] rounded-[1.75rem]
        border border-white/10
        bg-white/[0.05]
        p-7 md:p-8
        flex flex-col justify-between
        hover:bg-white/[0.09]
        hover:-translate-y-1
        transition-all duration-300
    `}
    >

        <div className="flex items-center justify-between">

            <span className="text-sm text-white/30">
                {activity.number}
            </span>

            <ArrowUpRight
    size={18}
    className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
/>

        </div>

        <div>

            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                {activity.title}
            </h3>

            <p className="mt-4 max-w-md text-sm md:text-base text-white/45 leading-relaxed">
                {activity.description}
            </p>

        </div>

    </motion.article>
))}

                </div>

            </div>

        </section>
    )
}

export default BeyondAcademics