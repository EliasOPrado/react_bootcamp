import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    // const [interval, setInterval] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // cleanup interval
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
