import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const LearningLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/Learning/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <div className="activityloop-card">

            {
                Data.map((Learning, i) =>
                (
                    <>
                        <div class="ui cards">
                            <div class="card">
                                <div class="content">
                                    <img class="right floated mini ui image" src={Learning.image} />
                                    <div class="header">
                                        {Learning.title}
                                    </div>

                                    <div class="description">
                                        {Learning.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )

                )}</div>)
}

export default LearningLoop;