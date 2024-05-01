import React, { useState } from 'react';
import {Tabs, Tab, Card, CardBody, CardHeader, ProviderContext} from "@nextui-org/react";
import ItemShop from './ItemShop';


const FilterButton = () => {
  // list products with id, image, name, description, label & price
  let products = [
    {
      id: "shirts",
      label: "A Hug",
      category: "All",
      description: "male stylish shirt",
      price: "250",
      image: "https://cdn.shopify.com/s/files/1/0501/7196/0994/products/1_1200x1200.jpg?v=1636086424",
    },
    {
      id: "shirts",
      label: "A Hug",
      category: "Men",
      description: "male stylish shirt",
      price: "250",
      image: "https://cdn.shopify.com/s/files/1/0501/7196/0994/products/1_1200x1200.jpg?v=1636086424",
    },
    {
      id: "shirts",
      label: "A Hand",
      category: "Women",
      description: "male stylish shirt",
      price: "250",
      image: "https://cdn.shopify.com/s/files/1/0501/7196/0994/products/1_1200x1200.jpg?v=1636086424",
    },
    {
      id: "shirts",
      label: "A Vertical Liner",
      category: "Kids",
      description: "male stylish shirt",
      price: "250",
      image: "https://cdn.shopify.com/s/files/1/0501/7196/0994/products/1_1200x1200.jpg?v=1636086424",
    },
    {
      id: "shirts",
      label: "A Hug",
      category: "Accessories",
      description: "male stylish shirt",
      price: "250",
      image: "https://cdn.shopify.com/s/files/1/0501/7196/0994/products/1_1200x1200.jpg?v=1636086424",
    },
  ];
  return (
    <>
     <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={products}>
        {(item) => (
          <Tab key={item.id} title={item.category}>
            <Card>
              <CardBody>
                <ItemShop />
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
    </>
  );
}

export default FilterButton;
