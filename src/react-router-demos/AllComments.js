import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SingleComment from "./SingleComment"

function AllComments() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    //utilize the post id to fetch the comments

    let isSubcribed = true
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      // first then will return the response in the json format and pass it to the second then
      .then((response) => response.json())
      //   second then will receive the json object from the first then as a paramter
      .then((json) => {
        if (isSubcribed) {
          //   console.log(json)
          setComments(json)
        }
      })

    return () => {
      isSubcribed = false
    }
  })

  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-primary" to="/dynamic-route-app/">
          Go back to all posts
        </Link>
      </div>
      <div>
        {isLoading ?? <p>Loading posts...</p>}
        <div>
          <h1>All Comments </h1>
          {comments.map((comment) => (
            <SingleComment key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllComments
