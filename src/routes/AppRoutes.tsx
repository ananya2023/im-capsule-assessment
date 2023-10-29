import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTE_HOME } from "../constants/routes";
import MainAppLandingPage from "../pages/MainAppLandingPage";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/*  Routes */}
      <Route path="/" element={<Navigate to={`/${ROUTE_HOME}`} />} />
      <Route path="/" element={<Layout />}>
        <Route path={`${ROUTE_HOME}`} element={<MainAppLandingPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
