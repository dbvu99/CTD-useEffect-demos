import React from "react"

function SinglePost({ title, body }) {
  return (
    <div className="mb-3 card p-3">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <a className="btn btn-primary">View all comments</a>
      </div>
    </div>
  )
}

export default SinglePost
