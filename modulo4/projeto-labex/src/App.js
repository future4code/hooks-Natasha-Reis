import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ListTrips from "./components/ListTripsPage";
import LoginPage from "./components/LoginPage";
import AplicationTrips from "./components/ApplicationFormPage";
import DetailsPageTrip from "./components/TripDetailsPage";
import ListTripsCreate from "./components/CreateTripPage";
import AdminTripList from "./components/AdminTripList";

export const routesNames = {
  tripList: "/trips/list",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={routesNames.tripList} element={<ListTrips />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/trips/application" element={<AplicationTrips />} />
        <Route path="/admin/trips/list" element={<AdminTripList />} />
        <Route path="/admin/trips/create" element={<ListTripsCreate />} />
        <Route path="/admin/trips/:id" element={<DetailsPageTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
