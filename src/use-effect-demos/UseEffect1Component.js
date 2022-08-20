// create a react functional component called MyComponent
import { useState } from "react"

import { useEffect } from "react"

const UseEffect1Component = () => {
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fakeData = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]

      setData(fakeData)
      setLoadingData(false)
    }, 2000)
  }, [])

  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {loadingData && <li>Loading data...</li>}
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect1Component
