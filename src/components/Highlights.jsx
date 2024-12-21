const Highlights = () => {
  const content = [
    {
      id: 1,
      image: "/images/highlight-images/game.png",
      heading: "Duo Games",
      paragraph: "Compete with other duos in various games and win prizes.",
    },
    {
      id: 2,
      image: "/images/highlight-images/camera.png",
      heading: "Photobooth",
      paragraph:
        "Come prepared with your poses to take pictures and make memories.",
    },
    {
      id: 3,
      image: "/images/highlight-images/Karaoke.png",
      heading: "Karaoke",
      paragraph: "Get ready to channel your inner Beyonce.",
    },
    {
      id: 4,
      image: "/images/highlight-images/tattos.png",
      heading: "Tattos",
      paragraph: "Always wanted to get matching tattoos? This is your chance.",
    },
    {
      id: 5,
      image: "/images/highlight-images/hand.png",
      heading: "Hand casting",
      paragraph:
        "Molding sculptures can come in handy in bonding on a new level. ",
    },
  ];

  return (
    <section className="relative p-12 lg:p-24 flex flex-col  justify-center items-center gap-12 bg-[#FFF4D0]">
      <h1 className=" text-4xl lg:text-6xl font-semibold mb-24">
        Activity Highlights
      </h1>
      <ul className="flex flex-wrap gap-16 justify-center">
        {content.map((data) => (
          <li key={data.id}>
            <div className="relative border-[3px] border-[#01121A] min-h-[40vh] lg:min-h-[60vh] lg:w-[25vw] w-[75vw] p-4 flex gap-2 flex-col items-center bg-white mb-8">
              <div className="w-full h-[20vh] lg:h-[36vh] bg-[#C395F4] border-[3px] border-[#01121A] flex justify-center items-center">
                <img src={data.image} className="w-[40vw] lg:w-[15vw]" />
              </div>
              <h1 className="text-3xl uppercase font-semibold">
                {data.heading}
              </h1>
              <p className="text-center">{data.paragraph}</p>
              <img
                src="/images/hanger.svg"
                className="absolute w-[100px] h-[50px] top-[-47px] "
              />
            </div>
          </li>
        ))}
      </ul>
      <img
        src="/images/highlight-images/sticker1.png"
        className="absolute z-10 right-[-1px] w-[30vw] lg:w-[25vw] top-[-10vh] lg:top-[-26vh]"
      />
      <img
        src="/images/highlight-images/sticker2.png"
        className="absolute z-10 left-[-1px] w-[30vw] lg:w-[25vw] bottom-[-20vh] lg:bottom-[-50vh]"
      />
    </section>
  );
};

export default Highlights;
