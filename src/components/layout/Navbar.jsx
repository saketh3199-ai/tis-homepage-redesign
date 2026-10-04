import {useEffect, useState} from "react"
import {Menu, X, ArrowUpRight} from "lucide-react"

const navLinks =
[
    {label: "About", href: "#about"},
    {label: "Academics", href: "#academics"},
    {label: "Campus Life", href: "#campus"},
    {label: "Admissions", href: "#admissions"}
]

const Navbar =() =>
{
    const [IsScrolled, setIsScrolled] = useState(false)
    const [IsMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() =>
    {
        const HandleScroll =() =>
        {
            setIsScrolled(window.scrollY > 30)
        }

        window.addEventListener("scroll", HandleScroll)

        return () =>
        {
            window.removeEventListener("scroll", HandleScroll)
        }
    }, [])

    const CloseMenu =() =>
    {
        setIsMenuOpen(false)
    }

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-300
                ${IsScrolled
                    ? "bg-[#111]/90 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"}
            `}
        >

            <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                <a
                    href="#"
                    onClick={CloseMenu}
                    className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${IsScrolled ? "text-white" : "text-[#111]"}`}
                >
                    TIS
                </a>

                <div className="hidden md:flex items-center gap-8">

                    {navLinks.map((link) =>
                    (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm transition-colors duration-300 ${IsScrolled? "text-white/70 hover:text-white": "text-black/60 hover:text-black"}`}
                        >
                            {link.label}
                        </a>
                    ))}

                </div>

                <div className="hidden md:flex items-center">

                    <a
                        href="#admissions"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#b7d66b] transition-colors"
                    >
                        Enquire Now
                        <ArrowUpRight
                            size={15}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>

                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!IsMenuOpen)}
                    aria-label={IsMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={IsMenuOpen}
                    className={`md:hidden p-2 transition-colors duration-300 ${IsScrolled ? "text-white" : "text-[#111]"}`}
                >
                    {IsMenuOpen
                        ? <X size={24}/>
                        : <Menu size={24}/>
                    }
                </button>

            </nav>

            {IsMenuOpen &&
            (
                <div className={`md:hidden backdrop-blur-xl border-t px-6 py-6 ${IsScrolled? "bg-[#111]/95 border-white/10": "bg-[#f5f4ef]/95 border-black/10"}`}>

                    <div className="flex flex-col gap-5">

                        {navLinks.map((link, index) =>
                        (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={CloseMenu}
                                className={`flex items-center justify-between text-base transition-colors ${IsScrolled? "text-white/80 hover:text-white": "text-black/70 hover:text-black"}`}
                            >
                                <span>{link.label}</span>
                                <span className={`text-xs ${IsScrolled ? "text-white/30" : "text-black/30"}`}>
                                    0{index + 1}
                                </span>
                            </a>
                        ))}

                        <a
                            href="#admissions"
                            onClick={CloseMenu}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#b7d66b] px-5 py-3 text-sm font-semibold text-[#111]"
                        >
                            Enquire Now
                            <ArrowUpRight size={16}/>
                        </a>

                    </div>

                </div>
            )}

        </header>
    )
}

export default Navbar