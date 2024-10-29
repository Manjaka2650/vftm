"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Projet() {
  const sary10 = "/image/vftm/sary9.JPG";
  const sary20 = "/image/vftm/sary2.JPG";
  const sary30 = "/image/vftm/sary12.png";
  const sary50 = "/image/vftm/sary11.JPG";
  const sary60 = "/image/vftm/sary1.JPG";
  const sary70 = "/image/vftm-actu/img9.png";

  const images = [
    { src: sary10, alt: "image1" },
    { src: sary20, alt: "image2" },
    { src: sary30, alt: "image3" },
    { src: sary50, alt: "image4" },
    { src: sary60, alt: "image5" },
    { src: sary70, alt: "image5" },
  ];

  return (
    <section className="pt-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Nos projets
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Projets
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-4">
        {images.map((image, index) => (
          <CampaignCard key={index} image={image.src} id={index} />
        ))}
      </div>
      <section className="flex justify-center mb-20">
        <Pagination currentPage={1} totalPages={10} />
      </section>
    </section>
  );
}

function CampaignCard({ image, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Assuming these values are coming from your data
  const totalRequired = 900000; // Total money required
  const amountCollected = 90401; // Amount already collected
  const percentage = (amountCollected / totalRequired) * 100; // Calculate the percentage

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 transition duration-200 ${
        isHovered ? "bg-gray-100 border-gray-300" : "border border-gray-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt="Campaign Image"
        width={600}
        height={300}
        className="shadow-lg rounded-lg w-full h-40 object-cover"
      />
      <h2 className="text-2xl font-bold text-green-500 mt-4">
        Le rapport annuel 2023 est en ligne{" "}
      </h2>
      <div className="border-b border-gray-300 pb-2">
        <p className="mt-2 text-black ">
          Pr&eacute;sence, participation interactive et &eacute;motion des
          membres et invit&eacute;es &agrave; la 13e assembl&eacute;e
          g&eacute;n&eacute;rale d&apos;Agro-sans-fronti&egrave;re Suisse. Un
          soutient [...]
        </p>
        <div className="flex flex-row justify-between">
          <div></div>
          <button
            onClick={() => router.push(`/projet/detail/${id}`)}
            className="bg-white hover:bg-white border border-green-700 text-green-700 p-2 self-end rounded "
          >
            Voir plus ...
          </button>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-4 ">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Date:</span>
          <span>10 Novembre 2023</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Argent requis:</span>
          <span>{totalRequired} Ar</span>
        </div>
        <div className="flex-col items-center mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Taux:</span>
            <span>{percentage.toFixed(0)}%</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-4 bg-gray-200 rounded-lg">
            <div
              className="h-full bg-blue-500 rounded-lg"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <span className="text-gray-500 font-bold">{amountCollected} Ar</span>
          <span className="text-gray-500 ml-2">collectionn&eacute;</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.137l1.07 3.292c.3.921-.755 1.688-1.588 1.137l-3.042-2.2a1 1 0 00-1.175 0l-3.042 2.2c-.833.551-1.888-.216-1.588-1.137l1.07-3.292a1 1 0 00-.364-1.137L2.779 8.929c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          <span className="text-gray-500 ml-2">1 200 Supporters</span>
        </div>
      </div>

      <div className="w-full justify-between flex">
        <button
          onClick={() => alert("bouton")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 "
        >
          Supporter
        </button>
      </div>
    </div>
  );
}

// function Component({ image, id }) {
//   const router = useRouter();
//   return (
//     <div className="bg-white ">
//       {/* Carte avec fond blanc, ombre plus forte et coins arrondis */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <Image
//           src={image}
//           alt="People at a gathering"
//           width={600}
//           height={300}
//           className="shadow-lg rounded-lg w-full h-40 object-cover" // Set a fixed height and cover
//         />
//         <h2 className="text-2xl font-bold text-green-500 mt-4">
//           Le rapport annuel 2023 est en ligne
//         </h2>
//         <p className="mt-2 text-black">
//           Pr&eacute;sence, participation interactive et &eacute;motion des membres et invit&eacute;es
//           &agrave; la 13e assembl&eacute;e g&eacute;n&eacute;rale d&apos;Agro-sans-fronti&egrave;re Suisse. Un soutien
//           [...]
//         </p>
//         {/* Information Section */}
//         <div className="mt-4">
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-gray-700">Argent requis:</span>
//             <span className="">900000 Ar</span>
//           </div>
//           <div className="flex-col items-center mb-2">
//             <div className="flex  justify-between items-center mb-2">
//               <span className="text-gray-700">Taux:</span>
//               <span className="">50%</span>
//             </div>
//             <span className="w-full h-72 bg-gray rounded-lg">
//               <span className="w-1/2 bg-green h-72 rounded-lg"></span>
//             </span>
//           </div>
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-gray-700">Argent obtenu:</span>
//             <span className="">84000 Ar</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700">Date:</span>
//             <span className="">10 Novembre 2023</span>
//           </div>
//         </div>
//         <button
//           onClick={() => router.push(`/projet/detail/${id}`)} // Navigate to the detail page with the post&apos;s ID
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
//         >
//           PLUS...
//         </button>
//       </div>
//     </div>
//   );
// }

// const CampaignCard = () => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       className={`rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition duration-200 ${
//         isHovered ? "bg-gray-100" : ""
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h2 className="text-xl font-bold mb-2">
//         Help the World eliminate Dengue Mosquitoes
//       </h2>
//       <p className="text-gray-600 mb-4">
//         Good day to you! Thank you so much for taking a glimpse on my dream. I
//         have been dreaming and inspired to invent a device that will help
//         humankind greatly...
//       </p>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <span className="text-green-500 font-bold">€ 83</span>
//           <span className="text-gray-500 ml-2">collected</span>
//         </div>
//         <div className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-gray-400"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.137l1.07 3.292c.3.921-.755 1.688-1.588 1.137l-3.042-2.2a1 1 0 00-1.175 0l-3.042 2.2c-.833.551-1.888-.216-1.588-1.137l1.07-3.292a1 1 0 00-.364-1.137L2.779 8.929c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//           </svg>
//           <span className="text-gray-500 ml-2">Supporters</span>
//         </div>
//       </div>
//       <div className="mt-4">
//         <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-200">
//           Support This Campaign
//         </button>
//       </div>
//     </div>
//   );
// };

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
