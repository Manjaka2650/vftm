"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useParams } from "next/navigation"; // useParams to access route params

import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import api, { lien } from "../../../../lien";
import { useEffect, useState } from "react";
import { Project } from "../..";

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
  const { id } = useParams();
  const [reunion, setreunion] = useState({});
  const getDetail = async () => {
    try {
      const response = await api.get("/get-single-reunion/" + id);
      setreunion(response.data);
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
        {reunion && Object.keys(reunion).length > 0 && (
          <Project
            image={`${lien}${reunion.image}`}
            id={reunion.id_reunion}
            content={reunion.content}
            titre={reunion.titre}
            limit={null}
            plusVisible={false}
          />
        )}
      </section>
    </section>
  );
}
