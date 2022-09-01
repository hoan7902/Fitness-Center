import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import '../App.css'


import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
        sx={{ mt: {lg: '212px', xs:'70px'},
              ml: {sm: '50px'}}}
        position="relative"
        p='20px'
    >
        <Typography color='#ff2625'
            fontWeight='600'
            fontSize='26px'
        >
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} m='20px 0'>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px'>
            Check out the most effective exercises
        </Typography>
        <Button sx={{mt: {md: '15px', xs: '7px'}, backgroundColor: '#ff2625'}} variant="contained" color="error">Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color='#ff2625'
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
            fontSize='200px'
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
