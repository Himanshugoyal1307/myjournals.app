import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserMoodeLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/UserMode/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <>  <div className="usermoodloop-card">
            {
                Data.map((UserMode, i) => {
                    return (
                        <>
                            {/* <h1>{UserMode.mood}<br />{UserMode.reason} <br /> {UserMode.music}</h1> */}


                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Current Mood</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">{UserMode.mood}</h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <p>{UserMode.reason}</p>
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
                                    {UserMode.music}
                                </div>
                            </div>


                        </>)
                }
                )}</div></>)
}

export default UserMoodeLoop;