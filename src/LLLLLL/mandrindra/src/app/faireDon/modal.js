"use client";

import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function Modal({ isOpen, isClose }) {
  const stats = [
    { name: "Projet1", taux: "10%", budget: "2102000" },
    { name: "Projet2", taux: "20%", budget: "2102000" },
    { name: "Projet3", taux: "30%", budget: "2102000" },
    { name: "Projet4", taux: "10%", budget: "2102000" },
  ];
  return (
    <Dialog
      open={isOpen}
      onClose={isClose}
      className="relative"
      style={{ zIndex: "100" }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0  w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in "
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <button
                type="button"
                onClick={isClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Fermer</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Faire un don
                  </DialogTitle>
                  <div className="mt-2">
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
                      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                          <div
                            key={stat.name}
                            className="flex flex-col-reverse"
                          >
                            <Button color="green" variant="outlined">
                              Faire un don
                            </Button>

                            <dt className="text-base leading-7 text-black-300">
                              Taux d&apos;argent obtenu : {stat.taux}
                            </dt>
                            <dt className="text-base leading-7 text-black-300">
                              Budget : {stat.budget} Ar
                            </dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                              {stat.name}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
