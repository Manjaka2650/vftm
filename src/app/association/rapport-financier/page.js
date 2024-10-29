"use client";
import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { Typography } from "@material-tailwind/react";

export default function RapportFinancier() {
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
            Rapport financier
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Association{" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Rapport financier
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
