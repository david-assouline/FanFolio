// import
import Dashboard from "views/Portal/Dashboard";
import Tables from "views/Portal/Tables";
import Billing from "views/Portal/Billing";
import Profile from "views/Portal/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Documents from "./views/Portal/Documents";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/portal",
  },
  // {
  //   path: "/documents",
  //   name: "Documents",
  //   icon: <DocumentIcon color="inherit" />,
  //   component: Documents,
  //   layout: "/portal",
  // },
  // {
  //   path: "/home",
  //   name: "Policies",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Documents,
  //   layout: "/portal",
  // },
  // {
  //   path: "/home",
  //   name: "Forms",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Documents,
  //   layout: "/portal",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/portal",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/portal",
  // },
  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       icon: <PersonIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/portal",
  //     },
  //     // {
  //     //   path: "/signin",
  //     //   name: "Sign In",
  //     //   icon: <DocumentIcon color="inherit" />,
  //     //   component: SignIn,
  //     //   layout: "/auth",
  //     // },
  //     // {
  //     //   path: "/signup",
  //     //   name: "Sign Up",
  //     //   icon: <RocketIcon color="inherit" />,
  //     //   secondaryNavbar: true,
  //     //   component: SignUp,
  //     //   layout: "/auth",
  //     // },
  //   ],
  // },
];
export default dashRoutes;
