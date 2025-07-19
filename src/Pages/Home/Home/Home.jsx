import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
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