import React from "react"

function ProductCard({ id, title, description, price, thumbnail, rating, ...theRestOfTheProps }) {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>rating: {rating}</div>
      <img src={thumbnail} alt="" />
      {/* {JSON.stringify(theRestOfTheProps)} */}
    </li>
  )
}

export default ProductCard
