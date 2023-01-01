import React, { useState } from 'react'
import axios from 'axios';


const File = () => {
    const url = " http://127.0.0.1:8000/api/Activity/"
    const [data, setData] = useState({
        title: " ",
        description: " ",
        image: " ",
    })

    const submit = (e) => {
        // e.preventDefault();
        console.log("work")
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        // if (data.image) {
        //     formData.append('image', data.image);
        // }
        // console.log(data.image)

        formData.append('image', data.image);



        console.log("working")

        let headers = {
            Authorization: `Token ${localStorage.getItem('token')}`
        };


        axios.post(url, formData, { headers: headers })
            .then(res => {
                setData({
                    title: " ",
                    description: " ",
                    image: " ",
                })
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata
        [e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }


    function handleImage(e) {
        setData({
            ...data, image: e.target.files[0]
        })
    }

    return (
        <div className='actfile'>
            <h1 className='acthead1'>Title  :</h1>
            <textarea className='acthead2' onChange={(e) => handle(e)} id="title" value={data.title} placeholder='add your title'></textarea>


            <h1 className='acthead'>Description  :-</h1>

            <textarea className='acthead3' onChange={(e) => handle(e)} id="description" value={data.description} ></textarea>
            <h2 className='acthead5'> Add Image  :</h2>
            <input type="file" className='acthead4' onChange={handleImage} id="image"></input>
            <div className='acthead6'>
                <button class="btn btn-primary" onClick={submit}>Click Here</button>
            </div>
        </div>
    )
}

export default File;
