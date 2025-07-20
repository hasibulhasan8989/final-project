import React, { useState } from "react";
import MenuCover from "../../../Shared/MenuCover/MenuCover";
import img from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";

import TabComponent from "../TabComponent/TabComponent";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert","drinks"];

  const indexNo = categories.indexOf(category);
  console.log(indexNo)
  const [tabIndex, setTabIndex] = useState(indexNo);
  const items = useMenu();

  const drinks = items.filter((item) => item.category === "drinks");
  const pizzas = items.filter((item) => item.category === "pizza");
  const soups = items.filter((item) => item.category === "soup");
  const salads = items.filter((item) => item.category === "salad");
  const deserts = items.filter((item) => item.category === "dessert");

  return (
    <div>
      <MenuCover
        img={img}
        title={"OUR SHOP"}
        content={"Would you like to try a dish?"}
      ></MenuCover>

      {/* Tab Related work */}
      <div className="container mx-auto mt-28 px-4 mb-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center">
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERT</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
          </div>

          <TabPanel>
            <TabComponent items={salads}></TabComponent>
          </TabPanel>
          <TabPanel>
            <TabComponent items={pizzas}></TabComponent>
          </TabPanel>
          <TabPanel>
            <TabComponent items={soups}></TabComponent>
          </TabPanel>
          <TabPanel>
            <TabComponent items={deserts}></TabComponent>
          </TabPanel>
          <TabPanel>
            <TabComponent items={drinks}></TabComponent>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
