import React from "react"
import { Link } from "react-router-dom"

function SinglePost({ title, body, id }) {
  return (
    <div className="mb-3 card p-3">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link className="btn btn-primary" to={"/dynamic-route-app/" + id}>
          View all comments
        </Link>
      </div>
    </div>
  )
}

export default SinglePost
