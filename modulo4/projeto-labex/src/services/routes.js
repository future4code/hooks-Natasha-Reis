import HomePage from "../components/HomePage";
import ListTrips from "../components/ListTripsPage";
import LoginPage from "../components/admin-pages/LoginPage";
import AplicationTrips from "../components/ApplyTripForm";
import ListTripsCreate from "../components/admin-pages/CreateTrip";
import AdminTripList from "../components/admin-pages/TripList";
import DetailsPageTrip from "../components/admin-pages/TripDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export const routesNames = {
  tripList: "/trips/list",
  login: "/login",
  applyTripForm: "/trips/application",
  adminListTrips: "/admin/trips/list",
  adminCreateTrip: "/admin/trips/create",
  adminTripDetails: "/admin/trips/:id",
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={routesNames.tripList} element={<ListTrips />} />
        <Route path={routesNames.login} element={<LoginPage />} />
        <Route path={routesNames.applyTripForm} element={<AplicationTrips />} />
        <Route path={routesNames.adminListTrips} element={<AdminTripList />} />
        <Route
          path={routesNames.adminCreateTrip}
          element={<ListTripsCreate />}
        />
        <Route
          path={routesNames.adminTripDetails}
          element={<DetailsPageTrip />}
        />
      </Routes>
    </BrowserRouter>
  );
};
