import React from "react";
import img1 from "./photos/image4.jpg"
const FoodCards = () => {
  return (
    <>
      <div className="image-card">

        <div class="ui card">
          <div class="ui slide masked reveal image">
            <img src={img1} class="visible content" />
            <img src={img1} class="hidden content" />

          </div>
          <div class="content">
            <a class="header">My Gallery</a>
            <div class="meta">
              <span class="date">Add your personal photos and some random clicks.</span>
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Click Here</button>

        </div></div>
    </>
  );
}
export default FoodCards;