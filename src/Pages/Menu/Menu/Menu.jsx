import { Helmet } from "react-helmet-async";
import MenuCover from "../../../Shared/MenuCover/MenuCover";
import bgImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import PopularItemCard from "../../../Shared/PopularItemCard/PopularItemCard";
import desert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";

const Menu = () => {
  const {menu} = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>

      {/* Section 1 */}

      <MenuCover
        img={bgImg}
        title="OUR MENU"
        content="Would you like to try a dish?"
      ></MenuCover>
      <div className="container mx-auto px-4">
        <SectionTitle
          time={`---Don't miss---`}
          title={`TODAY'S OFFER`}
        ></SectionTitle>
        <MenuItems use={true} items={offers}></MenuItems>
      </div>

      {/* section 2  desert*/}

      <MenuCover
        img={desert}
        title="DESSERTS"
        content="Deserts are dry, vast lands with extreme temperatures and little rainfall. Despite their harsh conditions, they are home to unique plants, animals, and stunning natural beauty."
      ></MenuCover>
      <div className="container mx-auto px-4">
        <MenuItems items={dessert}></MenuItems>
      </div>
      {/* section 3  pizza*/}

      <MenuCover
        img={pizza}
        title="PIZZA"
        content="Craving something cheesy? Grab our Buy 1 Get 1 Free pizza offer – available all week!
Freshly baked, loaded with toppings, and made with love."
      ></MenuCover>
      <div className="container mx-auto px-4">
        <MenuItems items={pizzas}></MenuItems>
      </div>
      {/* section 4  salad*/}

      <MenuCover
        img={salad}
        title="SALAD"
        content="Enjoy our crisp, garden-fresh salads made with hand-picked ingredients and delicious dressings.
Perfect for a light, healthy meal – starting at just ৳120!"
      ></MenuCover>
      <div className="container mx-auto px-4">
        <MenuItems items={salads}></MenuItems>
      </div>
      {/* section 2  soup*/}

      <MenuCover
        img={soup}
        title="SOUP"
        content="Warm up with our hearty, homemade soups – full of flavor and comfort in every spoonful.
Try any soup for just ৳99 this week only!"
      ></MenuCover>
      <div className="container mx-auto px-4">
        <MenuItems items={soups}></MenuItems>
      </div>
    </div>
  );
};

export default Menu;
