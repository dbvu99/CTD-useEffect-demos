import React, { useEffect, useState } from "react"

function FetchApi() {
  const [loadingData, setLoadingData] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    //   fetch data from the api
    fetch("https://randomuser.me/api/")
      .then((res) => {
        //  we use then to handle a successful response/promise
        //   console.log()
        res
          .json()
          .then((data) => {
            //   get the user data from the successful response
            const result = data.results[0]

            //   set the loading state to false after the data is loaded
            setLoadingData(false)
            setData(result)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        // we use catch to handle an error response/ failed promise
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Fetch API Demo - Randon User Profile</h1>
      {loadingData && <h1>Loading data...</h1>}
      {data && (
        <div>
          <div>First Name: {data.name.first}</div>
          <div>Email: {data.email}</div>
          <img src={data.picture.large} alt="" />
        </div>
      )}
    </div>
  )
}

export default FetchApi

//api
// instagram app
// frontend - user interface, interaction, etc.

// backend - server, database, etc.

// user profile - data for user come from the backend end,

// api - bridge between frontend and backend

// fake api https://randomuser.me/api/ - a JSON file/object/data/collection that on the internet

// fetch api - a function that grab data from the api so we can use it on our frontend application

// we use useEffect when working with remote data from a server/api
