import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PROPS {
  items: any;
  activeItemId: number;
}

export default function Carousel({ items, activeItemId }: PROPS) {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const limit = items.length - 1;
    const intervalId = setInterval(() => {
      setActiveItem((c) => (c === limit ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const CarouselImage = () => (
    <div
    // style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
    // data-aos="fade-left"
    // data-aos-easing="linear"
    // data-aos-duration="1500"
    >
      <Image
        src={items[activeItem]}
        alt="active image"
        className="h-full md:h-[400px] w-full object-cover rounded-b-[100px]"
        height={300}
        width={400}
      />
    </div>
  );

  return (
    <div>
      <section className="w-full">
        <CarouselImage />
      </section>
      <section className="flex items-center justify-between">
        <div className="rounded-full w-[100px] mx-auto bg-gray-500 shadow -mt-16 flex space-x-2 py-3 justify-center">
          {items.map((x: any, i: number) => (
            <div key={i}>
              <div
                className={`${
                  activeItem === i ? "bg-blue-600" : "bg-gray-200"
                } h-2 w-2 cursor-pointer rounded-full`}
                onClick={() => setActiveItem(i)}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
