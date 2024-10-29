"use client";
import React from "react";

import Link from "next/link";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { Typography } from "@material-tailwind/react";
export default function Partenariat() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
function Content() {
  return (
    <section className="pt-20 mb-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Nos Partenaire
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Association{" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Partenaire;
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-10">
        {/* Changed h-screen to min-h-screen */}
        <Typography variant="h3" className=" text-black">
          Votre soutien est pr&eacute;cieux
        </Typography>
        <p className="pt-6">
          VFTM entretient des partenariats forts avec la Coop&eacute;ration
          Suisse, des organisations r&eacute;gionales et nationales en Suisse,
          en Europe et dans les pays de l&apos;Afrique subsaharienne, des
          entreprises priv&eacute;es, ainsi qu&apos;avec ses donateurs. Merci
          &agrave; tous pour votre engagement.
        </p>
        <div className="flex flex-col p-10 gap-4 ">
          <OrganismesInstitutionnels />
          <AssociationDeProducteurs />
          <Donateurs />
        </div>
      </div>
    </section>
  );
}

// components/OrganismesInstitutionnels.js

const OrganismesInstitutionnels = () => {
  const organismes = [
    "Confédération suisse – Direction du développement et de la Coopération – DDC",
    "ADES",
    "Afdi Bourgogne Franche-Comté",
    "Agroscope Changins",
    "Association suisse des Ingénieurs en agronomie et Ingénieurs en technologie alimentaire – ASIAT-SVIAL",
    "Caritas Kaolack",
    "CEFFEL Madagascar",
    "Coopérative Niaq Jarinu du Sine Saloum Sénégal",
    "FEDEVACO",
    "FIFAMANOR Madagascar",
    "Innovage Suisse Romande",
    "ONG Ferme-Ecole Bel-Avenir Madagascar",
  ];

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4">Organismes Institutionnels</h1>
      {organismes.map((organisme, index) => (
        <Link href="#" key={index}>
          <p className="block text-blue-600 hover:text-blue-800 transition duration-300 mb-2">
            {organisme}
          </p>
        </Link>
      ))}
    </div>
  );
};

const AssociationDeProducteurs = () => {
  const associations = [
    "Association des producteurs de Pommes de terre nouvelles de l’Arc lémanique – APPNAL",
    "Confédération Coopérative Paysanne Horticole du Niger – CCPHN",
    "Groupement pour le développement des paysans de la région de Haute Matsiatra-Madagascar – VFTM",
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">ASSOCIATION DE PRODUCTEURS</h1>
      {associations.map((association, index) => (
        <Link href="#" key={index}>
          <p className="block text-blue-600 hover:text-blue-800 transition duration-300 mb-2">
            {association}
          </p>
        </Link>
      ))}
    </div>
  );
};

const Donateurs = () => {
  const donateurs = [
    "Albin-Pedrotti-Stiftung",
    "Association des producteurs de Pommes de terre nouvelles de l’Arc lémanique – APPNAL",
    "Fondation Gertrude Hirzel Genève",
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">DONATEURS</h1>
      {donateurs.map((donateur, index) => (
        <Link href="#" key={index}>
          <p className="block text-blue-600 hover:text-blue-800 transition duration-300 mb-2">
            {donateur}
          </p>
        </Link>
      ))}
    </div>
  );
};
