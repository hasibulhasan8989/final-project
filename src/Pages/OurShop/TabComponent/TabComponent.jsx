import React from "react";
import ItemsCard from "../../../Shared/PopularItemCard/ItemsCard";

const TabComponent = ({items}) => {
  return (
    <div className="flex flex-wrap md:justify-start justify-center  gap-8  mt-10">
      {items.map((item) => (
        <ItemsCard item={item} key={item._id}></ItemsCard>
      ))}
    </div>
  );
};

export default TabComponent;
