export default function Contact() {
  return (
    <section className="bg-[#01121A] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 py-32">
        <img
          alt="double trouble"
          src="/images/logo.png"
          className=" w-[60vw] lg:w-[40vw]"
        />
        <p className="text-white font-geist text-xs lg:text-sm">
          @2024 Double trouble by Zikoko. All rights reserved
        </p>
        <ul className="flex justify-center items-center gap-6">
          <li>
            <a href="#">
              <img src="/images/twitter.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/facebook.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/Instagram.svg" />
            </a>
          </li>
        </ul>
      </div>
      <img alt="stickers" src="images/Stickers.png" className="w-full" />
    </section>
  );
}
