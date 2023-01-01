import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./photos/image.jpg"
const AllphotosLoop = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        async function getAllData() {
            try {
                const Data = await axios.get(" http://127.0.0.1:8000/api/MyAlbum/")
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
                Data.map((AlbumPhotos, i) => {
                    return (
                        <>
                            <h1><img src={AlbumPhotos.image} /></h1>


                        </>)
                }
                )}</>)
}

export default AllphotosLoop;