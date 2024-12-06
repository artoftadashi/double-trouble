import { useState, useEffect } from "react";

export default function Header() {
  const elipse = "w-[6px] h-[6px] rounded-full bg-[#01121A]";

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };
  const handleClose = () => {
    setIsClosing(true); // Start the reverse animation
    setTimeout(() => {
      setIsOpen(false); // Close the menu after the animation
      setIsClosing(false); // Reset the closing state
    }, 500); // Match this to the duration of your reverse animation
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-between px-6 py-12 lg:p-12 uppercase font-geist ">
      <div className="w-fit relative flex justify-center">
        <div className="bg-[#FFFAEC] w-fit flex justify-center items-center rounded-md px-4 py-2 border-[3px] border-[#01121A] gap-3 shadow-md ">
          <div className={elipse}></div>
          <p className="font-semibold text-[.8rem] lg:text-lg">
            11th november, 2024
          </p>
          <div className={elipse}></div>
        </div>
        <img
          src="/images/hanger.svg"
          className="absolute w-[50px] lg:w-[80px] h-[35px] top-[-28px] lg:top-[-32px]"
        />
      </div>
      <ul className="lg:flex gap-10 items-center uppercase font-semibold text-lg hidden ">
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

      {/* drop down menu button */}

      <button
        onClick={handleOpen}
        className="w-[3rem] h-[3rem] border-[3px] border-[#01121A] rounded-full lg:hidden flex flex-col gap-1 justify-center items-center bg-[#FFFAEC] z-[100]"
      >
        <div className="w-5 h-[.2rem] bg-[#01121A] rounded-3xl"></div>
        <div className="w-5 h-[.2rem] bg-[#01121A] rounded-3xl"></div>
      </button>
      {isOpen && (
        <div className="animate-fade-down animate-duration-500 absolute top-0 left-0 h-[100vh] w-[100vw] lg:hidden bg-[#FFFAEC] backdrop-blur-md z-[100] flex flex-col justify-center items-center gap-20 overflow-y-hidden  ">
          <ul className="text-center text-4xl font-geist flex flex-col gap-5">
            <li className="animate-fade-right animate-delay-500">
              <a href="#">about</a>
            </li>
            <li className="animate-fade-right animate-delay-[600ms]">
              <a href="#">activities</a>
            </li>
            <li className="animate-fade-right animate-delay-[700ms]">
              <a href="#">faqs</a>
            </li>
          </ul>
          <button
            onClick={handleClose}
            className="w-[3rem] h-[3rem] border-[3px] border-[#01121A] rounded-full lg:hidden flex flex-col gap-1 justify-center items-center bg-[#FFFAEC] z-[100]"
          >
            <div className="absolute rotate-45 w-5 h-[.2rem] bg-[#01121A] rounded-3xl"></div>
            <div className="absolute -rotate-45 w-5 h-[.2rem] bg-[#01121A] rounded-3xl"></div>
          </button>
        </div>
      )}
    </div>
  );
}
