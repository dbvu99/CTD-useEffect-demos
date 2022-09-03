import React, { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

function SocialMediaClone() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isSubcribed = true
    fetch("https://jsonplaceholder.typicode.com/posts/")
      // first then will return the response in the json format and pass it to the second then
      .then((response) => response.json())
      //   second then will receive the json object from the first then as a paramter
      .then((json) => {
        if (isSubcribed) {
          //   console.log(json)

          setPosts(json)
        }
      })

    return () => {
      isSubcribed = false
    }
  })
  return (
    <div>
      {isLoading ?? <p>Loading posts...</p>}
      <div>
        {posts.map((post) => (
          <SinglePost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default SocialMediaClone
