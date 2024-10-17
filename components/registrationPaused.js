import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Switch,
    HStack,
    Select,
    Progress,
    Stack,
    Button,
    Heading,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    useColorModeValue,
} from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Registerationpaused() {

    return (
        <div>
            <Flex
                minH={"10vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                        Registration for Innovance 3.0 Coming Soon!
                        </Heading>
                        <Heading fontSize={"2xl"} textAlign={"center"}>
                        We’re excited to announce that Innovance 3.0 is on the horizon. While our registration page was previously open for Innovance 2.0, we’re currently preparing to launch a bigger and better experience for Innovance 3.0. <br/>
Registration is temporarily paused as we finalize the details, but stay tuned – we’ll be back soon with all the information you need to join us.
                        </Heading>
                        {/* <Typography variant="body1">We are pleased with the overwhemling responses! See you in the event</Typography> */}
                    </Stack>
                </Stack>
            </Flex>
        </div>
    );
}
