import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    HOME | Bistro Boss
                </title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <FromOurMenu></FromOurMenu>
           <ChefRecommend></ChefRecommend>
           <OurMenu></OurMenu>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;