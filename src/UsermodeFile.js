import React, { useState } from 'react'
import axios from 'axios';


const UserMode = () => {
    const url = " http://127.0.0.1:8000/api/UserMode/"
    const [data, setData] = useState({
        music: " ",
        reason: " ",
        mood: "Happy",
    })

    const submit = (e) => {
        // e.preventDefault();

        console.log("working")

        let headers = {
            Authorization: `Token ${localStorage.getItem('token')}`
        };


        axios.post(url, data, { headers: headers })
            .then(res => {
                console.log(res.data)
                setData({
                    music: " ",
                    reason: " ",
                    mood: "Happy",
                })
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        // console.log(e.target)
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>

            <div className='modehead1'>
                <h1 className='modehead8'>Current Mood  :-</h1>
                <select id='mood' name="harsh" className='modehead2' onChange={(e) => handle(e)}>
                    <option value="Happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="fear">Fear</option>
                    <option value="anger" >Anger</option>
                    <option value="surprise">Surprise</option>
                </select>

                <h1 className='modehead3'>music  :-</h1>
                <textarea className='modehead4' onChange={(e) => handle(e)} id="music" value={data.music} placeholder='add your music'></textarea>
                <h1 className='modehead5'>Reason  :-</h1>

                <textarea className='modehead6' onChange={(e) => handle(e)} id="reason" value={data.reason} placeholder='add your Description'></textarea>

                <div className='modehead7'>
                    <button class="btn btn-primary" onClick={submit}>Click Here</button>
                </div>
            </div>
        </div>
    )
}

export default UserMode;
