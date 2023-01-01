import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

const Quote = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://type.fit/api/quotes").then((response) => {
      console.log(response.data)
      setData(response.data[Math.floor(Math.random() * response.data.length)])
      setLoading(false)
    })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
    // console.log("working")
  }, [])

  return (
    <><div className="center">
      {
        loading ? 'Loading...' : <h1 className="text2">{data?.text}</h1>
      }
    </div>
    </>
  )
}
export default Quote;
