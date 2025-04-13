import { LiaLinkedinIn } from "react-icons/lia";
import { VscMail } from "react-icons/vsc";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F1F0FF] text-[var(--content-color)] py-12 px-4 md:px-20 mt-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Left Section - Paragraph and Icons */}
          <div
            className="ml-5 mr-5 lg:ml-20 lg:mr-50
    md:ml-10 md:mr-10 "
          >
            <p className="mb-6 content">
              Curabitur consequat, purus a scelerisque sagittis, nulla metus
              tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse
              potenti. Aenean a justo vel sapien pellentesque tincidunt. Sed
              luctus, elit ac interdum convallis, ligula libero egestas orci, at
              auctor felis ligula nec odio.
            </p>

            <div className="flex gap-4">
              <div className="bg-gradient-to-r from-[#DF49FB] to-[#4532FC]  rounded text-white text-xl">
                <LiaLinkedinIn />
              </div>
              <div className="bg-gradient-to-r from-[#DF49FB] to-[#4532FC]  rounded text-white text-xl">
                <VscMail />
              </div>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 ">
            <div>
              <h3 className="font-semibold mt-10 sm:mt-0 md:mt-0 mb-6">
                Products
              </h3>
              <ul className="space-y-5">
                <li>Payments</li>
                <li>Invoice Factoring</li>
                <li>Invoice Finance</li>
                <li>Supplier Finance</li>
                <li>Customer Finance</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-6 mt-10 md:mt-0 sm:mt-0">
                Company
              </h3>
              <ul className="space-y-5">
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="ml-md-30">
              <h3 className="font-semibold mt-10 sm:mt-0 md:mt-0 mb-6 ">
                Resources
              </h3>
              <ul className="space-y-5">
                <li>Frequently asked questions</li>
                <li>Knowledge base</li>
                <li>API documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-500 ms-20 lg:ms-30 md:ms-9">
          <div className="flex space-x-8 mb-2 md:mb-0">
            <a href="#">Privacy policy</a>
            <a href="#">Contact us</a>
          </div>
          <div className="flex space-x-8 me-0 md:me-25 lg:me-25">
            <a href="#">Site map</a>
            <a href="#">@ebpearls</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
