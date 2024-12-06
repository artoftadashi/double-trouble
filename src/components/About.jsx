export default function About() {
  const aboutImages = [
    { id: 1, image: "/images/about-images/abt-1.png", bgcolor: "#F0664A" },
    { id: 2, image: "/images/about-images/abt-2.png", bgcolor: "#FFEE00" },
    { id: 3, image: "/images/about-images/abt-3.png", bgcolor: "#F49AC1" },
    { id: 4, image: "/images/about-images/abt-4.png", bgcolor: "#FFF4D0" },
    { id: 5, image: "/images/about-images/abt-5.png", bgcolor: "#C395F4" },
    { id: 6, image: "/images/about-images/abt-6.png", bgcolor: "#9DDCF9" },
  ];

  return (
    <section id="about" className="flex ">
      <div className="w-[40vw] grid grid-cols-2">
        {aboutImages.map((content) => (
          <div
            key={content.id}
            style={{ backgroundColor: content.bgcolor }}
            className="flex justify-center items-center p-4 border-r-[3px] border-b-[3px] border-[#01121A]"
          >
            <img src={content.image} />
          </div>
        ))}
      </div>
      <div className="w-[60vw] bg-white border-b-[3px] border-[#01121A] flex justify-center py-24 px-24">
        <div className="flex flex-col gap-12 text-left justify-start">
          <h1 className="text-6xl font-semibold w-4/6">
            What’s better than one? Two!
          </h1>
          <p className="text-[24px] font-geist">
            Whether it's your partner, best friend, or sibling, Double Trouble
            is the perfect event to team up and have fun! With exciting
            activities and a chance to discover new dynamics, it's an experience
            you won't forget.
          </p>
        </div>
      </div>
    </section>
  );
}
