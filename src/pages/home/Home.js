import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import PropertyList from "../../components/Property.List/PropertyList";
import Footer from "../../components/footer/Footer";
import MainList from "../../components/mainlist/MainList";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/navbar/featured/Featured";
import Header from "../../components/header/Header";
import Hotel from "../hotel/Hotel";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hotel />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <MainList />
        <Footer />
      </div>

    </div>
    
  )
};

export default Home;
