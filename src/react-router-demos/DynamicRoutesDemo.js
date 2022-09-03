import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

function DynamicRoutesDemo() {
  const { dynamicRoute } = useParams()

  useEffect(() => {
    console.log(dynamicRoute)

    //   return () => {
    //     second
    //   }
  }, [dynamicRoute])

  return <div>Hello from dynamic route component: {dynamicRoute}</div>
}

export default DynamicRoutesDemo
