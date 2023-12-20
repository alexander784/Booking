import PropertyList from "../../components/Property.List/PropertyList";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/navbar/featured/Featured";
import Header from "../../components/navbar/header/Header";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
      </div>

    </div>
    
  )
};

export default Home;
