import { Helmet } from "react-helmet";

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Logoipsum</title>
        <meta name="description" content="This is EB Pearl task." />
      </Helmet>
      <section className="bg-[var(--text-color)] h-[521px] md:h-[521px] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div
          className={`md:w-1/2 text-center md:text-left ml-0 md:ml-14 lg:ml-20 mt-20 sm:mt-0 hero-section-text animate__animated animate__fadeInDown`}
        >
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold  mb-4 ">
            Get instant cash
            <br />
            flow with invoice
            <br />
            factoring
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Why wait? Get same day funding and a faster way to access cash flow.
          </p>
          <button className="bg-white text-[var(--primary-color)] px-6 py-2 rounded-full font-medium hover:bg-[#f0f0ff] transition animate__animated animate__bounce animate__delay-1s">
            Get started
          </button>

          <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
            <div className="w-4 h-4 rounded-full bg-[#DF49FC]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D980]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D980] opacity-80"></div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative animate__animated animate__slideInRight">
          <img
            src="/images/Herosection_image.png"
            alt="Herosection-image"
            className="hidden sm:block hero-section"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
