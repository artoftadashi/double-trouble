export default function Header() {
  const elipse = "w-[6px] h-[6px] rounded-full bg-[#01121A]";
  return (
    <div className="flex justify-between px-12 py-12 uppercase font-geist ">
      <div className="w-fit relative flex justify-center">
        <div className="bg-[#FFFAEC] flex justify-center items-center rounded-md px-4 py-2 border-[3px] border-[#01121A] gap-3 shadow-md ">
          <div className={elipse}></div>
          <p className="font-semibold text-lg">11th november, 2024</p>
          <div className={elipse}></div>
        </div>
        <img
          src="/images/hanger.svg"
          className="absolute w-[80px] h-[35px] top-[-32px]"
        />
      </div>
      <ul className="flex gap-10 items-center uppercase font-semibold text-lg">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">activities</a>
        </li>
        <li>
          <a href="#">faqs</a>
        </li>
      </ul>
    </div>
  );
}
