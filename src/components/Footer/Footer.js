/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()}{" "}
        <Text as="span">
          {"FanFolio"}
        </Text>
      </Text>
      {/*<List display="flex">*/}
      {/*  <ListItem*/}
      {/*    me={{*/}
      {/*      base: "20px",*/}
      {/*      md: "44px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Link color="gray.400" href="https://www.creative-tim.com">*/}
      {/*      {document.documentElement.dir === "rtl"*/}
      {/*        ? "توقيت الإبداعية"*/}
      {/*        : "Creative Tim"}*/}
      {/*    </Link>*/}
      {/*  </ListItem>*/}
      {/*  <ListItem*/}
      {/*    me={{*/}
      {/*      base: "20px",*/}
      {/*      md: "44px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Link color="gray.400" href="https://www.simmmple.com">*/}
      {/*      {document.documentElement.dir === "rtl" ? "سيممبل" : "Simmmple"}*/}
      {/*    </Link>*/}
      {/*  </ListItem>*/}
      {/*  <ListItem*/}
      {/*    me={{*/}
      {/*      base: "20px",*/}
      {/*      md: "44px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Link*/}
      {/*      color="gray.400"*/}
      {/*      href="#blog"*/}
      {/*      href="https://creative-tim.com/blog"*/}
      {/*    >*/}
      {/*      {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}*/}
      {/*    </Link>*/}
      {/*  </ListItem>*/}
      {/*  <ListItem>*/}
      {/*    <Link*/}
      {/*      color="gray.400"*/}
      {/*      href="#license"*/}
      {/*      href="https://www.creative-tim.com/license"*/}
      {/*    >*/}
      {/*      {document.documentElement.dir === "rtl" ? "رخصة" : "License"}*/}
      {/*    </Link>*/}
      {/*  </ListItem>*/}
      {/*</List>*/}
    </Flex>
  );
}
