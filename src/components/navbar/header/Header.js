 
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css"
import { faBed } from "@fortawesome/free-solid-svg-icons";
 const Header = () => {
   return (
     <div className='header'>
        <div className="headerList">
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Flights</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Car rentals</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Airport Taxis</span>

            </div>
        </div>

        </div>
   )
 }

 export default Header;
 