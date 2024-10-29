"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }
  const [windowWidth, setWindowWidth] = React.useState(false);

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth > 728);
  };

  // Add event listener for window resize on component mount
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !event.target.closest("li.relative") // Assurez-vous que cela cible le bon élément
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-green-700 hover:text-green-800"
      : "hover:text-green-700";
  };

  const imagePath = "/logos/logoVftm.png";
  const Logo = `${imagePath}`;

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "white"}
      className={
        isScrolling
          ? "fixed top-0 z-50 border-0 backdrop-blur-sm bg-white/80"
          : "fixed top-0 z-50 border-0"
      }
      style={{
        boxShadow: isScrolling ? "1px 2px 3px rgba(0, 0, 0, 0.103)" : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="text-lg font-bold"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: isScrolling ? "blue-gray" : "black",
          }}
        >
          <Image
            src={Logo}
            alt="image"
            width={110}
            height={100}
            style={{ borderRadius: "8px" }}
          />
          {windowWidth ? (
            <span style={{ marginLeft: "20px", fontSize: "16px" }}>
              V F T M
            </span>
          ) : (
            <span style={{ marginLeft: "20px", fontSize: "16px" }}>
              Vondrona Fampandrosoana ny Tantsaha Matsiatra Ambony
            </span>
          )}
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-gray-900"
          }`}
        >
          <li className={getLinkClass("/")}>
            <Link href={{ pathname: "/" }} style={{ fontSize: "16px" }}>
              Accueil
            </Link>
          </li>
          <li className={getLinkClass("/actu")}>
            <Link href={{ pathname: "/actu" }} style={{ fontSize: "16px" }}>
              Nos Actualit&eacute;s
            </Link>
          </li>

          <li className="relative">
            <button
              className={`text-[16px] ${getLinkClass("/activite")}`}
              onClick={() => setOpenDropdown((prevState) => !prevState)}
            >
              Association
            </button>
            {openDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-start shadow-lg rounded-lg py-2 z-50">
                <li
                  onClick={() => router.replace("/association/comite")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <button>Comit&eacute;</button>
                </li>
                <li
                  onClick={() => router.replace("/association/partenariat")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <button>Partenariat</button>
                </li>
                <li
                  onClick={() => router.replace("/association/rapport-annuel")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <button>Rapport annuel</button>
                </li>
                <li
                  onClick={() =>
                    router.replace("/association/rapport-financier")
                  }
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <button>Rapport financier</button>
                </li>
              </ul>
            )}
          </li>

          <li className={getLinkClass("/projet")}>
            <Link href={{ pathname: "/projet" }} style={{ fontSize: "16px" }}>
              Nos Projets
            </Link>
          </li>
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            color="green"
            className="hover:bg-green-700"
            onClick={() => router.replace("/projet")}
          >
            Faire un don
          </Button>
        </div>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "gray" : "gray"}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapsable open={open} getLinkClass={getLinkClass} />
    </MTNavbar>
  );
}

export default Navbar;

const Collapsable = ({ open, getLinkClass }) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  return (
    <Collapse open={open}>
      <div
        className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200"
        style={{
          textAlign: "center",
        }}
      >
        <ul className="flex flex-col gap-4 text-gray-900">
          <li className={getLinkClass("/")}>
            <Link href={{ pathname: "/" }} style={{ fontSize: "16px" }}>
              Accueil
            </Link>
          </li>
          <li className={getLinkClass("/actu")}>
            <Link href={{ pathname: "/actu" }} style={{ fontSize: "16px" }}>
              Nos Actualit&eacute;s
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setOpenDropdown((prevState) => !prevState)}
              className={`text-[16px] ${getLinkClass("/activite")}`}
            >
              Association
            </button>
            {openDropdown && (
              <ul className="mt-2 space-y-2">
                <li
                  onClick={() => router.replace("/association/comite")}
                  className="block text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Comit&eacute;
                </li>
                <li
                  onClick={() => router.replace("/association/partenariat")}
                  className="block text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Partenariat
                </li>
                <li
                  onClick={() => router.replace("/association/rapport-annuel")}
                  className="block text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Rapport annuel
                </li>
                <li
                  onClick={() =>
                    router.replace("/association/rapport-financier")
                  }
                  className="block text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Rapport financier
                </li>
              </ul>
            )}
          </li>
          <li className={getLinkClass("/projet")}>
            <Link href={{ pathname: "/projet" }} style={{ fontSize: "16px" }}>
              Nos Projets
            </Link>
          </li>
        </ul>
        <div
          className="mt-6 flex items-center gap-2"
          style={{ justifyContent: "center" }}
        >
          <Link href={"/projet"}>
            <Button color="green">Faire un don</Button>
          </Link>
        </div>
      </div>
    </Collapse>
  );
};
