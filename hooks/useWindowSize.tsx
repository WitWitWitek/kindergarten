import { useState, useEffect } from "react"

interface WindowParams {
    width: number,
    height: number,
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowParams>({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowSize }
}

export default useWindowSize