import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  List,
  Mail,
  Plus,
  Search,
  Star,
  Zap,
} from "lucide-react";
import { Logo } from "../utils";
import { NavLink } from "react-router-dom";

const Header = () => {
  function toggleMenu() {
    const menuBtn = document.getElementById("header-nav-toggle");
    const mobileMenu = document.getElementById("header-nav");
    const MenuDiv = document.querySelector("#header-nav>nav");

    menuBtn.classList.toggle("menu-is-open"),
      mobileMenu.classList.toggle("menu-is-open"),
      MenuDiv.classList.toggle("hidden"),
      "true" === menuBtn.getAttribute("aria-expanded")
        ? menuBtn.setAttribute("aria-expanded", "false")
        : menuBtn.setAttribute("aria-expanded", "true");
  }
  return (
    <header className="fixed top-0 left-0 z-50 w-screen bg-white">
      <div className="flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <div
            style={{
              width:
                "clamp(4rem, -1.5714285714285712rem + 8.571428571428571vw, 7rem)",
            }}
            className="flex justify-center"
          >
            <NavLink to="/">
              <img
                className="w-12 h-12 my-auto aspect-square"
                src={Logo}
                alt="Makerble Logo"
              />
            </NavLink>
          </div>

          <nav className="lg:hidden">
            <ul className="flex h-[60px] border-l-2 [&>li]:border-r-2 [&>li>a]:px-3 [&>li>a]:py-[18px] [&>li>a]:text-nowrap [&>li>a]:text-black [&>li>a]:font-medium hover:[&>li>a]:bg-lightGray">
              <li className="relative group/item flex-center">
                <NavLink to="/">
                  My Apps <ChevronDown />
                </NavLink>
                <ul className="hidden absolute top-full left-0 group-hover/item:block bg-white [&>li>a]:py-4 [&>li>a]:px-3 [&>li>a]:text-nowrap [&>li>a]:inline-block [&>li]:border-b-2 [&>li>a]:text-black [&>li>a]:font-medium hover:[&>li>a]:bg-lightGray">
                  <li>
                    <NavLink to="/">
                      My App 1 <ArrowUpRight />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      My App 2 <ArrowUpRight />
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="flex-center">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="flex-center">
                <NavLink to="/">Explore</NavLink>
              </li>
            </ul>
          </nav>

          <Search className="hidden ml-3 lg:mx-2 xl:block md:hidden" />
          <input
            type="text"
            className="px-2 py-1 ml-3 border-2 rounded-lg w-60 xl:hidden"
            placeholder="Search for Contacts"
          />
        </div>

        <div className="relative flex items-center gap-x-3">
          <div className="flex items-center mr-1 gap-x-2 md:hidden">
            <div className="relative p-1">
              <Bell />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                11
              </span>
            </div>

            <div className="relative p-1">
              <Mail />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                11
              </span>
            </div>

            <div className="relative p-1">
              <Zap />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                14
              </span>
            </div>
          </div>

          <div className="flex h-[60px] items-center gap-2 border-r-2 pr-2">
            <img
              src="https://placehold.co/40x40"
              alt="Profile Image"
              className="w-10 h-10 rounded-lg"
            />
            <span className="font-semibold leading-none text-center text-gray-800">
              Shivam Kumar
            </span>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1.5 px-2.5 rounded-lg flex items-center mb:hidden">
            <Plus className="mr-1" />
            <span>Create</span>
          </button>

          <button className="border border-blue/50 text-blue-500 bg-white  font-medium py-1.5 px-2.5 rounded-lg flex items-center sm:hidden">
            <Star className="mr-1" />
            <span>Upgrade</span>
          </button>

          <button className="border border-green/50 text-green-500 bg-white  font-medium py-1.5 px-2.5 rounded-lg flex items-center mr-3 lg:mr-0 sm:hidden">
            <List className="mr-1" />
            <span>More</span>
          </button>

          <button
            id="header-nav-toggle"
            className="items-center justify-center hidden w-12 h-12 p-3 mr-3 text-black bg-slate-300 rounded-xl group lg:flex"
            aria-expanded={false}
            onClick={() => toggleMenu()}
          >
            <svg
              className="w-6 h-6 pointer-events-none fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={
                  "origin-center absolute group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[y:7px] group-[[aria-expanded=true]]:[x:0px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                }
                y="2"
                x="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[y:7px] group-[[aria-expanded=true]]:[x:0px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="12"
                width="9"
                height="2"
                rx="1"
              ></rect>
            </svg>
          </button>

          <div
            id="header-nav"
            className="absolute right-0 top-full w-60 [&>nav]:opacity-0 [&.menu-is-open>nav]:opacity-100 [&.menu-is-open>nav]:block duration-1000 transition-all"
          >
            <nav className="hidden transition-opacity duration-1000">
              <ul className="flex flex-col h-[60px] [&>li]:border-t-2 [&>li>a]:px-3 [&>li>a]:py-4 [&>li>a]:text-nowrap [&>li>a]:text-black [&>li>a]:font-medium [&>li]:bg-white [&>li>a]:w-full hover:[&>li>a]:bg-lightGray">
                <li className="hidden md:block">
                  <input
                    type="text"
                    className="block px-2 py-1 mx-auto my-3 border-2 rounded-lg"
                    placeholder="Search for Contacts"
                  />
                </li>
                <li className="relative mb:flex-col group/item flex-center">
                  <NavLink to="/">
                    My Apps <ChevronDown />
                  </NavLink>
                  <div className="absolute top-0 hidden w-full mb:static right-full group-hover/item:block">
                    <ul className=" bg-white [&>li>a]:py-4 [&>li>a]:px-3 [&>li>a]:text-nowrap [&>li>a]:inline-block [&>li]:border-t-2 [&>li>a]:text-black [&>li>a]:font-medium hover:[&>li>a]:bg-lightGray [&>li>a]:w-full">
                      <li>
                        <NavLink to="/">
                          My App 1 <ArrowUpRight />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          My App 2 <ArrowUpRight />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex-center">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="flex-center">
                  <NavLink to="/">Explore</NavLink>
                </li>
                <li className="justify-center hidden px-2 py-2 mb:flex">
                  <button className="bg-red-500 w-full max-w-36 hover:bg-red-600 text-white font-medium py-1.5 px-2.5 rounded-lg flex-center">
                    <Plus className="mr-1" />
                    <span>Create</span>
                  </button>
                </li>
                <li className="justify-center hidden gap-4 px-2 py-2 sm:flex">
                  <button className="border border-blue/50 text-blue-500 bg-white  font-medium py-1.5 px-2.5 rounded-lg flex items-center">
                    <Star className="mr-1" />
                    <span>Upgrade</span>
                  </button>

                  <button className="border border-green/50 text-green-500 bg-white  font-medium py-1.5 px-2.5 rounded-lg flex items-center mr-3 lg:mr-0">
                    <List className="mr-1" />
                    <span>More</span>
                  </button>
                </li>
                <li className="hidden md:block">
                  <div className="flex items-center justify-center h-16 mr-1 gap-x-8">
                    <div className="relative p-1">
                      <Bell />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                        11
                      </span>
                    </div>

                    <div className="relative p-1">
                      <Mail />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                        11
                      </span>
                    </div>

                    <div className="relative p-1">
                      <Zap />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-full px-1.5">
                        14
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
