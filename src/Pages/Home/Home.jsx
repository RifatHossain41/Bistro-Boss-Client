
import { Helmet } from "react-helmet-async";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import BistroTitle from "./BistroTitle/BistroTitle";
import Category from "./Category/Category";
import ChefCard from "./ChefCard/ChefCard";
import Featured from "./Featured/Featured";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroTitle></BistroTitle>
      <PopularMenu></PopularMenu>
      <PhoneNumber></PhoneNumber>
      <ChefCard></ChefCard>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;