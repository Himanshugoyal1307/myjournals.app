import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const Loop1 = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/Food/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <> <div className="Foodloop-card">
            {
                Data.map((Food, i) => {
                    return (
                        <>
                            {/* <h1>{Food.title}<br />{Food.description} <br /><img src={Food.image} /></h1> */}




                            <div class="ui card">
                                <div class="content">

                                    <h1>{Food.title}</h1>
                                </div>
                                <div class="image">
                                    <img src={Food.image} />
                                </div>
                                <div class="content">


                                    <p>{Food.description}</p>

                                </div>


                            </div>



                        </>)
                }
                )}</div></>)
}

export default Loop1;