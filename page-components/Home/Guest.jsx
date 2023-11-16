import Box from "@mui/material/Box";
import Title from "./Title";
import {Button, Container, Grid, Hidden, Avatar, Typography, ImageList} from "@mui/material";
import Image from "next/image";
export default function Index({peopleRef, list}) {

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#FFF'} ref={peopleRef} px={{md: 3, xs: 1}} pb={1}>
                <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={2} mb={2} >
                    <Title first={'Our Guest'} second={'Speaker'} />
                    <Box textAlign={'center'} color={'#616161'} maxWidth={'750px'}>
                    Get ready to witness greatness as we unveil the star of our Innovance 2.0. The YouTube sensation, a master of motivation, a tech wizard in data structures and algorithms, and the brains behind the groundbreaking SDE Sheet! 
                    </Box>
                    <Box textAlign={'center'} color={'#616161'} maxWidth={'750px'}>
                      Limited Book Slot. Hurry Up !!
                    </Box>
                    <Box mt={8} />
                    
                    {/* <Hidden lgDown> */}
                    {/* <Grid container spacing={5}>
                        {list && list.map((each) => (
                            <Grid item key={each.id} md={2} xs={12}>
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
                                        width: 180, 
                                        height: 180,
                                        position: 'relative',
                                        transition: 'filter 0.3s ease-in-out', // Add transition for smooth color change
                                        '&:hover': { 
                                        filter: 'brightness(1)',
                                        '&::after': {
                                            content: `"${each.position}"`, // Add each.position
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgb(49, 69, 128, 0.9)',
                                            color: '#fff', // Make the text white
                                            borderRadius: '50%',
                                            transition: 'background-color 0.3s ease-in-out', // Add transition for smooth color change
                                            filter: 'none', // Reset the filter property
                                        }
                                        }
                                    }} 
                                    />
                                    <div style={{fontSize: '15px' }}>{each.name}</div>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    </Hidden>
                    <Hidden lgUp> */}
                    <Grid container  width={'90%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mb={3}>
                        {/* {list && list.map((each) => (
                            <Grid item key={each.id} md={3} xs={12}> */}
                            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}
                                sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                }}
                            >   
                                
                                <Avatar
                                    alt={"Striver"} 
                                    src="/images/Striver Innovance.png" 
                                    width={500}
                                    height={380}
                                    sx={{ 
                                        width: 380, 
                                        height: 380,
                                        position: 'relative',
                                        transition: 'filter 0.3s ease-in-out', // Add transition for smooth color change
                                        '&:hover': { 
                                        filter: 'brightness(0.5)',
                                        '&::after': {
                                            // content:`"${Striver}"`, // Add each.position
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgb(49, 69, 128, 0.9)',
                                            color: '#fff', // Make the text white
                                            borderRadius: '50%',
                                            transition: 'background-color 0.3s ease-in-out', // Add transition for smooth color change
                                            filter: 'none', // Reset the filter property
                                        }
                                        }
                                    }} 
                                    />
                                    {/* <div style={{fontSize: '15px' }}>Striver</div> */}
                                </Box>
                            </Grid>
                        {/* ))}
                    </Grid> */}
                    {/* </Hidden> */}
                </Box>
            </Box>


        </>
    )
}
