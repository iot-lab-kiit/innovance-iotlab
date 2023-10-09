import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Container} from "@mui/material";


export default function Index({aboutRef}) {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box width={'100%'} fontSize={'18px'}>
                    <Box mt={3} fontWeight={700} textAlign={'center'} color={'red'} fontSize={'24px'}>
                        Registration Opening Soon !!
                    </Box>
                    {/* <Box mt={3} fontWeight={700} textAlign={'center'} color={'red'}>
                        Message from IoT Lab
                    </Box>
                    <Box textAlign={'center'} color={'#ff6246'} maxWidth={'900px'} mx={'auto'}>
                        We hope you had a great time at our event and we can't wait to see you next year! Mark your calendars for our next event, and don't miss out on the opportunity to join us for another exciting and informative experience. Thank you for your continued support, and see you soon!
                    </Box> */}
                </Box>
                <Box pt={8} pb={6} width={'100%'} mb={6} ref={aboutRef}>
                    <Title first={'About'} second={'The Event'} />
                    <Box textAlign={'center'} color={'#616161'}>
                        Innovance- a grand two-day event that allows you to explore various domains and find your interest. You can experience up to 8 different domains like cybersecurity, marketing Web Development, Content writing and many more. Get a chance to participate in fun games, get participation certificates and win exciting prizes.
                    </Box>
                </Box>

            </Container>

        </>
    )
}
