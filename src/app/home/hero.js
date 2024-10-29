"use client";

import { IconButton, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  const imagePath = "/image/vftm/sary13.png";
  const HomeImage = `${imagePath}`;
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="relative min-h-screen w-full h-screen bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full" />
        <div className="grid min-h-screen px-8">
          <div
            className="container relative z-10 my-auto mx-auto grid place-items-center text-center item-center"
            style={{ paddingTop: "100px" }}
          >
            <Typography variant="h3" color="white">
              GROUPEMENT POUR LE D&Eacute;VELOPPEMENT DES PAYSANS DE
              HAUTE-MATSIATRA
            </Typography>
            <Typography
              variant="lead"
              color="green"
              className="mt-4 mb-12 w-full lg:max-w-3xl"
              style={{
                // background: "rgba(255, 255, 255, 0.3)", // Couleur de fond semi-transparente
                // padding: "20px", // Un peu plus de rembourrage pour le texte
                // borderRadius: "10px",
                // backdropFilter: "blur(10px)", // Ajout d'un flou d'arrière-plan
                // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Optionnel : ajout d'une ombre
                color: "white",
              }}
            >
              Paysans professionnels : nourrir sa famille et vivre de son
              m&eacute;tier
            </Typography>

            <Link href={"/contact"}>
              <Button
                color="green"
                className="mt-5"
                // onClick={} // Appel de la fonction pour rediriger
              >
                Contactez-nous
              </Button>
            </Link>

            <div className="gap-8 flex">
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-twitter text-base" />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
