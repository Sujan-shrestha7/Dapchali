import { useState } from "react";
import { menuData } from "./menudata";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/maxhub.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoverItem, setHoverItem] = useState<any>(null);
  const [hoverVariant, setHoverVariant] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleOpen = (menuName: string) => {
    if (window.innerWidth < 1024) return;
    setOpenMenu(menuName);

    const firstItem = menuData[menuName][0];
    setHoverItem(firstItem);
    setHoverVariant(null);
  };

  const handleClose = () => {
    setOpenMenu(null);
    setHoverItem(null);
    setHoverVariant(null);
  };

  const isSupportMenu = openMenu === "Support";

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 lg:px-10 h-[80px]">
        <img
          src={logo}
          className="h-[80px] w-[160px] md:h-[200px] md:w-[300px] object-contain"
          alt="Logo"
        />

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-10 text-white">
          {["Products", "Solutions", "Support"].map((menu) => (
            <button
              key={menu}
              onMouseEnter={() => handleOpen(menu)}
              className="hover:text-blue-400 transition-colors"
            >
              {menu}
            </button>
          ))}

          <button className="hover:text-blue-400 transition-colors">
            Explore
          </button>
          <button className="hover:text-blue-400 transition-colors">
            Our Clients
          </button>
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden lg:flex">
          <button className="bg-blue-600 hover:bg-blue-700 text-[#fff] px-6 py-2 rounded-md font-semibold">
            Contact Sales →
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <Transition show={mobileOpen} enter="transition-all duration-300" leave="transition-all duration-200">
        <div className="lg:hidden bg-black/50 backdrop-blur text-white px-6 pb-6">
          {["Products", "Solutions", "Support"].map((menu) => (
            <div key={menu} className="border-b border-gray-700 py-3">
              <div
                onClick={() =>
                  setMobileSubMenu(mobileSubMenu === menu ? null : menu)
                }
                className="flex justify-between text-lg cursor-pointer"
              >
                {menu}
                <span>{mobileSubMenu === menu ? "▲" : "▼"}</span>
              </div>

              <Transition
                show={mobileSubMenu === menu}
                enter="transition duration-300"
                leave="transition duration-200"
              >
                <div className="mt-3 pl-4 space-y-2">
                  {menuData[menu].map((item) => (
                    <p key={item.name} className="text-gray-300">
                      {item.name}
                    </p>
                  ))}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </Transition>

      {/* ---------- DESKTOP MEGA MENU ---------- */}
      {openMenu && (
        <div
          className="hidden lg:block absolute left-0 top-[80px] w-full bg-transparent backdrop-blur-xl z-50"
          onMouseLeave={handleClose}
        >
          <div className={`grid ${isSupportMenu ? "grid-cols-3" : "grid-cols-5"} p-6 text-white`}>
            
            {/* LEFT COLUMN */}
            <div className="border-r border-white/20 p-6 text-xl font-semibold">
              {openMenu}
            </div>

            {/* ITEMS COLUMN */}
            <div className="border-r border-white/20 p-6">
              {menuData[openMenu].map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => {
                    setHoverItem(item);
                    setHoverVariant(null);
                  }}
                  className={`cursor-pointer py-3 px-2 rounded-md text-lg ${
                    hoverItem?.name === item.name ? "bg-white/20" : ""
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* VARIANTS COLUMN */}
            {!isSupportMenu && (
              <div className="border-r border-white/20 p-6 min-w-[350px]">
                {hoverItem?.variants?.length ? (
                  hoverItem.variants.map((variant: any) => (
                    <div
                      key={variant.name}
                      onMouseEnter={() => setHoverVariant(variant)}
                      onClick={() => navigate(`/home/${variant.slug}`)}
                      className={`cursor-pointer py-2 text-lg rounded ${
                        hoverVariant?.name === variant.name
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {variant.name}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300">No variants</p>
                )}
              </div>
            )}

            {/* IMAGE PREVIEW SECTION */}
            <div className={`${isSupportMenu ? "col-span-1" : "col-span-2"} p-6 flex justify-center items-center`}>
              {isSupportMenu ? (
                hoverItem?.image ? (
                  <img src={hoverItem.image} className="w-64 h-40 object-cover rounded-lg shadow-lg border border-white/20" />
                ) : (
                  <p className="text-gray-300">Hover to preview image</p>
                )
              ) : hoverVariant ? (
                <img src={hoverVariant.image} className="w-64 h-40 object-cover rounded-lg shadow-lg border border-white/20" />
              ) : (
                <p className="text-gray-300">Hover a variant to preview</p>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
