import React from "react"
import { Link } from "react-router-dom"

function SingleComment({ name, email, body, id }) {
  return (
    <div className="mb-3 card p-3">
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{body}</p>
        {/* <Link className="btn btn-primary" to={"/dynamic-route-app/" + id}>
          View all comments
        </Link> */}
      </div>
    </div>
  )
}

export default SingleComment
