
import {ArrowUpRight} from "lucide-react"
import Reveal from "../layout/Reveal"

const About =() =>
{
    return (
        <section
            id="about"
            className="bg-[#173b2a] text-white py-24 md:py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7d66b]">
                            About TIS
                        </p>

                    </div>

                    <Reveal>

                        <div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                                More than a school.
                                <span className="block text-white/50">
                                    A place to grow.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed">
                                Tulas International School is a co-educational
                                boarding and day school in Dehradun focused on
                                academic excellence, character development and
                                preparing students for a changing world.
                            </p>

                            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed">
                                From academics and sports to leadership and
                                residential life, students are encouraged to
                                discover their strengths, develop confidence and
                                become responsible global citizens.
                            </p>

                            <a
                                href="#academics"
                                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-2 hover:border-[#b7d66b] transition-colors"
                            >
                                Discover the TIS experience
                                <ArrowUpRight size={16}/>
                            </a>

                        </div>

                    </Reveal>

                </div>

            </div>

        </section>
    )
}

export default About

