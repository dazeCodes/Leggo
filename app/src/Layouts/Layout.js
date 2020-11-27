import React from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/Sidebar/SideBar";

export default function DashboardLayout(props) {

  console.log();
  return (
    <>
      <Header />
      <main>
        <SideBar route={props.routeData.route} activeNav={props.routeData.nav} />
        {props.children}
      </main>
    </>
  );
}
