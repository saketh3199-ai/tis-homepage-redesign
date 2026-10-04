import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Stats from "./components/sections/Stats"
import Academics from "./components/sections/Academics"
import CampusLife from "./components/sections/CampusLife"
import BeyondAcademics from "./components/sections/BeyondAcademics"
import WhyTIS from "./components/sections/WhyTIS"
import Admissions from "./components/sections/Admissions"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/layout/ScrollProgress"
import CustomCursor from "./components/layout/CustomCursor"


function App()
{
    return (
        <>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Stats />
                <Academics />
                <CampusLife />
                <BeyondAcademics />
                <WhyTIS />
                <Admissions />
            </main>

            <Footer />
        </>
    )
}

export default App