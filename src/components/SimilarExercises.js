import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    console.log(targetMuscleExercises.length)
  return (
    <Box sx={{ marginTop: {lg: '100px', xs: '0px'}}}>
        <Typography textAlign="center" sx={{ fontSize: {lg: '42px', xs: '35px'}, marginBottom: {lg: '35px', xs: '20px'}}} variant='h3'>
            Exercise that target the same muscle group  
        </Typography>
        <Stack direction='row' sx={{p:'2px', position:'relative'}}>
            {targetMuscleExercises.length ? 
                <HorizontalScrollBar data={targetMuscleExercises}/>:
                <Loader/>
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises
