import React, { useState } from 'react'
import axios from 'axios';


const Usermode = () => {
    const url = " http://127.0.0.1:8000/api/Task/"
    const [data, setData] = useState({
        title: " ",
        description: " ",
        goals: "weekly",
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
                    title: " ",
                    description: " ",
                    goals: "weekly",
                })
            })

    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
            <div className='taskhead1'>
                <h1 className='taskhead2'>Select  Goal  :-</h1>
                <select id='goals' name="harsh" className='taskhead3' onChange={(e) => handle(e)}>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Today</option>
                    <option value="short">Short Term </option>
                    <option value="long" >Long Term</option>

                </select>


                <h1 className='taskhead4'>Title  :-</h1>
                <textarea className='taskhead5' onChange={(e) => handle(e)} id="title" value={data.title} placeholder='add your title'></textarea>
                <h1 className='taskhead6'>Description  :-</h1>

                <textarea className='taskhead7' onChange={(e) => handle(e)} id="description" value={data.description} placeholder='add your Description'></textarea>

                <div className='taskhead8'>
                    <button class="btn btn-primary" onClick={submit}>Click Here</button>
                </div>
            </div>
        </div>
    )
}

export default Usermode;
