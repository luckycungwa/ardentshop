import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import FilterButton from "./FilterButton";

const ItemShop = () => {
  const list = [
    {
      name: "A Hug",
      img: "./Samples/aHug (front).jpg",
      price: "279.99",
    },
    {
      name: "A Hug",
      img: "./Samples/aHug front.jpg",
      price: "279.99",
    },
    {
      name: "Milck",
      img: "./Samples/Milck (front).jpg",
      price: "279.99",
    },
    {
      name: "Matcha Lite",
      img: "./Samples/Matcha Lite (front).jpg",
      price: "279.99",
    },
    {
      name: "Premium S1",
      img: "./Samples/Premium S1 Grey (front).jpg",
      price: "279.99",
    },
    {
      name: "Red Devil ",
      img: "./Samples/Red Devil White (front).jpg",
      price: "279.99",
    },
    {
      name: "Matcha ",
      img: "./Samples/Matcha front.jpg",
      price: "279.99",
    },
    {
      name: "A Statement ",
      img: "./Samples/Statement front.jpg",
      price: "279.99",
    },
    
  ];

  return (
    <>
    {/* Filter category component*/}

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className=" max-w-[200px] max-h-[300px] "
          >
            <CardBody className="overflow-visible p-0">
              <Image
                // shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-contain h-[180px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small flex-col justify-between !items-start">
              <b>{item.name}</b>
              
              <p className="text-default-500 py-1">R{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ItemShop;
