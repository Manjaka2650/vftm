"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function Footer() {
  const pathname = usePathname();
  const getLinkClass = (path) => {
    return pathname === path
      ? "text-white hover:text-green-200"
      : "hover:text-green-200";
  };

  return (
    <footer className="bg-green-600 w-full text-white">
      <div className="max-w-screen-xl mx-auto p-5 border-t border-blue-gray-50 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 p-4">
          <div className="mb-4">
            <div className="font-semibold text-lg">&Agrave; propos de nous</div>
            <p className="text-white text-sm text-justify mt-2">
              VFTM a &eacute;t&eacute; cr&eacute;&eacute; en 2006,
              Compos&eacute;e de 22 organisations paysannes de la R&eacute;gion
              Matsiatra Ambony, repr&eacute;sentant plus de 3500 paysans, sur
              les 7 districts et 58 communes. seule plateforme syndicale de la
              R&eacute;gion Haute Matsiatra.
            </p>
          </div>
          <div>
            <div className="font-semibold text-lg">Contact</div>
            <div className="flex items-center mt-2">
              <PhoneIcon
                aria-hidden="true"
                className="h-5 w-5 text-white mr-2"
              />
              +261 34 20 152 46
            </div>
            <div className="flex items-center mt-1">
              <EnvelopeIcon
                aria-hidden="true"
                className="h-5 w-5 text-white mr-2"
              />
              assvftm@gmail.com
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="font-semibold text-lg">Pages</div>
          <ul className="mt-2">
            <li className={getLinkClass("/")}>
              <Link href="/">Accueil</Link>
            </li>
            <li className={getLinkClass("/actu")}>
              <Link href="/actu">Nos Actualit&eacute;s</Link>
            </li>
            <li className={getLinkClass("/activite")}>
              <Link href="/activite">Association</Link>
            </li>
            <li className={getLinkClass("/projet")}>
              <Link href="/projet">Nos projets</Link>
            </li>
            <li>
              <Link href="/#">Faire un don</Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="font-semibold text-lg">Contactez-nous</div>
          <form className="mt-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className="w-full h-12 border border-gray-300 rounded-lg p-2 text-gray-800 mb-2"
            />
            <textarea
              placeholder="Message"
              required
              className="w-full h-16 border border-gray-300 rounded-lg p-2 text-gray-800 mb-2"
            />
            <input
              type="submit"
              value="Envoyer"
              className="w-full h-10 bg-green-700 text-white font-semibold rounded-lg cursor-pointer hover:bg-green-800 transition duration-300"
            />
          </form>
        </div>

        <div className="w-full text-right text-gray-200 mt-4">
          <p>
            Copyright &#169; 2024{" "}
            <a href="" className="text-green-200 hover:underline">
              &Eacute;tudiant d&apos;ENI
            </a>{" "}
            Tout droit r&eacute;serv&eacute;
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
