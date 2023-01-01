import React from 'react'
import img1 from "./photos/image4.jpg"
import Quote2 from '../Quotes2'
//import File from '../File'
import { Redirect, Link } from 'react-router-dom'
import Footer2 from '../Footer2'
const User = () => {
    return (
        <div>
            <div className='head2'>

                <h1 className='head4'>How was your Day  Buddy ...</h1>
                <h2 className='head6'>Please share your thoughts here</h2>

            </div>
            <Quote2 />
            {/* <div className='sidebaruser'>

                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <Link to="/ActivityLoop"> <button type="button" class="btn btn-primary">My Activities</button></Link>
                    <Link to="/LearningLoop">   <button type="button" class="btn btn-primary">My Learnings </button></Link>
                    <Link to="/UserMoodeLoop">   <button type="button" class="btn btn-primary">User Mode </button></Link>
                    <Link to="/TaskLoop">   <button type="button" class="btn btn-primary"> My Goals </button></Link>


                    <Link to="/Loop1"> <button type="button" class="btn btn-primary">Food Targets</button></Link>
                    <Link to="/TravelLoop"><button type="button" class="btn btn-primary">Travel Targets</button></Link>
                    <Link to="/MyphotosLoop"><button type="button" class="btn btn-primary">All Photos</button></Link>



                </div>




            </div> */}



            <div className='sidebar2-card'>

                <div class="ui vertical buttons">
                    <Link to="/ActivityLoop">   <button class="ui button">My  Activities</button></Link>
                    <Link to="/LearningLoop">   <button class="ui button">All  Learning</button></Link>
                    <Link to="/UserMoodeLoop">   <button class="ui button">My  Mood</button></Link>
                    <Link to="/TravelLoop">  <button class="ui button">Travel  Targets</button></Link>
                    <Link to="/Loop1">    <button class="ui button">Food  Targets</button></Link>
                    <Link to="/TaskLoop">     <button class="ui button">My  Goals</button></Link>
                    <Link to="/MyphotosLoop">   <button class="ui button">My All Photos</button></Link>
                </div>
            </div>

            <div className='usercenter'>


                <div class="card text-center">
                    <div class="card-header">
                        Learning
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">What is new learn Today</h5>
                        <p class="card-text">Add your learning from your exprience.  You can also add image of quote.</p>
                        <Link to="/LearningFile"> <button class="btn btn-primary" type="submit">Click Here</button>
                        </Link>

                    </div>

                </div>


                <div class="card text-center">
                    <div class="card-header">
                        Current Mood
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">My Mood </h5>
                        <p class="card-text">Add your current mood . with reason and song you want to listen</p>
                        <Link to="/UsermodeFile"> <button class="btn btn-primary" type="submit" >Click Here</button>
                        </Link>

                    </div>

                </div>

                <div class="card text-center">
                    <div class="card-header">
                        My Journey
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Today Activities  </h5>
                        <p class="card-text">You can add your whole day activities with some random clicks.</p>
                        <Link to="/File">  <button class="btn btn-primary" type="submit" >Click Here</button>
                        </Link>

                    </div>

                </div>

                <div class="card text-center">
                    <div class="card-header">
                        My Goals
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Targets </h5>
                        <p class="card-text">You can set your goals according to the category of weekly , daily , short term  and  long  term  goals.</p>
                        <Link to="/TaskFile" > <button class="btn btn-primary" type="submit">Click Here</button>
                        </Link>

                    </div>

                </div>
                <div class="card text-center">
                    <div class="card-header">
                        My album
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> Photos</h5>
                        <p class="card-text">You can create your Album according to the category of Personal , Random , Family  Photos .</p>
                        <Link to="/PhotoFile"> <button class="btn btn-primary" type="submit">Click Here</button>
                        </Link>
                    </div>

                </div>
            </div>


            <div className='travelcard5'>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img src={img1} />
                        </div>
                        <div class="content">
                            <div class="header">Travelling</div>

                            <div class="description">
                                you can add your favourite location with photos.
                            </div>
                        </div>
                        <Link to="/TravelFile"> <button class="btn btn-primary" type="submit">Click Here</button>
                        </Link>

                    </div>

                </div>

            </div>

            <div className='foodcard5'>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img src={img1} />
                        </div>
                        <div class="content">
                            <div class="header">Favourite Food</div>

                            <div class="description">
                                you can add your favourite food with photos.
                            </div>
                        </div>
                        <div className='foodcard-btn'>     <Link to="/FoodFile"> <button class="btn btn-primary" type="submit">Click Here</button>
                        </Link>
                        </div>
                    </div>

                </div>

            </div>






            <Footer2 />


        </div>





    )
}
export default User;