"use client";

import { cn } from "../../lib/utils";
import React from "react";
import SideBarLayoutAdmin from "./sidebar_admin/page";

export default function IsApprenantLayout({ children }) {
  return (
    <section>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-screen"
        )}
      >
        <SideBarLayoutAdmin />
        {children}
      </div>
    </section>
  );
}
