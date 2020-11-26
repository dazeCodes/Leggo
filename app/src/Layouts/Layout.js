import React from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/Sidebar/SideBar";

export default function DashboardLayout(props) {
  return (
    <>
      <Header />
      <main>
        <SideBar />
        {props.children}
      </main>
    </>
  );
}
