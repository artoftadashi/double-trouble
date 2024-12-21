import Button from "./Button";

export default function SneakPeak() {
  const images = [
    {
      id: 1,
      image: "images/sneak-peak/img1.png",
      style:
        "relative w-[70vw] lg:absolute lg:w-[35vw] lg:left-[8vw] lg:top-[5vh]",
      divStyle: "w-full h-fit flex justify-start lg:block lg:w-fit",
    },
    {
      id: 2,
      image: "images/sneak-peak/img2.png",
      style:
        " relative w-[70vw] lg:absolute lg:w-[35vw] lg:right-[5vw] lg:top-[20vh] ",
      divStyle: "w-full h-fit flex justify-end lg:block lg:w-fit",
    },
    {
      id: 3,
      image: "images/sneak-peak/img3.png",
      style:
        " relative w-[70vw] lg:absolute lg:w-[35vw] lg:left-[25vw] lg:bottom-[90vh] rotate-[30deg] lg:rotate-0",
      divStyle: "w-full h-fit flex justify-start lg:block lg:w-fit",
    },
    {
      id: 4,
      image: "images/sneak-peak/img4.png",
      style:
        " relative w-[70vw] lg:absolute lg:w-[35vw] lg:right-0 lg:bottom-[20vh] -rotate-[20deg] lg:rotate-0 ",
      divStyle: "w-full h-fit flex justify-end lg:block lg:w-fit",
    },
    {
      id: 5,
      image: "images/sneak-peak/img5.png",
      style:
        " relative w-[70vw] lg:absolute lg:w-[35vw] lg:left-[5vw] lg:bottom-[5vh] ",
      divStyle: "w-full h-fit flex justify-start lg:block lg:w-fit",
    },
  ];
  return (
    <section className="bg-[url('images/sneak-peak/BG.png')] bg-[#F7B5D2] bg-cover bg-no-repeat">
      <div className="flex flex-col lg:flex-row mx-auto justify-center items-center py-20">
        <h1 className=" text-2xl lg:text-5xl font-semibold text-center">
          Sneak peak of Last Year's Duos
        </h1>
        <img
          className="w-16"
          src="images/sneak-peak/peace-sticker.png"
          alt="peack sticker"
        />
      </div>
      <div className="lg:h-[250vh] relative flex lg:flex-row flex-col justify-center items-center py-12">
        {images.map((image) => (
          <div className={image.divStyle} key={image.id}>
            <img className={image.style} src={image.image} />
          </div>
        ))}
      </div>
      <div className="pb-20 flex mx-auto justify-center">
        <Button text="buy your ticket" />
      </div>
    </section>
  );
}
