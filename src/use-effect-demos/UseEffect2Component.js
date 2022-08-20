import React from "react"
import { useState } from "react"
import { useEffect } from "react"

function UseEffect2Component() {
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("hey I am running")
    setTimeout(() => {
      const fakeData = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]

      setData(fakeData)
      setLoadingData(false)
    }, 2000)
  }, [count])

  const increaseCountByOne = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {loadingData && <li>Loading data...</li>}
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1>My Count {count}</h1>
      <button onClick={increaseCountByOne}>increase the count by 1</button>
    </div>
  )
}

export default UseEffect2Component
