import React from "react";
import img1 from "./photos/image4.jpg"
import img2 from "./photos/image3.jpg"
const TravelCards = () => {
  return (
    <>
      <div className="homefoodtravel-card">
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

              <button class="btn btn-primary" type="submit">Click Here</button>


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
                  you can add your favourite location with photo.
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Click Here</button>

            </div>

          </div>

        </div>


      </div>
    </>
  )
}
export default TravelCards;