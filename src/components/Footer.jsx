import { Link } from "react-router-dom";
import { CompanyName, Facebook, LinkedIn, Twitter, Youtube } from "../utils";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-10 overflow-hidden bg-white border-t-2 border-t-black">
      <div className="relative z-10 px-4 mx-auto max-w-[95%]">
        <div className="flex flex-wrap mb-3 -m-6 mb:flex-col gap-y-5">
          <div className="w-1/5 p-6 lg:p-4 md:w-1/2 mb:w-full lg:w-[26.66%]">
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center mb-4 mb:justify-center">
                <img
                  className="h-12 my-auto"
                  src={CompanyName}
                  alt="Makerble"
                />
              </div>
              <ul className="text-gray-600 mb:text-center">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Privacy & Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/5 p-6 lg:p-4 md:w-1/2 mb:w-full lg:w-[26.66%]">
            <div className="h-full">
              <h3 className="mb-4 text-xl font-semibold uppercase text-rock tracking-px mb:text-center">
                ORGANISATIONS
              </h3>
              <ul className="text-gray-600 mb:text-center">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Control Panel
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Discover the Marketplace
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Create Organisation Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/5 p-6 lg:p-4 md:w-1/2 mb:w-full lg:w-[26.66%]">
            <div className="h-full">
              <h3 className="mb-4 text-xl font-semibold uppercase text-rock tracking-px mb:text-center">
                YOUR ACCOUNT
              </h3>
              <ul className="text-gray-600 mb:text-center">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Library
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Profile
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/6 p-6 lg:p-4 md:w-1/2 mb:w-full lg:w-1/5">
            <div className="h-full">
              <h3 className="mb-4 text-xl font-semibold uppercase text-rock tracking-px mb:text-center">
                EXPLORE
              </h3>
              <ul className="text-gray-600 mb:text-center">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Metrics
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Networks
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Strategies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Studies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Surveys
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Tips
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-900"
                    to="/"
                  >
                    Vouchers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/5 p-6 lg:p-4 md:w-1/2 mb:w-full lg:w-1/2">
            <h3 className="mb-4 text-xl font-semibold uppercase text-rock tracking-px mb:text-center">
              FOLLOW THE MAKEABLE STORY
            </h3>
            <div className="flex justify-between gap-4">
              <a href="#" className="w-10 h-10">
                <img src={LinkedIn} alt="Linked In" />
              </a>
              <a href="#" className="w-10 h-10">
                <img src={Youtube} alt="Linked In" />
              </a>
              <a href="#" className="w-10 h-10">
                <img src={Facebook} alt="Linked In" />
              </a>
              <a href="#" className="w-10 h-10">
                <img src={Twitter} alt="Linked In" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-48 mb:flex-col mb:items-start sm:gap-5 sm:justify-between lg:-mx-3">
          <div className="space-y-2 text-sm text-gray-600">
            <p>Contact Us:</p>
            <p>
              <Mail width={16} height={16} /> contact@makerble.com
            </p>
            <p>© Makerble 2023</p>
          </div>
          <p className="text-sm text-gray-600">
            <Phone fill="gray" stroke="0" width={16} height={16} /> 020 8123
            6253
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
