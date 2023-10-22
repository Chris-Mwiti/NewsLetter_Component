import { useEffect, useState } from "react"

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleScreenSizeChange = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleScreenSizeChange);

        return () => window.removeEventListener('resize', handleScreenSizeChange);
    },[])

    return screenSize
}

export default useScreenSize