import Button from "./Button";

export default function Hero() {
  return (
    <section className=" pb-32 pt-8 relative">
      <div className="flex flex-col justify-center items-center gap-12 lg:gap-8 z-20">
        <img
          alt="zikoko x smirnoff"
          src="/images/zikoko-x-smirmoff.svg"
          className="z-20 w-[50%] lg:w-[60%]"
        />
        <img
          alt="double trouble"
          src="/images/logo.png"
          className="z-20 w-[90vw] lg:w-[60vw]"
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:pt-16">
          <Button text="buy your ticket" />
          <Button text="become a sponsor" />
        </div>
      </div>
      {/* hero section images */}
      <img
        alt="event images"
        src="images/hero-img1.png"
        className="w-[30vw] absolute top-[-3rem] lg:top-[4rem] left-[-2rem] z-50 lg:z-[5] "
      />
      <img
        alt="event images"
        src="images/hero-img2.png"
        className="w-[30vw] absolute bottom-[1rem] right-[-2rem] lg:bottom-[4rem] lg:right-[3rem] z-[5]"
      />
      {/* cloud images */}
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className=" w-[80vw] lg:w-[45vw] absolute left-[-4rem] top-[-1rem] lg:left-[6rem] lg:top-[-5rem] z-10"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className=" w-[80vw] lg:w-[45vw] absolute right-[-10rem] top-[11rem] lg:right-[-10rem] lg:top-[6rem]"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className=" w-[80vw] lg:w-[45vw] absolute bottom-[4rem] left-[-4rem] lg:bottom-[7rem] lg:left-[-7rem]"
      />
      <img
        alt="cloud"
        src="/images/cloud.svg"
        className=" w-[80vw] lg:w-[45vw] absolute bottom-0 right-[-14rem] lg:bottom-[3rem] lg:right-[-28rem]"
      />
    </section>
  );
}
