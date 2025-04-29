"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api, { lien } from "../../lien";
export function Index() {
  const [reunionData, setreunionData] = useState([]);
  const fetchAllReunion = async () => {
    try {
      const response = await api.get("/get-all-reunion");
      setreunionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllReunion();
  }, []);
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
        {reunionData.length > 0 &&
          reunionData.map((reunion, index) => (
            <Project
              key={index}
              image={`${lien}${reunion.image}`}
              id={reunion.id_reunion}
              content={reunion.content}
              titre={reunion.titre}
              limit={200}
            />
          ))}
      </section>
      <section className="flex justify-center mb-20">
        <Pagination currentPage={1} totalPages={reunionData.length} />
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

export function Project({
  image,
  id,
  titre,
  content,
  limit,
  plusVisible = true,
}) {
  const router = useRouter(); // Instantiate the router
  const truncatedMachin = truncateHTMLWithTags(content, limit);
  return (
    <div className=" mx-auto p-4 flex flex-col ">
      <Image
        src={image}
        alt="Malagasy Project"
        width={1000} // Aspect ratio-based width
        height={500} // Aspect ratio-based height
        className=" w-[80vw] h-[50vh] object-cover mb-5" // Set image size
      />
      <div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">{titre}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: truncatedMachin }}
          className="text-lg text-gray-700 mt-4 mb-4"
        />
        {plusVisible && (
          <button
            onClick={() => router.push(`/actu/detail/${id}`)} // Navigate to the detail page with the post's ID
            className="bg-white hover:bg-green-700 text-green-400 border border-green-700 hover:text-white font-bold py-2 px-4 rounded mt-4"
          >
            Voir plus...
          </button>
        )}
      </div>
    </div>
  );
}

export function truncateHTMLWithTags(html, limit) {
  if (limit == null) return html;
  let charCount = 0;
  const truncatedHTML = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  function traverseNodes(node) {
    if (charCount >= limit) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const remainingChars = limit - charCount;
      const text = node.textContent.slice(0, remainingChars);
      charCount += text.length;
      truncatedHTML.push(text);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      truncatedHTML.push(`<${node.tagName.toLowerCase()}>`);
      for (let child of node.childNodes) {
        traverseNodes(child);
        if (charCount >= limit) break;
      }
      truncatedHTML.push(`</${node.tagName.toLowerCase()}>`);
    }
  }

  doc.body.childNodes.forEach(traverseNodes);
  return truncatedHTML.join("") + (charCount >= limit ? "[...]" : "");
}
