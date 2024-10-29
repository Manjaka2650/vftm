"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useParams } from "next/navigation"; // useParams to access route params

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function Commite() {
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
  return (
    <section className="pt-20">
      <div className="relative bg-cover bg-no-repeat p-10 items-center bg-green-600">
        <div className="flex flex-row justify-between mt-5">
          <Typography
            variant="h3"
            className="text-white " // Added a color for hover state
          >
            Comit&eacute;
          </Typography>
          <div className="flex flex-wrap">
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Accueil {" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Association{" >  "}
            </p>
            <p className="text-white hover:text-gray-300 cursor-pointer">
              Comit&eacute;
            </p>
          </div>
        </div>
      </div>
      {/* <section className="w-full max-w-6xl mx-auto flex flex-col px-4  space-y-8 mb-20"> */}
      <ProfileComponentTaratra />
      <ProfileComponentDadafara />
      {/* </section> */}
    </section>
  );
}

const ProfileComponentTaratra = () => {
  return (
    <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="flex flex-row md-flex-col">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={"/image/vftm/taratra.JPG"} // Replace with your image path
            alt="Profile"
            width={1000}
            height={1000}
            className="shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-green-700 uppercase">
            Taratriniaina RAZAFIMAHATRADRAIBE
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mt-1">
            Directeur
          </h3>
          <p className="mt-2 text-gray-700">
            Agriculteur-Maraîcher. Maîtrise feacute;deacute;rale en
            arboriculture. Speacute;cialiste en production d&apos;oignons,
            pommes de terre et graines maraîch&egrave;res.
          </p>

          <p className="mt-2 text-gray-700">
            Chef de projet chez APPNAL (Association des producteurs de pommes de
            terre nouvelles de l&apos;Arc leacute;manique).
          </p>

          <p className="mt-2 text-gray-700">
            Creacute;ateur et deacute;veloppeur des concepts pommes de terre:
            Amandine (Migros), Celtiane (Coop), Gwenne (Raclette seacute;lection
            Migros), etc.
          </p>

          <p className="mt-2 text-gray-700">
            Entraide et deacute;veloppement au Niger, en particulier.
          </p>

          <p className="mt-4 text-gray-900 font-semibold">
            Domaines d&apos;expeacute;rience –
            <span className="font-normal">
              {" "}
              Creacute;ation, production et deacute;veloppement de produits
              agricoles. Gestion de la chaîne de production pomme de terre.
            </span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-900 font-semibold">
        Compeacute;tences –
        <span className="font-normal">
          {" "}
          Management, analyse de projets agricoles, deacute;veloppement de
          concepts, relations humaines.
        </span>
      </p>
    </div>
  );
};

const ProfileComponentDadafara = () => {
  return (
    <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="flex flex-row md-flex-col">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={"/image/vftm/taratra.JPG"} // Replace with your image path
            alt="Profile"
            width={1000}
            height={1000}
            className="shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-green-700 ">
            Jean Baptiste RASAMY
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mt-1">
            Pr&eacute;sident
          </h3>
          <p className="mt-2 text-gray-700">
            Agriculteur-Maraîcher. Maîtrise feacute;deacute;rale en
            arboriculture. Speacute;cialiste en production d&apos;oignons,
            pommes de terre et graines maraîch&egrave;res.
          </p>

          <p className="mt-2 text-gray-700">
            Chef de projet chez APPNAL (Association des producteurs de pommes de
            terre nouvelles de l&apos;Arc leacute;manique).
          </p>

          <p className="mt-2 text-gray-700">
            Entraide et deacute;veloppement de Madagascar, en particulier.
          </p>

          <p className="mt-4 text-gray-900 font-semibold">
            Domaines d&apos;expeacute;rience –
            <span className="font-normal">
              {" "}
              Creacute;ation, production et deacute;veloppement de produits
              agricoles. Gestion de la chaîne de production pomme de terre.
            </span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-900 font-semibold">
        Compeacute;tences –
        <span className="font-normal">
          {" "}
          Management, analyse de projets agricoles, deacute;veloppement de
          concepts, relations humaines.
        </span>
      </p>
    </div>
  );
};
