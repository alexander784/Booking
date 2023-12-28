import "./searchItem.css"
import List from "../../pages/list/List";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://unsplash.com/photos/white-wooden-dining-table-set-during-daytime-nBuiLbz_j4A" alt="" className="Img"
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
