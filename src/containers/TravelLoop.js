import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const TravelLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/Travel/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <><div className="travelloop-card">
            {
                Data.map((Travel, i) => {
                    return (
                        <>
                            {/* {<h1>{Travel.title}<br />{Travel.description} <br /><img src={Travel.image} /></h1>} */}


                            <div class="ui card">
                                <div class="content">

                                    <h1>{Travel.title}</h1>
                                </div>
                                <div class="image">
                                    <img src={Travel.image} />
                                </div>
                                <div class="content">


                                    <p>{Travel.description}</p>

                                </div>


                            </div>




                        </>)
                }
                )}</div></>)
}

export default TravelLoop;
