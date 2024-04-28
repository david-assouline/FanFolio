// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Footer from "components/Footer/Footer.js";
// Layout components
import MainNavbar from "components/Navbars/MainNavbar";
import Sidebar from "components/Sidebar";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Custom Chakra theme
import theme from "theme/theme.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

export default function Main(props) {
  const { signOut, user, ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const [userData, setUserData] = useState({
    balance: null,
    portfolio_value: null,
    profit_loss: null,
    trade_counter: null
  });

	const fetchData = async () => {
		try {
			const response = await fetch(`https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api?type=USER_DATA&user_id=${user.userId}`)
			const data = await response.json();
      setUserData({
        balance: data[0].Balance,
        portfolio_value: data[0].PortfolioValue,
        profit_loss: data[0].ProfitLoss,
        trade_counter: data[0].TradeCounter
      });
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		if (user) {
			fetchData();
		}
	}, [user]);


  const getRoute = () => {
    return window.location.pathname !== "/portal/full-screen-maps";
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/portal") {
        // Using the 'render' prop in Route to pass additional props
        return (
          <Route
            path={prop.layout + prop.path}
            render={(routeProps) => (
              <prop.component {...routeProps} userData={userData} />
            )}
            key={key}
          />
        );
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"Spectrum Solutions Dashboard"}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)"
        }}>
        <Portal>
          <MainNavbar
            onOpen={onOpen}
            logoText={"Spectrum Solutions Dashboard"}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            signOut={signOut}
            user={user}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/portal" to="/portal/dashboard" />
              </Switch>
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
        <Portal>
          {/*<FixedPlugin secondary={getActiveNavbar(routes)} fixed={fixed} onOpen={onOpen} />*/}
        </Portal>
      </MainPanel>
    </ChakraProvider>
  );
}
