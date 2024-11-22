export default function Button({ text, ...props }) {
  return (
    <div className="flex justify-center w-fit relative hover:scale-[1.05] z-30  duration-300">
      <button
        className="min-w-[15rem] px-4 py-3 bg-[#F0664A] text-lg text-[#FFFAEC] border-[3px] border-[#01121A] rounded-md font-geist font-semibold uppercase z-20"
        {...props}
      >
        {text}
      </button>
      <div className="absolute w-[13.5rem] h-[2.3rem] rounded-md z-[10] top-[2rem] bg-[#06AC76] bg-[url('/images/bg-1.png')] border-[3px] border-[#01121A] bg-top bg-no-repeat"></div>
    </div>
  );
}
