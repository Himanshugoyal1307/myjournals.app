import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import User from "./containers/User";
import File from "./File";
import FoodFile from "./File2";
import Loop1 from "./containers/Loop1";
import TravelFile from "./TravelFile";
import TravelLoop from "./containers/TravelLoop";
import LearningFile from "./LearningFile";
import LearningLoop from "./containers/LearningLoop";
import ActivityLoop from "./containers/ActivityLoop";
import UserMoodeLoop from "./UserMoodeLoop";
import TaskLoop from "./TaskLoop";
import MyphotosLoop from "./containers/MyphotosLoop";
import AllphotosLoop from "./containers/AllphotosLoop";
import UserMode from "./UsermodeFile";
import TaskFile from "./TaskFile";
import PhotoFile from "./PhotoFile";


const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/User" component={User} />
    <Route exact path="/File" component={File} />
    <Route exact path="/FoodFile" component={FoodFile} />
    <Route exact path="/Loop1" component={Loop1} />
    <Route exact path="/TravelFile" component={TravelFile} />
    <Route exact path="/TravelLoop" component={TravelLoop} />
    <Route exact path="/LearningFile" component={LearningFile} />
    <Route exact path="/LearningLoop" component={LearningLoop} />
    <Route exact path="/ActivityLoop" component={ActivityLoop} />
    <Route exact path="/UserMoodeLoop" component={UserMoodeLoop} />
    <Route exact path="/TaskLoop" component={TaskLoop} />
    <Route exact path="/MyphotosLoop" component={MyphotosLoop} />
    <Route exact path="/AllphotosLoop" component={AllphotosLoop} />
    <Route exact path="/UsermodeFile" component={UserMode} />
    <Route exact path="/TaskFile" component={TaskFile} />
    <Route exact path="/PhotoFile" component={PhotoFile} />

  </Hoc>
);

export default BaseRouter;
