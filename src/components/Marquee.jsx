import React from "react";

const Marquee = () => {
  const content = [
    { id: 1, image: "/images/heart.svg", text: "•  come with your babe  •" },
    { id: 2, image: "/images/shine.svg", text: "•  come with your bff  •" },
    { id: 3, image: "/images/rainbow.svg", text: "•  come with your bro  •" },
    { id: 4, image: "/images/Music.svg", text: "•  come with your boo  •" },
    {
      id: 5,
      image: "/images/camera.svg",
      text: "• come with your sneaky link •",
    },
    {
      id: 6,
      image: "/images/lightening.svg",
      text: "• come with your crush •",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#06AC76] py-4 border-y-[3px] border-[#01121A]">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {content.map((item) => (
          <div key={item.id} className="flex items-center gap-8 px-4">
            <img src={item.image} alt="Image" className="h-8 w-8" />
            <p className="text-xl font-geist font-semibold uppercase">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
