import "./searchItem.css"
import List from "../../pages/list/List";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://media.istockphoto.com/id/1318363878/photo/luxury-modern-bedroom-interior-at-night.webp?b=1&s=170667a&w=0&k=20&c=92VQlNjNQbG4V2eWlsGNNc9kuqbYTCwjRvriOQIQ2lc=" 
      alt=""
       className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Diani Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>

        <span className="siFeatures">
          Entire studio * 1 bathroom * 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!

        </span>
      </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
        
      
    </div>
  );
};


export default SearchItem;
