import {
  HomeIcon,
} from "components/Icons/Icons";
import { BsGraphUp } from "react-icons/bs";


import Markets from "./views/Portal/Markets";
import Holdings from "./views/Portal/Holdings";
import Home from "views/Portal/Home";
import { FaExchangeAlt } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import Rankings from "./views/Portal/Rankings";



var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon color="inherit" />,
    component: Home,
    layout: "/portal",
  },
  {
    path: "/markets",
    name: "Markets",
    icon: <FaExchangeAlt color="inherit" />,
    component: Markets,
    layout: "/portal",
  },
  {
    path: "/holdings",
    name: "Holdings",
    icon: <BsGraphUp color="inherit"/>,
    component: Holdings,
    layout: "/portal",
  },
  {
    path: "/rankings",
    name: "Rankings",
    icon: <MdLeaderboard color="inherit"/>,
    component: Rankings,
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
