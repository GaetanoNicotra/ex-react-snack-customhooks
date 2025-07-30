import { useState, useEffect } from "react"

function useDate() {
    const [date, setDate] = useState('')
    useEffect(() => {
        setDate(new Date())
    }, [date])
    return date
}

export default useDate