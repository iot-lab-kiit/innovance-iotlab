import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid, Hidden, Avatar, Typography} from "@mui/material";

export default function Index({peopleRef, list}) {

    console.log(list);
    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#FFF'} ref={peopleRef} px={{md: 3, xs: 1}}>
                <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4} mb={4}>
                    <Title first={'People behind this '} second={'Event'} />
                    <Box textAlign={'center'} color={'#616161'} maxWidth={'750px'}>
                        Take a look at the minds that made this event possible. As you navigate through the event, take a moment to appreciate the collective effort and expertise of the individuals who form the backbone of Innovance 2.0.
                    </Box>
                    <Box mt={8} />
                    {/* <Hidden xlUp>
                        <Grid container spacing={1}>
                            {
                                [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6].map((each) => (
                                    <Grid key={each} item md={4} xs={12}>
                                        <Box width={'100%'} boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}>
                                            <img src={`/images/img${each}.jpg`} alt={'img'} width={'100%'} style={{height: '263px'}}/>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Hidden>
                    <Hidden xlDown>
                        <Grid container spacing={1}>
                            {
                                [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6].map((each) => (
                                    <Grid key={each} item md={4} xs={12}>
                                        <Box width={'100%'} boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}>
                                            <img src={`/images/img${each}.jpg`} alt={'img'} width={'100%'} style={{height: '320px'}}/>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Hidden> */}
                    <Hidden mdUp>
                    <Grid container spacing={4}>
                        {list && list.map((each) => (
                            <Grid item key={each.id} md={3} xs={12}>
                            <Box 
                                sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: "center",
                                }}
                            >
                               <Avatar 
                                    alt={each.name} 
                                    src={`https://iotkiit.in/_next/image?url=https%3A%2F%2Fapi.iotkiit.in%2Fassets%2F${each.avatar}&w=256&q=75`} 
                                    sx={{ 
                                        width: 300, 
                                        height: 300,
                                        position: 'relative',
                                        transition: 'filter 0.3s ease-in-out', // Add transition for smooth color change
                                        '&:hover': { 
                                        filter: 'brightness(0.5)',
                                        '&::after': {
                                            content: `"${each.name}"`, // Add each.position
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: '#fff', // Make the text white
                                            borderRadius: '50%',
                                            transition: 'background-color 0.3s ease-in-out', // Add transition for smooth color change
                                            filter: 'none', // Reset the filter property
                                        }
                                        }
                                    }} 
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    </Hidden>
                    <Hidden mdDown>
                    <Grid container spacing={4}>
                        {list && list.map((each) => (
                            <Grid item key={each.id} md={3} xs={12}>
                            <Box 
                                sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                }}
                            >
                                <Avatar 
                                    alt={each.name} 
                                    src={`https://iotkiit.in/_next/image?url=https%3A%2F%2Fapi.iotkiit.in%2Fassets%2F${each.avatar}&w=256&q=75`} 
                                    sx={{ 
                                        width: 200, 
                                        height: 200,
                                        position: 'relative',
                                        transition: 'filter 0.3s ease-in-out', // Add transition for smooth color change
                                        '&:hover': { 
                                        filter: 'brightness(0.5)',
                                        '&::after': {
                                            content: `"${each.name}"`, // Add each.position
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: '#fff', // Make the text white
                                            borderRadius: '50%',
                                            transition: 'background-color 0.3s ease-in-out', // Add transition for smooth color change
                                            filter: 'none', // Reset the filter property
                                        }
                                        }
                                    }} 
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    </Hidden>
                </Box>
            </Box>


        </>
    )
}
