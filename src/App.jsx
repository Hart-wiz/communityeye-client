
import React from 'react'


import AbiaNews from "./components/News/News";
import ReportForm from "./components/Report/Usereport";
import ReportsFeed from "./components/Report/ReportsFeed";
import EarlyWarnings from "./components/Report/EarlyWarnings";
import MissingPersonForm from "./components/Report/MissingPersonForm";
import WantedPersonForm from "./components/Report/WantedPersonForm";
import NotificationPanel from "./components/Notification/NotificationPanel";
import ExploreCommunity from './components/Explorecommunity/ExploreCommunity';
import AuthForm from './pages/AuthForms';

import Homepage from "./pages/Homepage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/AbiaNews", element: <AbiaNews /> },
  { path: "/ReportForm", element: <ReportForm /> },
  { path: "/ReportsFeed", element: <ReportsFeed /> },
  { path: "/EarlyWarnings", element: <EarlyWarnings /> },
  { path: "/missing-person", element: <MissingPersonForm /> },
  { path: "/wanted-person", element: <WantedPersonForm /> },
  { path: "/notifications", element: <NotificationPanel /> },
  {path: "/report", element: <ReportForm />},
  {path: "/ExploreCommunity", element: <ExploreCommunity />},
  {path: "/auth" , element: <AuthForm/>}
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
