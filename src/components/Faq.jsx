export default function Faq() {
  const FaqItems = [
    { id: 1, icon: "images/faq/icon1.svg", text: "Are food and drinks free?" },
    { id: 2, icon: "images/faq/icon2.svg", text: "Who can attend?" },
    { id: 3, icon: "images/faq/icon3.svg", text: "How do i become a sponsor?" },
    { id: 4, icon: "images/faq/icon4.svg", text: "How do i become a vendor?" },
    { id: 5, icon: "images/faq/icon5.svg", text: "When and where is it?" },
  ];

  return (
    <section className=" relative bg-[url('/images/faq/BG.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row gap-16 lg:gap-24 p-12 lg:p-32">
      <h1 className=" text-xl lg:text-5xl font-semibold font-serif text-center lg:text-left lg:w-[50vw]">
        We've Been Asked Frequently.
      </h1>
      <ul className=" flex flex-col gap-2 lg:gap-8 lg:w-[50vw]">
        {FaqItems.map((content) => (
          <li key={content.id}>
            <div className="flex justify-between items-center min-w-[40vw] border-[3px] border-[#01121A] rounded-3xl p-2 lg:p-6">
              <div className=" flex gap-8 justify-center items-center">
                <img src={content.icon} className="w-6" />
                <h3 className=" text-md lg:text-3xl font-serif">
                  {content.text}
                </h3>
              </div>

              <button>
                <div className=" scale-[.5] lg:scale-[1] border-[3px] w-[2rem] h-[2rem] border-[#01121A] rounded-full flex justify-center items-center">
                  <img src="images/faq/plus.svg" />
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="h-[250px] lg:hidden"></div>
      <img src="/images/faq/tickets.png" className="absolute left-0 bottom-0" />
    </section>
  );
}
