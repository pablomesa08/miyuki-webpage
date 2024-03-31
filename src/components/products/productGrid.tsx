import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function ProductGrid() {
  const list = [
    {
      title: "Orange",
      img: "https://source.unsplash.com/random/200x200",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://source.unsplash.com/random/200x200",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://source.unsplash.com/random/200x200",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://source.unsplash.com/random/200x200",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://source.unsplash.com/random/200x200",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://source.unsplash.com/random/200x200",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://source.unsplash.com/random/200x200",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://source.unsplash.com/random/200x200",
      price: "$12.20",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="object-cover h-[200px] max-w-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className=" text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
