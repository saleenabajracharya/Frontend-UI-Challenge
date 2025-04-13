import { Helmet } from "react-helmet";

const FeatureGrid = () => {
  const features = [
    {
      title: "Access up to $100,000",
      desc: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
    },
    {
      title: "You choose invoices to get paid",
      desc: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
    },
    {
      title: "Simple pricing",
      desc: "Only pay for what you use, if you don’t need us, there are no costs.",
    },
    {
      title: "Click and quick",
      desc: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
    },
    {
      title: "Flexible",
      desc: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
    },
    {
      title: "Invest in your business",
      desc: "Only pay for what you use, if you don’t need us, there are no costs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Logoipsum</title>
        <meta name="description" content="This is EB Pearl task." />
      </Helmet>
      <section className="bg-white py-16 px-6 md:px-12 my-14 text-center">
        <h2 className="text-5xl font-bold text-[var(--text-color)] mb-3 leading-[56px] ">
          Outsource payment collection
        </h2>
        <p className="text-[var(--content-color)] max-w-2xl mx-auto mb-10">
          Faster and flexible access to cash flow from one or all your invoices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-30 gap-x-8 max-w-6xl mx-auto mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={` mt-4 flex flex-col items-center text-center px-4 card`}
            >
              <img
                src="/images/gridLogo.png"
                alt="gridImg"
                className="mx-auto my-7"
              />

              <h3 className="font-semibold text-2xl text-[var(--text-color)] mb-4 leading-[32px] card-title">
                {feature.title}
              </h3>
              <p className="text-[var(--content-color)] text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureGrid;
