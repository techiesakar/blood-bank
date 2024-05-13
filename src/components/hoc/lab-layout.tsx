import React from "react";
import { LabSidebar } from "../navigation/lab/lab-sidebar";

const LabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid grid-cols-12 h-full gap-10">
      <div className="lg:col-span-9 md:col-span-8 col-span-12 sm:order-1 order-2">
        {children}
      </div>
      <aside className="lg:col-span-3 md:col-span-8 col-span-12 relative sm:order-2 order-1 ">
        {/* Here goes navitems for lab */}
        <LabSidebar />
      </aside>
    </section>
  );
};

export default LabLayout;
