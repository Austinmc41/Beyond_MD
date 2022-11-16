
import React from 'react'
import {useEffect, useState} from 'react';
import { 
        Typography, 
        Card, 
        Stack, 
        CardMedia,
        Button
    } 
    from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Fab from '@mui/material/Fab';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Favorite from './Favorite';


const Consume = () => {

  const date_builder = function (s) {

    // getting all of the date things :)
    const date = new Date(s)
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
    const year = date.getFullYear()
    const str_time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    // building date string from date things and returning date string
    const date_string = `${month} ${day}, ${year}, ${str_time}`
    return date_string
  }

  const loadData = () => {
    fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results)
          setData(data.results)
        });
  }

  const [data, setData] = useState([]);
  useEffect(()=> {loadData();
  }, []);


  return (
    <Box mt={10}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center" sx={{ flexGrow: 1 }}>
    <Typography sx={{textDecoration:"underline"}} variant="h2" color="white">Choose Favorite Launches!</Typography>
    <Grid container alignItems="center"
     spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {/* <Stack alignItems="center" direction="column" spacing={10.5} mt={5}>
    <Typography sx={{textDecoration:"underline"}} variant="h2"color="white">Choose favorite launches!</Typography>
    {data.map((data) => (
        <Stack alignItems="center"direction="column" spacing={1.5} mt={5}>
                      <Card raised sx={{height:"250px",
                                          width:"368.88px"}}
                          >
                          <CardMedia
                          component="img"
                          sx={{height:'100%',
                              width:"100%"}}
                          src= {data.image}
                          >
                          </CardMedia>
                      </Card>
                      <Typography color="white">{data.name}</Typography>
                      <Typography color="white">{date_builder(data.net)}</Typography>
                      <Favorite/>

        </Stack>
      
      ))}
    </Stack> */}
    {data.map((data) => (
      <Grid  display="flex" flexDirection="column" justifyContent="center" alignItems="center" item xs={2} sm={4} md={4} key={data.id}>
                      <Card raised sx={{height:"250px",
                                          width:"368.88px"}}
                          >
                          <CardMedia
                          component="img"
                          sx={{height:'100%',
                              width:"100%"}}
                          src= {data.image}
                          >
                          </CardMedia>
                      </Card>
                      <Typography color="white">{data.name}</Typography>
                      <Typography color="white">{date_builder(data.net)}</Typography>
                      <Favorite/>

      </Grid>
      
      ))}
      </Grid>
    </Box>
  )
}

export default Consume