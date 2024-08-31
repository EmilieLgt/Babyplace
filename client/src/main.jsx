import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import myAxios from "./services/myAxios";

import App from "./App";

// page components

import Home from "./pages/Home/Home";

import NurseryDetails from "./pages/NurseryDetails/NurseryDetails";
import NurseryRegisterPage from "./pages/Register/nurseryRegisterPage";
import PageLoginPro from "./pages/Login/LoginPro";
import NurseriesSearchLille from "./pages/Platform/NurseriesSearchLille";
import NurseriesSearchRennes from "./pages/Platform/NurseriesSearchRennes";
import ContactPage from "./pages/Contact/ContactPage";
import ParentForm from "./components/accueil/ParentForm/ParentForm";
import ChildForm from "./components/accueil/ChildForm/ChildForm";
import DashboardComponent from "./pages/Dashboard/DashboardComponent";

// router creation

const getDataAddresses = async () => {
  try {
    const [lilleResponse, rennesResponse] = await Promise.all([
      fetch("/addresses/lille-addresses.json"),
      fetch("/addresses/rennes-addresses.json"),
    ]);
    const lilleData = await lilleResponse.json();
    const rennesData = await rennesResponse.json();
    return { lille: lilleData, rennes: rennesData };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return { lille: [], rennes: [] };
  }
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageLoginPro />,
      },
      {
        path: "/creche/lille",
        element: <NurseriesSearchLille />,
        loader: async () => {
          const response = await myAxios.get("/api/nursery?city=Lille");
          return response.data;
        },
      },
      {
        path: "/creche/rennes",
        element: <NurseriesSearchRennes />,
        loader: async () => {
          const response = await myAxios.get("/api/nursery?city=Rennes");
          return response.data;
        },
      },
      {
        path: "/creche/:id",
        element: <NurseryDetails />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`api/nursery/${params.id}`);
          return response.data;
        },
      },
      {
        path: "/inscription/creche",
        element: <NurseryRegisterPage />,
        loader: getDataAddresses,
      },

      {
        path: "/inscription/parent",
        element: <ParentForm />,
      },
      {
        path: "/inscription/enfant",
        element: <ChildForm />,
      },
      {
        path: "/accueil",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashboardComponent />,
        // Supprimez le loader et l'action ici
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
