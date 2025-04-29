"use client";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api, { lien } from "../../lien";
import { truncateHTMLWithTags } from "../actu/index";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
export default function Projet() {
  const [projetData, setProjetData] = useState([]);
  const getProjetData = async () => {
    try {
      const response = await api.get("/get-all-projet");
      setProjetData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProjetData();
  }, []);
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
        {projetData &&
          projetData.length > 0 &&
          projetData.map((projet, index) => (
            <CampaignCard
              key={index}
              image={`${lien}${projet.image}`}
              amountCollected={projet.montant_obtenu}
              content={projet.content}
              titre={projet.titre}
              totalRequired={projet.montant_voulu}
              id={projet.id_projet}
              date_projet={projet.date_projet}
            />
          ))}
      </div>
      <section className="flex justify-center mb-20"></section>
    </section>
  );
}

function CampaignCard({
  image,
  content,
  titre,
  totalRequired,
  amountCollected,
  date_projet,
  id,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Assuming these values are coming from your data

  const percentage = (amountCollected / totalRequired) * 100; // Calculate the percentage
  const truncatedMachin = truncateHTMLWithTags(content, 100);
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
      <h2 className="text-2xl font-bold text-green-500 mt-4">{titre} </h2>
      <div className="border-b border-gray-300 pb-2">
        <div
          className="mt-2 text-black "
          dangerouslySetInnerHTML={{ __html: truncatedMachin }}
        />

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
          <span> {format(date_projet, "dd-MMMM-yyyy", { locale: fr })}</span>
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
      </div>

      <div className="w-full justify-between flex">
        <button
          onClick={() => router.push(`/donnation/${id}`)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 "
        >
          Supporter
        </button>
      </div>
    </div>
  );
}

// const Pagination = ({ currentPage, totalPages }) => {
//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     const maxVisiblePages = 5;

//     if (totalPages <= maxVisiblePages + 1) {
//       // If total pages <= 6, show all pages
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(
//           <button
//             key={i}
//             className={`border rounded-full px-3 py-1 ${
//               currentPage === i
//                 ? "bg-green-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               // Handle page click
//             }}
//           >
//             {i}
//           </button>
//         );
//       }
//     } else {
//       // If more than 6 pages, display first 5 pages and the last one
//       for (let i = 1; i <= 5; i++) {
//         pageNumbers.push(
//           <button
//             key={i}
//             className={`border rounded-full px-3 py-1 ${
//               currentPage === i
//                 ? "bg-green-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               // Handle page click
//             }}
//           >
//             {i}
//           </button>
//         );
//       }

//       // Add ellipsis after page 5
//       if (totalPages > maxVisiblePages + 1) {
//         pageNumbers.push(
//           <span key="ellipsis" className="px-3">
//             ...
//           </span>
//         );

//         // Add the last page number
//         pageNumbers.push(
//           <button
//             key={totalPages}
//             className={`border rounded-full px-3 py-1 ${
//               currentPage === totalPages
//                 ? "bg-green-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               // Handle page click
//             }}
//           >
//             {totalPages}
//           </button>
//         );
//       }
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className="flex justify-center items-center gap-2 mt-4">
//       {/* Previous Button */}
//       {currentPage > 1 && (
//         <button
//           className="border rounded-full px-3 py-1 text-gray-700 hover:bg-gray-100"
//           onClick={() => {
//             // Handle previous page click
//           }}
//         >
//           Previous
//         </button>
//       )}

//       {/* Page Numbers */}
//       {renderPageNumbers()}

//       {/* Next Button */}
//       {currentPage < totalPages && (
//         <button
//           className="border rounded-full px-3 py-1 text-gray-700 hover:bg-gray-100"
//           onClick={() => {
//             // Handle next page click
//           }}
//         >
//           Suivant
//         </button>
//       )}
//     </div>
//   );
// };
