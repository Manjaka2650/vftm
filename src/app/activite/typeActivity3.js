"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

export default function TypeActivity3() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 py-20">
      <Typography variant="h3" className="leading-[45px] mb-4 !text-green-900 ">
        Actions syndicales
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
                  Concertation entre organisations paysannes : r&eacute;union
                  des pr&eacute;sidents .
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
                  Plaidoyer -lobbying aupr&egrave;s des autorit&eacute;s et
                  partenaires techniques et financi&egrave;res (acteur de
                  d&eacute;veloppement)
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
                  S’informer, collecter et traiter l’information et la rendre
                  accessible aux paysans (Constitution de
                  r&eacute;f&eacute;rences technico-&eacute;conomiques) .
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
                  Renforcement de capacit&eacute; des &eacute;lus (prise de
                  parole, porte-parole) .
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
                  Partenariat avec SOA (volet syndical) .
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Typography variant="h3" className="leading-[45px] mb-4 !text-gray-900 ">
        Les grandes th&eacute;matiques
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
                  6.
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Protection et valorisation des semences (maraichage, pomme de
                  terre): commercialisation, consommation .
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
                  7.
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Partenariat avec la R&eacute;gion HM pour le suivi des
                  fili&egrave;res .
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
                  8.
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Organisation des ateliers r&eacute;gional avec des
                  th&eacute;matiques bien d&eacute;fini .
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
