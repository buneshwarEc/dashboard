/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./pages/Dashboard.js";
import UserProfile from "./pages/UserProfile/UserProfile.js";
import TableList from "./pages/TableList.js";
import Typography from "./pages/Typography.js";
import Icons from "./pages/Icons.js";
import Maps from "./pages/Maps.js";
import Notifications from "./pages/Notifications.js";
import Upgrade from "./pages/Upgrade.js";
import MedicalHistory from "./pages/MedicalHistory";
import MedicalDiary from "./pages/MedicalDiary/MedicalDiary";
import CatheterTransaction from "./pages/CatheterTransaction";
import CreateCathere from "./pages/CreateCathere/CreateCathere";
import Testmonial from "./pages/Testmonial";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layers-3", //nc-layers-3, nc-grid-45
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },

  {
    path: "/CreateCathere",
    name: "PCN Catheter",
    icon: "nc-icon nc-chart-pie-35",
    component: CreateCathere,
    layout: "/admin",
  },
  {
    path: "/Medical Diary",
    name: "Medical Diary",
    icon: "nc-icon nc-single-copy-04",
    component: MedicalDiary,
    layout: "/admin",
  },
  {
    path: "/CatheterTransaction",
    name: "Catheter Transaction",
    icon: "nc-icon nc-paper-2",
    component: CatheterTransaction,
    layout: "/admin",
  },
  {
    path: "/Testmonial",
    name: "Testmonial",
    icon: "nc-icon nc-chart-pie-35",
    component: Testmonial,
    layout: "/admin",
  },

  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
