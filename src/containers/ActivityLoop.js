import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const ActivityLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/Activity/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <> <div className="activityloop-card">
            {
                Data.map((Activity, i) => {
                    return (
                        <>
                            {/* {<h1>{Activity.title}<br />{Activity.description} <br /><img src={Activity.image} /></h1>} */}


                            <div class="ui cards">
                                <div class="card">
                                    <div class="content">
                                        <img class="right floated mini ui image" src={Activity.image} />
                                        <div class="header">
                                            {Activity.title}
                                        </div>

                                        <div class="description">
                                            {Activity.description}
                                        </div>
                                    </div>

                                </div>

                            </div>




                        </>)
                }
                )}</div></>)
}

export default ActivityLoop;