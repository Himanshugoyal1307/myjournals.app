import React from "react";
import img1 from "./photos/image4.jpg"
const GoalsCards = () => {
  return (
    <><div className="homephotos-card">

      <div class="ui four cards">

        <a class="yellow card">
          <div class="image">
            <img class="ui medium circular image" src={img1} />
            <h1>Daily  Targets </h1>
          </div>
        </a>
        <a class="olive card">
          <div class="image">
            <img class="ui medium circular image" src={img1} />
            <h1>Weekly  Targets</h1>
          </div>
        </a>
        <a class="olive card">
          <div class="image">
            <img class="ui medium circular image" src={img1} />
            <h1>Short Term Goals</h1>
          </div>
        </a>
        <a class="green card">
          <div class="image">
            <img class="ui medium circular image" src={img1} />
            <h1>Long Term Goals</h1>
          </div>
        </a>

      </div>
    </div>
    </>
  )
}
export default GoalsCards;