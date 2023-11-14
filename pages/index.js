import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../page-components/Home/Navbar";
import Box from "@mui/material/Box";
import Main from "../page-components/Home/Main";
import Schedule from "../page-components/Home/Schedule";
import About from "../page-components/Home/About";
import Plans from "../page-components/Home/Plans";
import Sponsors from "../page-components/Home/Sponsors";
import Gallery from "../page-components/Home/Gallery";
import Contact from "../page-components/Home/Contact";
import Venue from "../page-components/Home/Venue";
import People from '../page-components/Home/People';
import { useRef } from "react";


export const getStaticProps = async () => {
  const res = await fetch('https://api.iotkiit.in/items/innovance_team');
  const data = await res.json();
  return {
      props: { list: data.data }
  }
}

export default function Index(props) {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const venueRef = useRef(null);
  const planRef = useRef(null);
  const sponsorRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const peopleRef = useRef(null);

  // console.log("hii")

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: "#4763B7",
            },
            secondary: {
              main: "#204341",
            },
            white: {
              main: "#FFF",
            },
          },
        })}
      >
        <Box color={"#000"} bgcolor={"#FFF"}>
          <Navbar
            mainRef={mainRef}
            aboutRef={aboutRef}
            scheduleRef={scheduleRef}
            venueRef={venueRef}
            planRef={planRef}
            sponsorRef={sponsorRef}
            galleryRef={galleryRef}
            contactRef={contactRef}
          />
          <Main mainRef={mainRef} scheduleRef={scheduleRef} />
          <About aboutRef={aboutRef} />
          <Schedule scheduleRef={scheduleRef} />
          <Venue venueRef={venueRef} />
          <Plans planRef={planRef} />
          <Sponsors sponsorRef={sponsorRef} />
          <People peopleRef={peopleRef} list={props.list} />
          <Gallery galleryRef={galleryRef} />
          <Contact contactRef={contactRef} />
        </Box>
      </ThemeProvider>
    </>
  );
}

