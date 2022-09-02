import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exercisesVideo, name }) => {
    console.log(exercisesVideo)
    return (
        <Box sx={{ marginTop: { lg: '60px', xs: '20px' } }} p='20px' >
            <Typography sx={{fontSize: {lg: '42px', xs: '35px'}}} textAlign='center' variant='h4' mb='40px'>
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name} </span> exercise videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0px' },
                    marginBottom: { lg: '0', xs: '30px' }
                }}
            >
                {exercisesVideo?.slice(0, 3).map((item, index) => (
                    <Box sx={{mb: {lg: '0', xs: '20px'}}}>
                        <a
                            key={index}
                            className='exercise-video'
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target='blank'
                            rel='noreferrer'
                        >
                            <img style={{ borderRadius: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                <Typography sx={{ fontSize: { lg: '27px', xs: '20px' } }} variant='h5' color='#000' textAlign='center'>
                                    {item.video.title}
                                </Typography>
                                <Typography color='#000' textAlign='center'>
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
