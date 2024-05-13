import React from "react";
import { EventSidebar } from "../page-components/events/single-event/event-sidebar";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid grid-cols-12 h-full gap-10">
      <div className="lg:col-span-9 md:col-span-8 col-span-12 sm:order-1 order-2">
        {children}
      </div>
      <aside className="lg:col-span-3 md:col-span-8 col-span-12 relative sm:order-2 order-1 ">
        {/* Here goes navitems for lab */}
        <EventSidebar />
      </aside>
    </section>
  );
};

export default EventLayout;
