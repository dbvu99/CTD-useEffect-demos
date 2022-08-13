import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

function FetchApi2ndDemo() {
  // 1. create an empty useEffect() function

  const [data, setData] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    // we do the initial data fetching inside this use effect

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

  //

  const [filterValue, setFilterValue] = useState("")
  const [filteredData, setFilteredData] = useState(null)

  useEffect(() => {
    // we do the data filter inside this use effect

    // [].filter()

    if (filterValue) {
      const filteredProducts = data.products.filter((item) => {
        return item.title.includes(filterValue)
      })

      setFilteredData(filteredProducts)
    } else {
      setFilteredData(null)
    }

    // console.log("filer value is being changed")
  }, [filterValue, data])

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  }

  return (
    <div className="container">
      <form className="fixed-top w-100 bg-primary p-2">
        <label className="me-3">Filter by title</label>
        <input value={filterValue} onChange={handleFilterChange}></input>
      </form>
      <hr />
      {loadingData && <h1>Loading data...</h1>}
      {filteredData?.length > 0 && (
        <div className="pt-5">
          <h1>Filtered Products</h1>
          <div>Number of filtered products: {filteredData.length}</div>
          <ul className="row list-unstyled">
            {filteredData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        </div>
      )}
      <hr />
      <h1>All Products</h1>
      {data && (
        <div className="pt-5">
          <div>Number of products: {data.total}</div>
          <ul className="row list-unstyled">
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
