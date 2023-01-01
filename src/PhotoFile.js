import React, { useState } from 'react'
import axios from 'axios';


const PhotoFile = () => {
    const url = " http://127.0.0.1:8000/api/MyAlbum/"
    const [data, setData] = useState({
        album_type: "family photo",
        image: "family photo",
    })


    const submit = (e) => {
        // e.preventDefault();

        console.log("working")
        let formData = new FormData();
        formData.append('album_type', data.album_type);
        formData.append('image', data.image);

        let headers = {
            Authorization: `Token ${localStorage.getItem('token')}`
        };


        axios.post(url, formData, { headers: headers })
            .then(res => {
                console.log(res.data)
                setData({
                    album_type: "family photo",
                    image: "family photo",
                })
            })
    }

    function handle(e) {
        const newdata = { ...data }
        console.log(e.target.id)
        console.log(e.target.value)
        newdata[e.target.id] = e.target.value
        // console.log(e.target)
        setData(newdata)
        console.log(newdata)
    }
    function handleImage(e) {
        setData({
            ...data, image: e.target.files[0]
        })
    }


    return (
        <div>
            <div className='photohead1'>
                <h1 className='photohead2'>Select  Category  :-</h1>
                <select id='album_type' name="harsh" className='photodropdown' onChange={(e) => handle(e)}>
                    <option value="family photo">family photo</option>
                    <option value="random photo">Random Photo</option>
                    <option value="myphoto">My Photo </option>

                </select>

                <h2 className='photohead3'>Add Image  :-</h2>
                <input type="file" className='photohead4' onChange={handleImage} id="image"  ></input>
                <div className='photohead5'>  <button class="btn btn-primary" onClick={submit}>Click Here</button>
                </div>
            </div>
        </div>)
}
export default PhotoFile;