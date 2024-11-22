import Button from "./Button";

export default function Hero() {
  return (
    <section className=" pb-32 pt-8 relative">
      <div className="flex flex-col justify-center items-center gap-8 z-20">
        <img
          alt="zikoko x smirnoff"
          src="/images/zikoko-x-smirmoff.svg"
          className="z-20"
        />
        <img
          alt="double trouble"
          src="/images/double-trouble.svg"
          className="z-20"
        />
        <div className="flex gap-4 pt-16">
          <Button text="buy your ticket" />
          <Button text="become a sponsor" />
        </div>
      </div>
      {/* hero section images */}
      <img
        alt="event images"
        src="images/hero-img1.png"
        className="absolute top-[4rem] left-[-1rem] z-[5] "
      />
      <img
        alt="event images"
        src="images/hero-img2.png"
        className="absolute bottom-[4rem] right-[3rem] z-[5]"
      />
      {/* cloud images */}
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className="absolute left-[6rem] top-[-5rem] z-10"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className="absolute right-[-10rem] top-[6rem]"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className="absolute w-[762px] bottom-[7rem] left-[-7rem]"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className="absolute bottom-[3rem] right-[-28rem]"
      />
    </section>
  );
}
