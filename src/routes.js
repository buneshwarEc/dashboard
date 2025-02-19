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
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import MedicalHistory from "views/MedicalHistory";
import MedicalDiary from "views/MedicalDiary";
import CatheterTransaction from "views/CatheterTransaction";
import CreateCathere from "views/CreateCathere";
import Testmonial from "views/Testmonial";
import Login from "components/Login/Login";

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
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },

  {
    path: "/Medical Diary",
    name: "Medical Diary",
    icon: "nc-icon nc-chart-pie-35",
    component: MedicalDiary,
    layout: "/admin",
  },
  {
    path: "/CreateCathere",
    name: "Create Cathere",
    icon: "nc-icon nc-chart-pie-35",
    component: CreateCathere,
    layout: "/admin",
  },
  {
    path: "/CatheterTransaction",
    name: "Catheter Transaction",
    icon: "nc-icon nc-chart-pie-35",
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

  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
];

export default dashboardRoutes;
