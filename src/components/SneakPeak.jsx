import Button from "./Button";

export default function SneakPeak() {
  const images = [
    {
      id: 1,
      image: "images/sneak-peak/img1.png",
      style: " absolute w-[35vw] left-[8vw] top-[5vh]",
    },
    {
      id: 2,
      image: "images/sneak-peak/img2.png",
      style: " absolute w-[35vw] right-[5vw] top-[20vh] ",
    },
    {
      id: 3,
      image: "images/sneak-peak/img3.png",
      style: " absolute w-[35vw] left-[25vw]",
    },
    {
      id: 4,
      image: "images/sneak-peak/img4.png",
      style: " absolute w-[35vw] right-0 bottom-[20vh] ",
    },
    {
      id: 5,
      image: "images/sneak-peak/img5.png",
      style: " absolute w-[35vw] left-[5vw] bottom-[5vh] ",
    },
  ];
  return (
    <section className="bg-[url('images/sneak-peak/BG.png')] bg-[#F7B5D2] bg-cover bg-no-repeat">
      <div className="flex mx-auto justify-center items-center py-20">
        <h1 className=" text-5xl font-semibold">
          Sneak peak of Last Year's Duos
        </h1>
        <img
          className="w-16"
          src="images/sneak-peak/peace-sticker.png"
          alt="peack sticker"
        />
      </div>
      <div className="h-[250vh] relative flex justify-center items-center">
        {images.map((image) => (
          <img className={image.style} src={image.image} key={image.id} />
        ))}
      </div>
      <div className="pb-20 flex mx-auto justify-center">
        <Button text="buy your ticket" />
      </div>
    </section>
  );
}
