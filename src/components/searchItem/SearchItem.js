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
        <h1 className="siTitle">Tower Street Apartment</h1>
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
        <div className="siDetails">details</div>
        
      
    </div>
  );
};


export default SearchItem;
