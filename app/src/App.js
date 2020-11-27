import React from "react";
import DashboardLayout from "./Layouts/Layout";
import Home from "./Pages/Home/Index";

import { globalHistory, Router } from "@reach/router";
import BitcoinPage from "./Pages/Bitcoin/Index";

function App() {
  const route = globalHistory.location.pathname;
  function activeNav(activeRoute) {
    if (activeRoute === route) {
      return " active";
    } else {
      return "";
    }
  }

  return (
    <>
      <DashboardLayout
        routeData={{
          route,
          nav: activeNav,
        }}
      >
        <Router>
          <Home path="/" />
          <BitcoinPage path="/bitcoin" />
        </Router>
      </DashboardLayout>
    </>
  );
}

export default App;
