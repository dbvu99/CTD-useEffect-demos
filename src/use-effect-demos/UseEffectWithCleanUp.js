import React, { useEffect, useState } from "react"

function UseEffectWithCleanUp() {
  // realtime - is when component automatically fetch the data when there is a change in the database with having to refresh the component

  // if you are working with a realtime api, make sure you have a proper way to clean up the api to avoid bad behaviors in your application

  const [second, setSecond] = useState(0)

  useEffect(() => {
    console.log("component mounted!!!")

    const myInterval = setInterval(() => {
      console.log("hello")
      setSecond((previousState) => {
        return previousState + 1
      })
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  })

  return <div>It has been {second} seconds since I mounted this component</div>
}

export default UseEffectWithCleanUp
