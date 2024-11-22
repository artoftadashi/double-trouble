export default function Marquee() {
  return (
    <div className="relative flex items-center overflow-x-hidden bg-[#06AC76] text-[#01121A] border-t-[3px] border-b-[3px] border-[#01121A] text-lg">
      <div className="py-4 animate-marquee whitespace-nowrap font-geist font-bold uppercase flex items-center ">
        <span className=" mx-4  ">
          <img src="/images/heart.svg" />
        </span>
        <span className=" mx-4  ">
          <span className="text-[#01121A] mx-4">•</span> {"</"}Let's Work
          Together!{">"}
          <span className="text-[#01121A] mx-4">•</span>
        </span>
        <span className="  mx-4 ">
          <img src="/images/shine.svg" />
        </span>
        <span className=" mx-4  ">
          <span className="text-[#01121A] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
          <span className="text-[#01121A] mx-4">•</span>
        </span>
        <span className="">
          <img src="/images/rainbow.svg" />
        </span>
      </div>

      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap font-geist font-bold uppercase flex items-center">
        <span className=" mx-4  ">
          <span className="text-[#01121A] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
          <span className="text-[#01121A] mx-4">•</span>
        </span>
        <span className="mx-4  ">
          <img src="/images/Music.svg" />
        </span>
        <span className="mx-4  ">
          <span className="text-[#01121A] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
          <span className="text-[#01121A] mx-4">•</span>
        </span>
        <span className=" mx-4 ">
          <img src="/images/camera.svg" />
        </span>
        <span className="">
          <span className="text-[#01121A] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
          <span className="text-[#01121A] mx-4">•</span>
        </span>
      </div>
    </div>
  );
}
