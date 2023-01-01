import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const MyphotosLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            let headers = {
                Authorization: `Token ${localStorage.getItem('token')}`
            };
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/MyAlbum/", { headers: headers })
                console.log(Data.data)
                setData(Data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllData()
    }, [])
    return (
        <>
            {
                Data.map((MyAlbum, i) => {
                    return (
                        <>
                            {/* <img src={MyAlbum.image} /> <br /> <h1>{MyAlbum.album_type}</h1> */}

                            <div>
                                <div class="ui card">
                                    <a class="image" href="#">
                                        <img src={MyAlbum.image} />
                                    </a>
                                    <div class="content">
                                        <a class="header" href="#">{MyAlbum.album_type}</a>

                                    </div>
                                </div>

                            </div>

                        </>)
                }
                )}</>)
}

export default MyphotosLoop;