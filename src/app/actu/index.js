"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export function Index() {
  const sary10 = "/image/vftm/sary9.JPG";
  const sary20 = "/image/vftm/sary2.JPG";
  const sary30 = "/image/vftm/sary12.png";
  const sary50 = "/image/vftm/sary11.JPG";
  const sary60 = "/image/vftm/sary1.JPG";

  const images = [
    { src: sary10, alt: "image1" },
    { src: sary20, alt: "image2" },
    { src: sary30, alt: "image3" },
    { src: sary50, alt: "image4" },
    { src: sary60, alt: "image5" },
  ];

  return (
    <section className="pt-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Nos Actualit&eacute;s
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>{" "}
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Actualit&eacute;s
            </p>{" "}
          </div>
        </div>
      </div>

      <section className="w-full max-w-6xl mx-auto flex flex-col px-4  space-y-8 mb-20">
        {images.map((image, index) => (
          <Project key={index} image={image.src} id={index + 1} />
        ))}
      </section>
      <section className="flex justify-center mb-20">
        <Pagination currentPage={1} totalPages={10} />
      </section>
    </section>
  );
}

export default Index;

const Pagination = ({ currentPage, totalPages }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 1) {
      // If total pages <= 6, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`border rounded-full px-3 py-1 ${
              currentPage === i
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              // Handle page click
            }}
          >
            {i}
          </button>
        );
      }
    } else {
      // If more than 6 pages, display first 5 pages and the last one
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`border rounded-full px-3 py-1 ${
              currentPage === i
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              // Handle page click
            }}
          >
            {i}
          </button>
        );
      }

      // Add ellipsis after page 5
      if (totalPages > maxVisiblePages + 1) {
        pageNumbers.push(
          <span key="ellipsis" className="px-3">
            ...
          </span>
        );

        // Add the last page number
        pageNumbers.push(
          <button
            key={totalPages}
            className={`border rounded-full px-3 py-1 ${
              currentPage === totalPages
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              // Handle page click
            }}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {/* Previous Button */}
      {currentPage > 1 && (
        <button
          className="border rounded-full px-3 py-1 text-gray-700 hover:bg-gray-100"
          onClick={() => {
            // Handle previous page click
          }}
        >
          Previous
        </button>
      )}

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      {currentPage < totalPages && (
        <button
          className="border rounded-full px-3 py-1 text-gray-700 hover:bg-gray-100"
          onClick={() => {
            // Handle next page click
          }}
        >
          Suivant
        </button>
      )}
    </div>
  );
};

function Project({ image, id }) {
  const router = useRouter(); // Instantiate the router
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Image
        src={image}
        alt="Malagasy Project"
        width={1000} // Aspect ratio-based width
        height={500} // Aspect ratio-based height
        className=" w-[80vw] h-[50vh] object-cover mb-5" // Set image size
      />
      <div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          LE PROJET MALGACHE EN 2024
        </h1>
        <p className="text-lg text-gray-700 mt-4 mb-4">
          Le projet sur les hauts plateaux &agrave; Madagascar men&eacute; par
          Ruth Rossier, cheffe de projet VFTM, connait une &eacute;volution
          r&eacute;jouissante. Un nouvel accord annuel sign&eacute; avec notre
          partenaire, la VFTM, en d&eacute;finit les activit&eacute;s et les
          perspectives de d&eacute;veloppement en 2024. Un d&eacute;veloppement
          dans trois domaines-cl&eacute;s Formation: le point fort [...]
        </p>
        <button
          onClick={() => router.push(`/actu/detail/${id}`)} // Navigate to the detail page with the post's ID
          className="bg-white hover:bg-green-700 text-green-400 border border-green-700 hover:text-white font-bold py-2 px-4 rounded mt-4"
        >
          Voir plus...
        </button>
      </div>
    </div>
  );
}
