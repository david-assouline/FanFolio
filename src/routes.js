// import
import Dashboard from "views/Portal/Home";

import {
  HomeIcon,
  DocumentIcon,
} from "components/Icons/Icons";
import { BsGraphUp } from "react-icons/bs";


import Trade from "./views/Portal/Trade";
import Holdings from "./views/Portal/Holdings";



var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/portal",
  },
  {
    path: "/trade",
    name: "Trade",
    icon: <DocumentIcon color="inherit" />,
    component: Trade,
    layout: "/portal",
  },
  {
    path: "/holdings",
    name: "Holdings",
    icon: <BsGraphUp color="inherit"/>,
    component: Holdings,
    layout: "/portal",
  },
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
