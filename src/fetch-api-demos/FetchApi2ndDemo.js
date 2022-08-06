import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

function FetchApi2ndDemo() {
  // 1. create an empty useEffect() function

  const [data, setData] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    //2. use fetch api to fetch data from the api
    fetch("https://dummyjson.com/products")
      .then((res) => {
        //3. handle the response from the api
        res
          .json()
          .then((data) => {
            //4. set the data to the state

            setData(data)
            setLoadingData(false)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch()
  }, [])

  return (
    <div>
      {loadingData && <h1>Loading data...</h1>}
      {data && (
        <div>
          <div>Number of products: {data.total}</div>
          <ul>
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FetchApi2ndDemo
