import { useState } from "react";
import { menuData } from "./menudata";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/maxhub.png";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoverItem, setHoverItem] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  const handleOpen = (menuName: string) => {
  if (window.innerWidth < 1024) return;
  setOpenMenu(menuName);

  // Show first item by default if it's Products
  const firstItem = menuData[menuName][0];
  setHoverItem(firstItem);
};

const handleClose = () => {
  setOpenMenu(null);
  setHoverItem(null);
};

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* NAVBAR (80px fixed height) */}
      <div className="flex items-center justify-between px-6 lg:px-10 h-[80px]">

        {/* LOGO */}
        <img
          src={logo}
          className="h-[80px] w-[160px] md:h-[200px] md:w-[300px] object-contain md:pt-[10px]"
          alt="Logo"
        />

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-10 text-white">
          {["Products", "Solutions", "Support"].map((menu) => (
            <button
              key={menu}
              onMouseEnter={() => handleOpen(menu)}
              className="hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              {menu}
            </button>
          ))}
          <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out">
            Explore
          </button>
          <button className="hover:text-blue-400 transition-colors duration-300 ease-in-out">
            Partner Portal
          </button>
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition-colors duration-300">
            Contact Sales →
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-3xl transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <Transition
        show={mobileOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-5"
      >
        <div className="lg:hidden bg-transparent backdrop-blur-md text-white border-t border-gray-700 px-6 pb-6">
          {["Products", "Solutions", "Support"].map((menu) => (
            <div key={menu} className="border-b border-gray-700 py-3">
              <div
                onClick={() =>
                  setMobileSubMenu(mobileSubMenu === menu ? null : menu)
                }
                className="flex justify-between items-center text-lg font-medium cursor-pointer hover:text-blue-400 transition-colors duration-300"
              >
                {menu}
                <span>{mobileSubMenu === menu ? "▲" : "▼"}</span>
              </div>

              <Transition
                show={mobileSubMenu === menu}
                enter="transition ease-out duration-300 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <div className="mt-3 pl-4 space-y-2">
                  {menuData[menu].map((item) => (
                    <p
                      key={item.name}
                      className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </Transition>
            </div>
          ))}

          <p className="py-3 border-b border-gray-700 text-lg hover:text-blue-400 transition-colors duration-300">
            Explore
          </p>
          <p className="py-3 border-b border-gray-700 text-lg hover:text-blue-400 transition-colors duration-300">
            Partner Portal
          </p>

          <button className="mt-4 bg-blue-600 w-full py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
            Contact Sales →
          </button>
        </div>
      </Transition>

      {/* ---------------- DESKTOP MEGA DROPDOWN ---------------- */}
      {openMenu && (
        <div
          className="hidden lg:block absolute left-0 top-[80px] w-full bg-transparent backdrop-blur-md border-t shadow-xl z-50"
          onMouseLeave={handleClose}
        >
          <div className="grid grid-cols-3 bg-white/10 backdrop-blur-lg rounded-lg text-white">

            <div className="border-r border-white/20 p-6 text-xl font-semibold bg-white/10">
              {openMenu}
            </div>

            <div className="border-r border-white/20 p-6">
              {menuData[openMenu].map((item: any) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoverItem(item)}
                  className={`cursor-pointer py-3 px-2 rounded-md text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                    hoverItem?.name === item.name
                      ? "bg-white/20 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <div className="p-6 flex items-center justify-center">
              {hoverItem ? (
                <div className="text-center transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={hoverItem.image}
                    className="w-64 h-40 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-xl font-semibold mt-4">{hoverItem.name}</p>
                </div>
              ) : (
                <p className="text-gray-300">Hover an item to preview</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
