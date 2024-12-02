import Button from "./Button";

export default function Sponsors() {
  const images = [
    { id: 1, image: "/images/sponsors/flutterwave.svg" },
    { id: 2, image: "/images/sponsors/beauty-hut.svg" },
    { id: 3, image: "/images/sponsors/duck.svg" },
    { id: 4, image: "/images/sponsors/dodo.svg" },
    { id: 5, image: "/images/sponsors/aquafina.svg" },
    { id: 6, image: "/images/sponsors/hansnrene.svg" },
  ];

  return (
    <section className="bg-[#9ddcf9] flex flex-col justify-center items-center py-32 gap-32">
      <h1 className=" text-5xl font-semibold text-center">
        Join Our League Of Sponsors
      </h1>
      <div className="flex flex-col gap-32 justify-center items-center">
        <img className="w-[45vw]" src="/images/sponsors/smirnoff.svg" alt="" />
        <ul className="grid grid-cols-3 gap-8">
          {images.map((content) => (
            <li key={content.id}>
              <img src={content.image} className="w-[30vw]" />
            </li>
          ))}
        </ul>
        <Button text="become a sponsor" />
      </div>
    </section>
  );
}
