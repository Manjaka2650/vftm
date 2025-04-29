"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useParams } from "next/navigation"; // useParams to access route params

import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import api, { lien } from "../../../../lien";
import { useEffect, useState } from "react";
import { truncateHTMLWithTags } from "../../../actu";

export default function ProjetDetailPage() {
  // const params = useParams(); // get the dynamic route parameters
  // const { id } = params; // destructure the ID from the params

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

function Content() {
  const { id } = useParams();
  const [projet, setprojet] = useState({});
  const getDetail = async () => {
    try {
      const response = await api.get("/get-single-projet/" + id);
      setprojet(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section className="pt-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Projet
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>{" "}
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Projet
            </p>{" "}
          </div>
        </div>
      </div>

      <section className="w-full max-w-6xl mx-auto flex flex-col px-4  space-y-8 mb-20">
        {projet && projet.image ? (
          <Project
            image={`${lien}${projet.image}`}
            titre={projet.titre}
            content={projet.content}
            amountCollected={projet.montant_obtenu}
            totalRequired={projet.montant_voulu}
          />
        ) : (
          <p>Projet non trouv&eacute;</p>
        )}
      </section>
    </section>
  );
}
function Project({ image, titre, content, amountCollected, totalRequired }) {
  const truncatedMachin = truncateHTMLWithTags(content, null);

  const galleryImages = [
    "/image/vftm-actu/img1.png",
    "/image/vftm-actu/img2.png",
    "/image/vftm-actu/img3.png",
    "/image/vftm-actu/img4.png",
    "/image/vftm-actu/img5.png",
  ];
  return (
    <div className="container mx-auto p-4 flex flex-col  ">
      <Image
        src={image}
        alt="Malagasy Project"
        width={1000} // Aspect ratio-based width
        height={500} // Aspect ratio-based height
        className=" w-[80vw] h-[50vh] object-cover mb-5" // Set image size
      />
      <div>
        <h1 className="text-2xl font-bold text-green-600 mb-4 uppercase">
          {titre}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: truncatedMachin }}
          className="text-lg text-gray-700 mt-4 mb-4  w-full"
        />
      </div>
      <div className="w-full flex flex-wrap  mt-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-[20%]">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
