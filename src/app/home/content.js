"use client";

import React from "react";
import Image from "next/image";
// import Lien from "../../link";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-6">
      {/* Plateforme d'Organisations Paysannes Section */}
      <div className="flex flex-col md:flex-row w-full mb-12">
        <div className="md:w-1/2 flex flex-col justify-between">
          <Typography color="green" variant="h4">
            UNE PLATEFORME D&apos;ORGANISATIONS PAYSANNES
          </Typography>
          <Typography className="my-4 font-normal text-black">
            VFTM a &acute;t&acute; cr&acute; en 2006, compos&acute;e de 22
            organisations paysannes de la R&acute;gion Matsiatra Ambony,
            repr&acute;sentant plus de 3500 paysans, sur les 7 districts et 58
            communes. C&apos;est la seule plateforme syndicale de la
            R&acute;gion Haute Matsiatra.
          </Typography>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between mt-8 md:mt-0">
          <Typography variant="h4" color="blue-gray" className="mb-6">
            Instances
          </Typography>
          <Typography className="font-normal text-black">
            <span>AG: 3 repr&acute;sentants/Organisations</span>
            <br />
            <span>Conseil d&apos;administration: 15</span>
            <br />
            <span>&acute;quipe ex&acute;cutive: 07 techniciens</span>
            <br />
            <span>Comit&acute; de surveillance: 02 &acute;lus</span>
            <br />
            <span>
              Les comptes sont soumis chaque ann&acute;e &agrave; un audit
              externe.
            </span>
          </Typography>
        </div>
      </div>
      <div className="mx-auto w-2/3">
        {/* Image Section */}
        <Image
          width={768}
          height={500}
          src={"/image/vftm/sary11.JPG"}
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small" className="font-normal text-black">
          Photo par Justin
        </Typography>

        {/* Vision Section */}
        <Typography variant="h4" color="green" className="mt-8 mb-6">
          VISION
        </Typography>

        <Typography className="my-10 font-normal text-black">
          D&acute;fendre l&apos;int&acute;ret commun des paysans, et surtout
          l&apos;agriculture familiale.
          <br />
          Am&acute;lioration des revenus des EAF, et faire vivre &agrave; leur
          m&acute;tier paysanne.
          <br />
          Autonomisation de l&apos;organisation en terme de gestion et
          financi&egrave;re.
          <br />
        </Typography>

        {/* Image Card Section */}
        <div className="border-b border-blue-gray-100 mb-6">
          <Card shadow={false} className="p-0">
            <CardBody className="p-0 pb-5">
              <div className="w-full mb-4 h-[500px]">
                <Image
                  width={768}
                  height={768}
                  src={"/image/vftm-actu/img20.png"}
                  className="md:w-full object-cover h-full rounded-lg"
                  alt=""
                />
              </div>
              <Typography className="font-bold text-sm text-gray-700">
                par Justin
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Content;
