import {motion, useScroll} from "framer-motion"

const ScrollProgress =() =>
{
    const {scrollYProgress} = useScroll()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-[#b7d66b] origin-left z-[100]"
            style={{scaleX: scrollYProgress}}
        />
    )
}

export default ScrollProgress