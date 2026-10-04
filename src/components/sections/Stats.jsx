const stats =
[
    {
        value: "22",
        label: "Acre Campus"
    },
    {
        value: "16+",
        label: "Olympic Sports"
    },
    {
        value: "24×7",
        label: "Medical Assistance"
    },
    {
        value: "CBSE",
        label: "Curriculum"
    }
]

const Stats =() =>
{
    return (
        <section className="bg-[#f5f4ef] text-[#111] py-20 md:py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-black/10">

                    {stats.map((stat, index) =>
                    (
                        <div
                            key={stat.label}
                            className={`
                                py-10 md:py-14
                                ${index % 2 !== 0 ? "border-l border-black/10" : ""}
                                lg:border-l lg:border-black/10
                                ${index === 0 ? "lg:border-l-0" : ""}
                                ${index >= 2 ? "border-t lg:border-t-0 border-black/10" : ""}
                                px-5 md:px-8
                            `}
                        >

                            <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em]">
                                {stat.value}
                            </p>

                            <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-black/45">
                                {stat.label}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Stats