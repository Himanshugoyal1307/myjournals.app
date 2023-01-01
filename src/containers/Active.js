import React from 'react';
import img1 from "./photos/image.jpg"
const Active = () => {
    return (
        <div className='activity2'>

            <div class="card w-20 ">
                <div class="card-body">
                    <h5 class="card-title">Activity</h5>
                    <p class="card-text">you can add your whole day incidents with random clicks</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>


            <div class="card w-20 ">
                <div class="card-body">
                    <h5 class="card-title">Learning</h5>
                    <p class="card-text">add your learning from your experience</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>

            <div class="card w-20 ">
                <div class="card-body">
                    <h5 class="card-title">UserMood</h5>
                    <p class="card-text">add your current mood with music </p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    )
}
export default Active;