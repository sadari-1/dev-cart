import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Img30 from '../asset/deli.png'

function About() {
  return (
    <div>
      
      <Box>
        <Container fixed >
        <Grid container align="center" sx={{display:'flex',height:'80vh',width:'400px',backgroundColor:'orange',}}>
        <Typography variant='h4'>About us </Typography>
        <Grid item md={8}>
          <Typography variant='body2'>Everything began in 1946 when the proprietor opened his first espresso and doughnut and sandwich shop. It was gigantically fruitful and this drove him to begin another shop called organization name. He opened the principal store in 1950 in Massachusetts in the USA.</Typography>

          <Typography variant='body2'>We’re glad for our Georgia legacy, and all the more explicitly that we consider Atlanta the place where we grew up. Our central command, referred to inside the organization as the Support Center for eatery Operators, is found only outside of downtown.</Typography>

        </Grid>
        <Grid item md={4}>
          <img src={Img30} height={200} width={250}/>
        </Grid>

        </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default About
