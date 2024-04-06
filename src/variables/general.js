// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
  FaFileExcel,
  FaFileWord
} from "react-icons/fa";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaFilePdf,
    title: "Policy Summary Uploaded",
    date: "22 DEC 7:20 PM",
    color: "red.500",
  },
  {
    logo: FaFileExcel,
    title: "Confirmation Of Benefits",
    date: "21 DEC 11:21 PM",
    color: "green",
  },
  {
    logo: FaFileWord,
    title: "Beneficiary Designation",
    date: "21 DEC 9:28 PM",
    color: "blue.500",
  },
  {
    logo: FaFilePdf,
    title: "Claims History Updated",
    date: "20 DEC 3:52 PM",
    color: "red.500",
  },
  {
    logo: FaFilePdf,
    title: "Claims History Uploaded",
    date: "19 DEC 11:35 PM",
    color: "red.500",
  },
];

export const tablesTableData = [
  {
    logo: FaFilePdf,
    name: "Policy Summary",
    email: "#SCS-001",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
    color: "red.500",
  },
  {
    logo: FaFilePdf,
    name: "Claims History",
    email: "#SCS-002",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
    color: "red.500",
  },
  {
    logo: FaFileExcel,
    name: "Confirmation of Coverage",
    email: "#SCS-003",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
    color: "green",
  },
  {
    logo: FaFileWord,
    name: "Beneficiary Designation",
    email: "#SCS-004",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
    color: "blue.500"
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "Policy Summary",
    code: "#SCS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
    color: "red.500"
  },
  {
    date: "Claims History",
    code: "#SCS-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
    color: "red.500"
  },
  {
    date: "Confirmation of Coverage",
    code: "#SCS-126749",
    price: "$250",
    logo: FaFileExcel,
    format: "EXCEL",
    color: "green",
  },
  {
    date: "Beneficiary Designation",
    code: "#SCS-212562",
    price: "$560",
    logo: FaFileWord,
    format: "WORD",
    color: "blue.500",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
