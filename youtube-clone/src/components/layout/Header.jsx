import {
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBell, BsCameraVideo } from "react-icons/bs";
import { MdOutlineCastConnected } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoCompassOutline } from "react-icons/io5";

import { countries, sidebarData } from "../constants/Constants";
import YoutubeContext from "../../context/YoutubeContext";
import SearchBox from "./SearchBox";

const Header = () => {
  const { setCountry, country } = useContext(YoutubeContext);
  const [isOpen, setIsOpen] = useState(false);

  const [flag, setFlag] = useState(
    "https://t3.ftcdn.net/jpg/06/01/92/56/240_F_601925600_OPd3C0QuEE283YX2Fj6v3QtFFnkdtETF.jpg"
  );
  return (
    <>
      <Box zIndex={10} position={"sticky"} top={0}>
        <Box
          borderBottomWidth="1px"
          borderColor={"#303030"}
          padding={{ base: "0px 16px", sm: "0px 16px", md: "0px 24px" }}
          borderStyle={"solid"}
          bg={"#0f0f0f"}
          height="56px"
          display="flex"
          alignItems="center"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"} width="100%">
            <NavLink to="/">
              <Flex gap={2} alignItems={"center"}>
                <Image
                  height={"120px"}
                  width={"120px"}
                  objectFit={"contain"}
                  src={"/ytlogo.png"}
                  alt="logo"
                />
                <Text color={"white"} fontWeight={"500"} fontSize="20px">
                  
                </Text>
              </Flex>
            </NavLink>

            <Box flex="1" maxWidth="728px" mx={8}>
              <SearchBox />
            </Box>

            <Box
              display={"flex"}
              gap={{ base: 3, sm: 3, md: 4 }}
              alignItems={"center"}
            >
              <Text
                display={{ base: "none", sm: "none", md: "block" }}
                fontSize={"20px"}
                color={"white"}
                p={2}
                borderRadius="50%"
                _hover={{ bg: "#303030", cursor: "pointer" }}
              >
                <BsCameraVideo />
              </Text>
              <Text
                display={{ base: "block", sm: "block", md: "none" }}
                fontSize={"20px"}
                color={"white"}
                p={2}
                borderRadius="50%"
                _hover={{ bg: "#303030", cursor: "pointer" }}
              >
                <MdOutlineCastConnected />
              </Text>
              <Text 
                fontSize={"20px"} 
                color={"white"}
                p={2}
                borderRadius="50%"
                _hover={{ bg: "#303030", cursor: "pointer" }}
              >
                <BsBell />
              </Text>
              <Text
                display={{ base: "block", sm: "block", md: "none" }}
                fontSize={"20px"}
                color={"white"}
                p={2}
                borderRadius="50%"
                _hover={{ bg: "#303030", cursor: "pointer" }}
              >
                <NavLink to="/search/mobile">
                  <BiSearch />
                </NavLink>
              </Text>
              <Menu>
                <MenuButton>
                  <Avatar
                    display={{ base: "none", sm: "none", md: "block" }}
                    size={"sm"}
                    name="Country"
                    src={flag}
                  />
                </MenuButton>
                <Portal>
                  <MenuList zIndex={11} bg={"#323232"}>
                    {countries.map((country) => (
                      <MenuItem
                        bg={"#323232"}
                        _hover={{ bg: "#5b5b5b" }}
                        color={"white"}
                        onClick={() => {
                          setFlag(country.url);
                          setCountry(country.countryCode);
                        }}
                        key={country.name}
                      >
                        {country.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Portal>
              </Menu>
              <Avatar
                display={{ base: "block", sm: "block", md: "none" }}
                size={"sm"}
                name="Avatar"
                src={"https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
              />
            </Box>
          </Flex>
        </Box>

        <Box
          bg={"#0f0f0f"}
          display={{ base: "block", sm: "block", md: "none" }}
        >
          <Flex
            className="hidden-scrollbar"
            width={"100%"}
            overflow={"scroll"}
            align={"center"}
            size={"xs"}
            padding={"5px 10px"}
            gap={2}
          >
            <Box
              color="white"
              bg={"#303030"}
              _hover={{ bg: "#424242", cursor: "pointer" }}
              _active={{ bg: "#ededed", color: "black" }}
              fontSize={"2xl"}
              padding={"4px 8px"}
              borderRadius={"4px"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoCompassOutline />
            </Box>
            {countries.map((country_) => (
              <Box
                onClick={() => setCountry(country_.countryCode)}
                key={country_.name}
                _hover={{ cursor: "pointer" }}
                color={country === country_.countryCode ? "black" : "white"}
                bg={country === country_.countryCode ? "#ededed" : "#303030"}
                padding={"4px 8px"}
                borderRadius={"4px"}
              >
                {country_.name}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <MobileMenubar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;

const MobileMenubar = ({ isOpen, setIsOpen }) => (
  <>
    <Box
      width={"100vh"}
      height={"100vw"}
      position={"fixed"}
      top={0}
      left={0}
      display={isOpen ? "Block" : "none"}
      bg={"#0000009b"}
      onClick={() => setIsOpen(!isOpen)}
      zIndex={12}
    >
      <Box
        bg="#303030"
        height="100vh"
        transform={isOpen ? "" : "translateX(-100%)"}
        width={"80vw"}
        transition={"all 1s"}
        display={isOpen ? "Block" : "none"}
        boxShadow="0px -1px 10px rgba(0, 0, 0, 0.1)"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box>
          <Box marginBottom={"15px"} padding={"0px 10px"}>
            <NavLink to="/">
              <Flex alignItems={"center"}>
                <Image
                  height={"7vh"}
                  objectFit={"contain"}
                  src={"/ytlogo.png"}
                  alt="logo"
                />
                <Text color={"white"} fontWeight={"bold"}>
                  YouTube
                </Text>
              </Flex>
            </NavLink>
          </Box>

          <Flex direction={"column"} gap="2">
            {sidebarData.map((data) => (
              <NavLink
                key={data.name}
                to={data.name === "Trending" ? "/" : `/?query=${data.name}`}
              >
                <Box
                  color="white"
                  display="flex"
                  gap={4}
                  padding="8px 20px"
                  alignItems="center"
                  _hover={{ background: "#3a3a3a" }}
                >
                  {" "}
                  <Text fontSize="2xl">{data.icon} </Text>{" "}
                  <Text>{data.name}</Text>
                </Box>
              </NavLink>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  </>
);
