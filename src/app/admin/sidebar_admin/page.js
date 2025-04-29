"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faBook,
  faComments,
  faMessage,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  SidebarProvider,
} from "../../../components/sidebare";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";

const links = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <FontAwesomeIcon icon={faHome} className="w-5 h-5" />,
  },
  {
    label: "Reunion",
    href: "/admin/reunion",
    icon: <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />,
  },
  {
    label: "Cours",
    href: "/admin/cours",
    icon: <FontAwesomeIcon icon={faBook} className="w-5 h-5" />,
  },
  {
    label: "Discussion",
    href: "/admin/discussion",
    icon: <FontAwesomeIcon icon={faComments} className="w-5 h-5" />,
  },
  {
    label: "Chat",
    href: "/admin/chat",
    icon: <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />,
  },
];

function SideBarLayoutAdmin() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const user = "Test";

  const logout = () => {
    swal({
      title: "Êtes-vous sûr?",
      text: "Vous allez être déconnecté de votre session.",
      icon: "warning",
      buttons: ["Annuler", "Oui, me déconnecter"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        removeToken();
        sessionStorage.clear();
        router.push("/");
      }
    });
  };

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarBody className="bg-gray-800 shadow-lg">
          <div className="flex flex-col h-full">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <SidebarLink
                  link={{
                    label: "Formation",
                    href: "/admin",
                    icon: (
                      <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-cyan-400 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                      </div>
                    ),
                  }}
                  className="font-bold text-lg text-gray-800 dark:text-white"
                />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              {links.map((link) => (
                <SidebarLink
                  key={link.href}
                  link={link}
                  className={`py-3 px-4 ${
                    pathname === link.href
                      ? "bg-gradient-to-r from-green-500 to-cyan-400 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } transition-colors duration-200`}
                />
              ))}
            </nav>

            <div className="p-4 relative">
              <button
                onClick={toggleProfileMenu}
                className="flex items-center space-x-2 w-full focus:outline-none"
              >
                <Avatar>
                  <AvatarImage src={`/img/eee.png`} alt="T" />
                  <AvatarFallback>
                    {user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <SidebarLink
                  link={{
                    label: "test",
                    href: "#",
                    icon: <span className="sr-only">Profile</span>,
                  }}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                />
              </button>

              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
                  >
                    <Link
                      href="/admin/profile"
                      onClick={toggleProfileMenu}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        toggleProfileMenu();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
                      Déconnexion
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </SidebarProvider>
  );
}

export default SideBarLayoutAdmin;
