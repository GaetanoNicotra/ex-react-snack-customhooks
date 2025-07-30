import { useState, useEffect } from "react"

function useKeyPress(nameButton) {
    const [isPress, setIsPress] = useState(false);
    useEffect(() => {
        const positionUp = (e) => {
            if (e.key === nameButton) {
                setIsPress(false)
            }
        }
        const positionDown = (e) => {
            if (e.key === nameButton) {
                setIsPress(true)
            }
        }
        window.addEventListener('keydown', positionDown)
        window.addEventListener('keyup', positionUp)

        return () => {
            window.removeEventListener('keydown', positionDown)
            window.removeEventListener('keyup', positionUp)

        }

    }, [])
    return isPress
}

export default useKeyPress