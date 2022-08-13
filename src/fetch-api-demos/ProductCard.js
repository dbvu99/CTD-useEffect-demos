import React from "react"

function ProductCard({ id, title, description, price, thumbnail, rating, ...theRestOfTheProps }) {
  return (
    <li key={id} className="col-12 col-sm-6 col-md-4 px-3">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>rating: {rating}</div>
      <img className="w-100" src={thumbnail} alt="" />
      {/* {JSON.stringify(theRestOfTheProps)} */}
    </li>
  )
}

export default ProductCard
