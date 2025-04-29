"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useParams } from "next/navigation"; // useParams to access route params

import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";

export default function PostDetailPage() {
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
            Nos Actualit&eacute;s
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>{" "}
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Actualit&eacute;s {" >  "}
            </p>{" "}
            <p className="text-white hover:text-gray-300 cursor-pointer">
              D&eacute;tail
            </p>{" "}
          </div>
        </div>
      </div>
      <section className="w-full max-w-6xl mx-auto flex flex-col px-4  space-y-8 mb-20">
        <Project image={"/image/vftm/sary11.JPG"} />
      </section>
    </section>
  );
}
function Project({ image }) {
  const galleryImages = [
    "/image/vftm/sary1.JPG",
    "/image/vftm/sary2.JPG",
    "/image/vftm/sary3.JPG",
    "/image/vftm/sary4.jpg",
    "/image/vftm/sary5.jpg",
  ];
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
          Le 13 mai 2022, VFTM a renou&eacute; avec son assembl&eacute;e
          g&eacute;n&eacute;rale tenue en pr&eacute;sentiel. Un plaisir toujours
          renouvel&eacute; de retrouver nos membres de Suisse romande et
          d&apos;Outre-Sarine qui avaient fait le d&eacute;placement
          jusqu&apos;&agrave; l&apos;Agroscope de Changins. La
          pr&eacute;sentation des trois projets g&eacute;r&eacute;s par Robert
          Girardet (Niger), Jacques Auderset (S&eacute;n&eacute;gal) et Ruth
          Rossier (Madagascar) a suscit&eacute; un grand int&eacute;rêt et de
          nombreux &eacute;changes de la part des participant·e·s. Le rapport
          annuel de nos activit&eacute;s en 2021 remis &agrave; nos
          invit&eacute;·e·s a compl&eacute;t&eacute; les informations
          donn&eacute;es. Cette assembl&eacute;e a &eacute;galement
          &eacute;t&eacute; une tr&egrave;s belle occasion de rendre hommage
          &agrave; notre pr&eacute;sident fondateur, Werner Reust, en le nommant
          par acclamation Pr&eacute;sident d&apos;honneur de VFTM . Apr&egrave;s
          dix ann&eacute;es d&apos;engagement en Suisse et sur le terrain,
          Werner a transmis le flambeau de la pr&eacute;sidence &agrave; notre
          coll&egrave;gue, Philippe Deriaz, en septembre 2021.
        </p>
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
