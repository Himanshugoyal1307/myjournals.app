import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TaskLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };

            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/Task/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <><div className="usermoodloop-card">
            {
                Data.map((Task, i) => {
                    return (
                        <>
                            {/* <h1>{Task.goals}<br />{Task.description} <br /> {Task.title}</h1> */}

                            <div class="ui card">
                                <div class="content">
                                    <div class="header"> {Task.title}</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header"></h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <p>{Task.description}</p>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">

                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="extra content">
                                    {Task.goals}
                                </div>
                            </div>



                        </>)
                }
                )}</div></>)
}

export default TaskLoop;