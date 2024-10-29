"use client";

import React from "react";
import Activite2 from "./typeActivity2";
import Activite3 from "./typeActivity3";
// import Image from "next/image";

import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

export function Page() {
  return (
    <>
      <div className="relative  bg-[url('/image/vftm-actu/img7.png')] bg-cover bg-no-repeat">
        <Typography variant="h3" className="text-center" color="white">
          Nos Activit&eacute;s
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mb-8 w-full text-center font-normal"
          color="white"
          style={{ padding: "4px 30px 4px 30px" }}
        >
          Les 3 grandes activit&eacute;s du Groupement pour le
          d&eacute;veloppement des paysans de la Haute Matsiatra .
        </Typography>
      </div>
      <section
        className="w-full max-w-6xl mx-auto flex flex-col px-4 py-20"
        style={{ paddingTop: "70px" }}
      >
        <Typography
          variant="h3"
          className="leading-[45px] mb-4 !text-green-900 "
        >
          Renforcement des capacit&eacute;s des organisations paysannes membres
          de VFTM
        </Typography>
        <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" md:border-r px-3 border-blue-gray-100">
            <div className="!border-b  border-blue-gray-100 mb-5">
              <Card shadow={false} className="p-0">
                <CardBody
                  className="p-0 pb-5"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h5"
                    className="leading-[45px] mb-4 !text-gray-900 "
                    style={{ paddingRight: "10px" }}
                  >
                    1.
                  </Typography>
                  <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                    Formations &agrave; la gestion financi&egrave;re et suivi de
                    la tenue comptable des organisations paysannes,
                    accompagnement pour l&apos;&eacute;laboration de rapports .
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className=" md:border-r px-3 border-blue-gray-100">
            <div className="!border-b  border-blue-gray-100 mb-5">
              <Card shadow={false} className="p-0">
                <CardBody
                  className="p-0 pb-5"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h5"
                    className="leading-[45px] mb-4 !text-gray-900 "
                    style={{ paddingRight: "10px" }}
                  >
                    2.
                  </Typography>
                  <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                    Appui &agrave; la gestion associative (&eacute;change entre
                    &eacute;lus) .
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className=" md:border-r px-3 border-blue-gray-100">
            <div className="!border-b  border-blue-gray-100 mb-5">
              <Card shadow={false} className="p-0">
                <CardBody
                  className="p-0 pb-5"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h5"
                    className="leading-[45px] mb-4 !text-gray-900 "
                    style={{ paddingRight: "10px" }}
                  >
                    3.
                  </Typography>
                  <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                    Formation des &eacute;lus et des techniciens &agrave; la
                    gestion des organisations paysannes.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className=" md:border-r px-3 border-blue-gray-100">
            <div className="!border-b  border-blue-gray-100 mb-5">
              <Card shadow={false} className="p-0">
                <CardBody
                  className="p-0 pb-5"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h5"
                    className="leading-[45px] mb-4 !text-gray-900 "
                    style={{ paddingRight: "10px" }}
                  >
                    4.
                  </Typography>
                  <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                    Accompagnement des organisations paysannes dans leur
                    r&eacute;flexion pour d&eacute;velopper des services
                    &eacute;conomiques pertinents .
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className=" md:border-r px-3 border-blue-gray-100">
            <div className="!border-b  border-blue-gray-100 mb-5">
              <Card shadow={false} className="p-0">
                <CardBody
                  className="p-0 pb-5"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h5"
                    className="leading-[45px] mb-4 !text-gray-900 "
                    style={{ paddingRight: "10px" }}
                  >
                    5.
                  </Typography>
                  <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                    Aide aux organisations paysannes pour la mise en
                    r&eacute;seau et la recherche de partenaires techniques et
                    financiers .
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <Activite2 />

        <Activite3 />
      </section>
    </>
  );
}

export default Page;
