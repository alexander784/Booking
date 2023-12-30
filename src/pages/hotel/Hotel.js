import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/navbar/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MainList from "../../components/mainlist/MainList"
import Footer from "../../components/footer/Footer"
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { parseWithOptions } from "date-fns/fp"
import { useState } from "react"
const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
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
    
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  } 
  return (
    <div>
      <Navbar />
      <Header type ="list"/>
      <div className="hotelContainer">
         {open &&<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} />
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          <div className="silderWrapper">
            <img src="{photos[slideNumber]}" alt="" className="silderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} />

        </div> }
        <div className="hotelWrapper">
          <div className="book Now"> Reserve or Book Now!</div>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddres">
            <FontAwesomeIcon icon = {faLocationDot} />
            <span>Elton St  125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photoc,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={handleOpen} src="photo.src" alt="" className="hotelImg" />
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
      <MainList />
      <Footer />
    </div>
    </div>
    
  )
}


export default Hotel;