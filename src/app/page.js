// components
"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// sections
import Hero from "./home/hero";
import Contenu3 from "./home/contenu3";
import Contenu2 from "./home/content";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />

      <Contenu3 />
      <ActuAlite />
      <section className="flex justify-center mb-20">
        <Pagination currentPage={1} totalPages={6} />
      </section>
      <Footer />
    </>
  );
}

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
                : "text-gray-700 hover:bg-gray-600 hover:text-white"
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
                : "text-gray-700 hover:bg-gray-600  hover:text-white"
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
                : "text-gray-700 hover:bg-gray-600 hover:text-white"
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

const ValueCard = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div>{icon}</div>
      <h3 className="text-2xl font-bold mt-4 text-green-500">{title}</h3>{" "}
      {/* Updated color to green */}
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const ValueProposition = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ValueCard
          icon={
            <Image
              src={"/logos/glob.png"}
              alt="Globe Icon"
              width={2000}
              height={2000}
              className="w-full h-32 object-cover rounded mb-4"
            />
          }
          title="D&Eacute;VELOPPEMENT DURABLE"
          description="Notre engagement s'inscrit dans l'Agenda 2030 de d&Eacute;veloppement durable."
          color="bg-green-500"
        />
        <ValueCard
          icon={
            <Image
              src={"/logos/coeur.png"}
              alt="Globe Icon"
              width={2000}
              height={2000}
              className="w-full h-32 object-cover rounded mb-4"
            />
          }
          title="&Eacute;CHANGE ET RESPECT"
          description="Favoriser des relations basées sur la confiance et la compréhension mutuelle."
          color="bg-blue-500"
        />
        <ValueCard
          icon={
            <Image
              src={"/logos/person.png"}
              alt="Person Icon"
              width={2000}
              height={2000}
              className="w-full h-32 object-cover rounded mb-4"
            />
          }
          title="SECURITE ALIMENTAIRE"
          description="Assurer un accès fiable à des aliments nutritifs et suffisants pour tous."
          color="bg-yellow-500"
        />
      </div>
    </div>
  );
};
const ActuAlite = () => {
  return (
    <div className="flex flex-col items-center mb-20 m-10 bg-white">
      {/* Titre centr&eacute; et plus grand */}
      <h1 className="text-4xl font-bold text-center ">Nos actualit&eacute;</h1>

      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
        <Component image={"/image/vftm/sary12.png"} id={1} />
        <Component2 image={"/image/vftm/sary9.JPG"} id={2} />
        <Component3 image={"/image/vftm/sary13.png"} id={3} />
      </div>
    </div>
  );
};

function Component({ image, id }) {
  const router = useRouter();
  return (
    <div className="bg-white ">
      {/* Carte avec fond blanc, ombre plus forte et coins arrondis */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Image
          src={image}
          alt="People at a gathering"
          width={600}
          height={300}
          className="shadow-lg rounded-lg w-full h-48 object-cover"
        />
        <h2 className="text-2xl font-bold text-green-500 mt-4">
          Le rapport annuel 2023 est en ligne
        </h2>
        <p className="mt-2 text-black">
          Pr&eacute;sence, participation interactive et &eacute;motion des
          membres et invit&eacute;es &agrave; la 13e assembl&eacute;e
          g&eacute;n&eacute;rale d&apos;Agro-sans-fronti&egrave;re Suisse. Un
          soutien &eacute;vident et un encouragement pour le comit&eacute; et
          les chef-fe-s de projet en Afrique de l&apos;Ouest et [...]
        </p>
        {/* Bouton vert */}
        <div className="flex flex-row justify-between">
          <div></div>
          <button
            onClick={() => router.push(`/actu/detail/${id}`)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            PLUS...
          </button>
        </div>
      </div>
    </div>
  );
}
function Component2({ image, id }) {
  const router = useRouter();
  return (
    <div className="bg-white ">
      {/* Carte avec fond blanc, ombre plus forte et coins arrondis */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Image
          src={image}
          alt="People at a gathering"
          width={600}
          height={300}
          className="shadow-lg rounded-lg w-full h-48 object-cover"
        />
        <h2 className="text-2xl font-bold text-green-500 mt-4">
          Bilan tr&egrave;s positif &agrave; Madagascar
        </h2>
        <p className="mt-2 text-black">
          Pr&eacute;sence, participation interactive et &eacute;motion des
          membres et invit&eacute;es &agrave; la 13e assembl&eacute;e
          g&eacute;n&eacute;rale d&apos;Agro-sans-fronti&egrave;re Suisse. Un
          soutien &eacute;vident et un encouragement pour le comit&eacute; et
          les chef-fe-s de projet en Afrique de l&apos;Ouest et [...]
        </p>
        {/* Bouton vert */}
        <div className="flex flex-row justify-between">
          <div></div>
          <button
            onClick={() => router.push(`/actu/detail/${id}`)} // Navigate to the detail page with the post's ID
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            PLUS...
          </button>
        </div>
      </div>
    </div>
  );
}
function Component3({ image, id }) {
  const router = useRouter();
  return (
    <div className="bg-white ">
      {/* Carte avec fond blanc, ombre plus forte et coins arrondis */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Image
          src={image}
          alt="People at a gathering"
          width={600}
          height={300}
          className="shadow-lg rounded-lg w-full h-48 object-cover"
        />
        <h2 className="text-2xl font-bold text-green-500 mt-4">
          Le projet se diversifie &agrave; Madagascar
        </h2>
        <p className="mt-2 text-black">
          Le site d&apos;Hamdallaye ou « Tilapia City » devient un centre de
          comp&eacute;tences multi-domaines qui regroupera &agrave; terme les
          bassins pour la pisciculture, le local de stockage
          r&eacute;frig&eacute;r&eacute; existant et les bâtiments abritant les
          microentreprises en cours de cr&eacute;ation[...]
        </p>
        {/* Bouton vert */}
        <div className="flex flex-row justify-between">
          <div></div>
          <button
            onClick={() => router.push(`/actu/detail/${id}`)} // Navigate to the detail page with the post's ID
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            PLUS...
          </button>
        </div>
      </div>
    </div>
  );
}
