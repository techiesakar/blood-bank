import React from "react";
import { Header } from "../navigation/header/header";
import MainWrapper from "./main-wrapper";
import { Sidebar } from "../navigation/sidebar/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default DashboardWrapper;
