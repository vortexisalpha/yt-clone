import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => (
  <>
    <Box bg={"#0f0f0f"} minHeight="100vh">
      <Header />

      <Flex>
        <Box
          display={{ base: "none", sm: "none", md: "block" }}
          flexShrink={0}
          width={"240px"}
        >
          <Box
            position={"fixed"}
            top={"56px"}
            left={"0"}
            width={"240px"}
            height={"calc(100vh - 56px)"}
            overflowY={"auto"}
            bg={"#0f0f0f"}
            zIndex={10}
          >
            <Sidebar />
          </Box>
        </Box>

        <Box flex="1" ml={{ base: 0, md: "240px" }}>
          <Box minHeight={"calc(100vh - 56px)"} width={"100%"}>
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  </>
);

export default Layout;
