"use client";
import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

import { Typography } from "@material-tailwind/react";
export default function RapportAnnuel() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

function Content() {
  return (
    <section className="pt-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Rapport annuel
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Association{" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Rapport annuel
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen p-10">
        <Typography variant="h3" className=" text-black">
          Les activit&eacute;s de l&apos;ann&eacute;e
        </Typography>
        <p className="pt-6">
          D&eacute;couvrez le reflet des actions poursuivies par notre
          organisation au cours des ann&eacute;es pr&eacute;c&eacute;dentes.
        </p>
        <div className="flex flex-col p-10 gap-4">
          {[2018, 2019, 2020, 2021, 2022, 2023]
            .reverse()
            .map((value, index) => (
              <a
                href="pdf"
                key={index}
                target="_blank"
                className="text-blue-900 hover:text-blue-500"
              >
                Ann&eacute;e {value}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
