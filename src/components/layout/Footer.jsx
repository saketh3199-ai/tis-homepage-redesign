import {ArrowUpRight} from "lucide-react"

const Footer =() =>
{
    return (
        <footer className="bg-[#111] text-white border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="lg:col-span-2">

                        <p className="text-3xl font-semibold tracking-tight">
                            TIS
                        </p>

                        <p className="mt-5 max-w-sm text-sm text-white/45 leading-relaxed">
                            Tulas International School, Dehradun.
                            An environment where students learn, grow
                            and prepare for the world ahead.
                        </p>

                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                            Explore
                        </p>

                        <div className="mt-5 flex flex-col gap-3">

                            <a
                                href="#about"
                                className="text-sm text-white/65 hover:text-white transition-colors"
                            >
                                About
                            </a>

                            <a
                                href="#academics"
                                className="text-sm text-white/65 hover:text-white transition-colors"
                            >
                                Academics
                            </a>

                            <a
                                href="#campus"
                                className="text-sm text-white/65 hover:text-white transition-colors"
                            >
                                Campus Life
                            </a>

                            <a
                                href="#admissions"
                                className="text-sm text-white/65 hover:text-white transition-colors"
                            >
                                Admissions
                            </a>

                        </div>

                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                            Connect
                        </p>

                        <div className="mt-5 flex flex-col gap-3">

                            <a
                                href="https://tis.edu.in/contact-us/"
                                className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                            >
                                Contact TIS
                                <ArrowUpRight size={14}/>
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                            >
                                Virtual Tour
                                <ArrowUpRight size={14}/>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <p className="text-xs text-white/30">
                        © 2026 Tulas International School. All rights reserved.
                    </p>

                    <a
                        href="#"
                        className="text-xs text-white/30 hover:text-white transition-colors"
                    >
                        Back to top ↑
                    </a>

                </div>

            </div>

        </footer>
    )
}

export default Footer