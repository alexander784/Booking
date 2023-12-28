import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { parseWithOptions } from "date-fns/fp"
const Hotel = () => {

  const photos = [
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    },
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    },
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    },
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    },
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    },
    {
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-with-a-bridge-SVGJsMVjEF4"
    }
    
  ]
  return (
    <div>
      <Navbar />
      <Header type ="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddres">
            <FontAwesome Icon ={faLocationDot} />
            <span>Elton St  125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src="photo.src" alt="" className="hotelImg" />
        </div>

            ))}

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Kravow</h1>
              <p className="hotelDesc">
                Located a 5 minute walk fro st.florian
              </p>
            </div>
            <div className="hotelDetailslsPrice">
              <h1>Perfect for a 0-night stay</h1>
              <span>
                Located in the real heart of kravow, this property has an Excellentlocation of 9.8

              </span>

              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>

      </div>
    </div>
    </div>
  )
}


export default Hotel;