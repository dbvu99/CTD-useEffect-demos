import React from "react"
import { useEffect } from "react"

function UseEffectWCleanUp() {
  useEffect(() => {}, [])

  return <div></div>
}

export default UseEffectWCleanUp
