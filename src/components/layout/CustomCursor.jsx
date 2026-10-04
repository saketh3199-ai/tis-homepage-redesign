import {useEffect} from "react"
import {motion, useMotionValue, useSpring, useReducedMotion} from "framer-motion"

const CustomCursor =() =>
{
    const MouseX = useMotionValue(-100)
    const MouseY = useMotionValue(-100)

    const SpringX = useSpring(MouseX, {
        stiffness: 250,
        damping: 25
    })

    const SpringY = useSpring(MouseY, {
        stiffness: 250,
        damping: 25
    })

    const ShouldReduceMotion = useReducedMotion()

    useEffect(() =>
    {
        if (ShouldReduceMotion)
        {
            return
        }

        const HandleMouseMove =(event) =>
        {
            MouseX.set(event.clientX - 8)
            MouseY.set(event.clientY - 8)
        }

        window.addEventListener("mousemove", HandleMouseMove)

        return () =>
        {
            window.removeEventListener("mousemove", HandleMouseMove)
        }
    }, [MouseX, MouseY, ShouldReduceMotion])

    if (ShouldReduceMotion)
    {
        return null
    }

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-4 w-4 rounded-full border-2 border-[#b7d66b] md:block"
            style={{
                x: SpringX,
                y: SpringY
            }}
        />
    )
}

export default CustomCursor